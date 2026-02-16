'use client';

import { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import type { Quiz } from '@/types';
import { cn } from '@/lib/utils';

interface QuizContainerProps {
    quiz: Quiz;
    certificationName: string;
}

type QuizState = 'intro' | 'active' | 'review' | 'results';

interface UserAnswer {
    questionId: string;
    selectedAnswerIds: string[];
}

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function CheckIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M20 6L9 17l-5-5" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M18 6L6 18M6 6l12 12" />
        </svg>
    );
}

function ArrowLeftIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
    );
}

function ArrowRightIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    );
}

function PlayIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M8 5v14l11-7z" />
        </svg>
    );
}

function RefreshIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M3 12a9 9 0 019-9 9.75 9.75 0 016.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
            <path d="M21 12a9 9 0 01-9 9 9.75 9.75 0 01-6.74-2.74L3 16" />
            <path d="M8 16H3v5" />
        </svg>
    );
}

export function QuizContainer({ quiz, certificationName }: QuizContainerProps) {
    const [state, setState] = useState<QuizState>('intro');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

    const shuffledQuestions = useMemo(() => shuffleArray(quiz.questions), [quiz.questions]);

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isMultipleChoice = currentQuestion?.questionType === 'MULTIPLE_CHOICE';

    const currentUserAnswer = userAnswers.find((a) => a.questionId === currentQuestion?.id);

    const handleAnswerSelect = useCallback((answerId: string) => {
        if (!currentQuestion) return;

        setUserAnswers((prev) => {
            const existingAnswer = prev.find((a) => a.questionId === currentQuestion.id);

            if (isMultipleChoice) {
                if (existingAnswer) {
                    const isSelected = existingAnswer.selectedAnswerIds.includes(answerId);
                    return prev.map((a) =>
                        a.questionId === currentQuestion.id
                            ? {
                                  ...a,
                                  selectedAnswerIds: isSelected
                                      ? a.selectedAnswerIds.filter((id) => id !== answerId)
                                      : [...a.selectedAnswerIds, answerId],
                              }
                            : a
                    );
                }
                return [...prev, { questionId: currentQuestion.id, selectedAnswerIds: [answerId] }];
            }

            if (existingAnswer) {
                return prev.map((a) =>
                    a.questionId === currentQuestion.id
                        ? { ...a, selectedAnswerIds: [answerId] }
                        : a
                );
            }
            return [...prev, { questionId: currentQuestion.id, selectedAnswerIds: [answerId] }];
        });
    }, [currentQuestion, isMultipleChoice]);

    const handleNext = useCallback(() => {
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        } else {
            setState('results');
        }
    }, [currentQuestionIndex, shuffledQuestions.length]);

    const handlePrevious = useCallback(() => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1);
        }
    }, [currentQuestionIndex]);

    const handleStart = useCallback(() => {
        setState('active');
        setCurrentQuestionIndex(0);
        setUserAnswers([]);
    }, []);

    const handleRestart = useCallback(() => {
        setState('intro');
        setCurrentQuestionIndex(0);
        setUserAnswers([]);
    }, []);

    const handleReview = useCallback(() => {
        setState('review');
        setCurrentQuestionIndex(0);
    }, []);

    const calculateResults = useMemo(() => {
        let correct = 0;
        shuffledQuestions.forEach((question) => {
            const userAnswer = userAnswers.find((a) => a.questionId === question.id);
            const correctAnswerIds = question.answers
                .filter((a) => a.isCorrect)
                .map((a) => a.id)
                .sort();
            const selectedIds = (userAnswer?.selectedAnswerIds ?? []).sort();

            const isCorrect =
                correctAnswerIds.length === selectedIds.length &&
                correctAnswerIds.every((id, index) => id === selectedIds[index]);

            if (isCorrect) correct++;
        });

        const total = shuffledQuestions.length;
        const percentage = Math.round((correct / total) * 100);
        const passed = percentage >= quiz.passingScore;

        return { correct, total, percentage, passed };
    }, [shuffledQuestions, userAnswers, quiz.passingScore]);

    if (state === 'intro') {
        return (
            <div className="container mx-auto max-w-3xl px-4 py-12">
                <div className="rounded-2xl border border-border/50 bg-secondary/20 p-8 text-center">
                    <div className="mb-6">
                        <span className="inline-block rounded-full bg-primary/20 px-4 py-1 text-sm font-medium text-primary">
                            {certificationName}
                        </span>
                    </div>
                    <h1 className="mb-4 text-3xl font-bold text-foreground">{quiz.title}</h1>
                    <p className="mb-8 text-foreground-subtle">{quiz.description}</p>

                    <div className="mb-8 flex flex-wrap justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-foreground-subtle">Questions:</span>
                            <span className="font-semibold text-foreground">{quiz.questions.length}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-foreground-subtle">Time Limit:</span>
                            <span className="font-semibold text-foreground">{quiz.timeLimit} minutes</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-foreground-subtle">Passing Score:</span>
                            <span className="font-semibold text-foreground">{quiz.passingScore}%</span>
                        </div>
                    </div>

                    <button
                        onClick={handleStart}
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        <PlayIcon />
                        Start Quiz
                    </button>
                </div>
            </div>
        );
    }

    if (state === 'results') {
        const { correct, total, percentage, passed } = calculateResults;

        return (
            <div className="container mx-auto max-w-3xl px-4 py-12">
                <div className="rounded-2xl border border-border/50 bg-secondary/20 p-8 text-center">
                    <div className={cn(
                        'mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full',
                        passed ? 'bg-emerald-500/20' : 'bg-red-500/20'
                    )}>
                        {passed ? (
                            <CheckIcon />
                        ) : (
                            <XIcon />
                        )}
                    </div>

                    <h2 className="mb-2 text-3xl font-bold text-foreground">
                        {passed ? 'Congratulations!' : 'Keep Practicing!'}
                    </h2>
                    <p className="mb-8 text-foreground-subtle">
                        {passed
                            ? 'You passed the practice quiz. Great job!'
                            : `You need ${quiz.passingScore}% to pass. Review the material and try again.`}
                    </p>

                    <div className="mb-8 rounded-xl bg-background/50 p-6">
                        <div className="mb-4 text-6xl font-bold text-foreground">{percentage}%</div>
                        <div className="text-foreground-subtle">
                            {correct} out of {total} questions correct
                        </div>
                        <div className="mt-2">
                            <div className="h-3 w-full overflow-hidden rounded-full bg-border/50">
                                <div
                                    className={cn(
                                        'h-full rounded-full transition-all duration-500',
                                        passed ? 'bg-emerald-500' : 'bg-red-500'
                                    )}
                                    style={{ width: `${percentage}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={handleReview}
                            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-colors hover:bg-secondary/50"
                        >
                            Review Answers
                        </button>
                        <button
                            onClick={handleRestart}
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            <RefreshIcon />
                            Try Again
                        </button>
                    </div>

                    <div className="mt-8">
                        <Link
                            href="/quizzes"
                            className="text-sm text-foreground-subtle hover:text-foreground"
                        >
                            ← Back to all quizzes
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const isReviewMode = state === 'review';
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;

    return (
        <div className="container mx-auto max-w-3xl px-4 py-8">
            <div className="mb-6 flex items-center justify-between">
                <Link
                    href="/quizzes"
                    className="text-sm text-foreground-subtle hover:text-foreground"
                >
                    ← Back to quizzes
                </Link>
                <span className="text-sm text-foreground-subtle">
                    Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
                </span>
            </div>

            <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-border/30">
                <div
                    className="h-full rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="rounded-2xl border border-border/50 bg-secondary/20 p-6 md:p-8">
                {isMultipleChoice && (
                    <div className="mb-4">
                        <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium text-orange-300">
                            Select all that apply
                        </span>
                    </div>
                )}

                <h2 className="mb-6 text-xl font-semibold text-foreground">
                    {currentQuestion?.questionText}
                </h2>

                <div className="space-y-3">
                    {currentQuestion?.answers.map((answer) => {
                        const isSelected = currentUserAnswer?.selectedAnswerIds.includes(answer.id);
                        const isCorrect = answer.isCorrect;

                        let answerClasses = 'border-border/50 bg-background/50 hover:border-primary/50 hover:bg-primary/5';

                        if (isReviewMode) {
                            if (isCorrect) {
                                answerClasses = 'border-emerald-500/50 bg-emerald-500/10';
                            } else if (isSelected && !isCorrect) {
                                answerClasses = 'border-red-500/50 bg-red-500/10';
                            }
                        } else if (isSelected) {
                            answerClasses = 'border-primary bg-primary/10';
                        }

                        return (
                            <button
                                key={answer.id}
                                onClick={() => !isReviewMode && handleAnswerSelect(answer.id)}
                                disabled={isReviewMode}
                                className={cn(
                                    'flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all',
                                    answerClasses,
                                    isReviewMode && 'cursor-default'
                                )}
                            >
                                <div className={cn(
                                    'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors',
                                    isReviewMode && isCorrect && 'border-emerald-500 bg-emerald-500',
                                    isReviewMode && isSelected && !isCorrect && 'border-red-500 bg-red-500',
                                    !isReviewMode && isSelected && 'border-primary bg-primary',
                                    !isReviewMode && !isSelected && 'border-foreground-subtle'
                                )}>
                                    {isReviewMode && isCorrect && (
                                        <CheckIcon />
                                    )}
                                    {isReviewMode && isSelected && !isCorrect && (
                                        <XIcon />
                                    )}
                                    {!isReviewMode && isSelected && (
                                        <CheckIcon />
                                    )}
                                </div>
                                <span className={cn(
                                    'text-foreground',
                                    isReviewMode && isCorrect && 'text-emerald-300',
                                    isReviewMode && isSelected && !isCorrect && 'text-red-300'
                                )}>
                                    {answer.answerText}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {isReviewMode && currentQuestion?.explanation && (
                    <div className="mt-6 rounded-lg border border-blue-500/30 bg-blue-500/10 p-4">
                        <h4 className="mb-2 font-semibold text-blue-300">Explanation</h4>
                        <p className="text-sm text-foreground-subtle">{currentQuestion.explanation}</p>
                    </div>
                )}

                <div className="mt-8 flex items-center justify-between">
                    <button
                        onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                        className={cn(
                            'inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 font-medium transition-colors',
                            currentQuestionIndex === 0
                                ? 'cursor-not-allowed opacity-50'
                                : 'hover:bg-secondary/50'
                        )}
                    >
                        <ArrowLeftIcon />
                        Previous
                    </button>

                    {isReviewMode ? (
                        currentQuestionIndex === shuffledQuestions.length - 1 ? (
                            <button
                                onClick={handleRestart}
                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                                <RefreshIcon />
                                Try Again
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                                Next
                                <ArrowRightIcon />
                            </button>
                        )
                    ) : (
                        <button
                            onClick={handleNext}
                            disabled={!currentUserAnswer || currentUserAnswer.selectedAnswerIds.length === 0}
                            className={cn(
                                'inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2 font-semibold text-primary-foreground transition-colors',
                                (!currentUserAnswer || currentUserAnswer.selectedAnswerIds.length === 0)
                                    ? 'cursor-not-allowed opacity-50'
                                    : 'hover:bg-primary/90'
                            )}
                        >
                            {currentQuestionIndex === shuffledQuestions.length - 1 ? 'Finish' : 'Next'}
                            <ArrowRightIcon />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
