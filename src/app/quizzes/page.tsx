import Link from 'next/link';
import type { Metadata } from 'next';
import { MinimalMenu } from '@/components/home/minimal-menu';
import { CleanPageHero } from '@/components/ui/clean-page-hero';
import { getActiveQuizzes, categories } from '@/data';
import { certifications } from '@/data/certifications';

export const metadata: Metadata = {
    title: 'Practice Quizzes',
    description: 'Test your Sitecore certification knowledge with practice quizzes for XM Cloud, Content Hub, CDP, Personalize, and more.',
};

function getCategoryColor(categoryId: string): string {
    switch (categoryId) {
        case 'cat-platform-dxp':
            return 'border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10';
        case 'cat-xm-cloud':
            return 'border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10';
        case 'cat-content-cloud':
            return 'border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10';
        case 'cat-experience-cloud':
            return 'border-orange-500/30 bg-orange-500/5 hover:bg-orange-500/10';
        case 'cat-commerce-cloud':
            return 'border-pink-500/30 bg-pink-500/5 hover:bg-pink-500/10';
        default:
            return 'border-gray-500/30 bg-gray-500/5 hover:bg-gray-500/10';
    }
}

function getCategoryBadgeColor(categoryId: string): string {
    switch (categoryId) {
        case 'cat-platform-dxp':
            return 'bg-blue-500/20 text-blue-300';
        case 'cat-xm-cloud':
            return 'bg-purple-500/20 text-purple-300';
        case 'cat-content-cloud':
            return 'bg-emerald-500/20 text-emerald-300';
        case 'cat-experience-cloud':
            return 'bg-orange-500/20 text-orange-300';
        case 'cat-commerce-cloud':
            return 'bg-pink-500/20 text-pink-300';
        default:
            return 'bg-gray-500/20 text-gray-300';
    }
}

function QuizIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
        >
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12,6 12,12 16,14" />
        </svg>
    );
}

function QuestionIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
    );
}

export default function QuizzesPage() {
    const activeQuizzes = getActiveQuizzes();
    const categoryMap = new Map(categories.map((cat) => [cat.id, cat]));
    const certificationMap = new Map(certifications.map((cert) => [cert.id, cert]));

    const quizzesWithDetails = activeQuizzes.map((quiz) => {
        const certification = certificationMap.get(quiz.certificationId);
        const category = certification ? categoryMap.get(certification.categoryId) : undefined;
        return {
            ...quiz,
            certification,
            category,
        };
    });

    const groupedByCategory = quizzesWithDetails.reduce(
        (acc, quiz) => {
            const categoryId = quiz.certification?.categoryId ?? 'unknown';
            if (!acc[categoryId]) {
                acc[categoryId] = [];
            }
            acc[categoryId].push(quiz);
            return acc;
        },
        {} as Record<string, typeof quizzesWithDetails>
    );

    const sortedCategories = Object.keys(groupedByCategory).sort((a, b) => {
        const catA = categoryMap.get(a);
        const catB = categoryMap.get(b);
        return (catA?.sortOrder ?? 999) - (catB?.sortOrder ?? 999);
    });

    return (
        <>
            <MinimalMenu />
            <main id="main-content" className="min-h-screen">
                <CleanPageHero
                    title="Practice Quizzes"
                    subtitle="Test your knowledge and prepare for Sitecore certification exams with interactive practice quizzes."
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Quizzes' },
                    ]}
                />

                <section className="container mx-auto max-w-6xl px-4 py-12">
                    <div className="mb-8 text-center">
                        <p className="text-foreground-subtle">
                            Choose a certification quiz to begin practicing. Each quiz is based on official exam objectives and documentation.
                        </p>
                    </div>

                    {sortedCategories.map((categoryId) => {
                        const category = categoryMap.get(categoryId);
                        const categoryQuizzes = groupedByCategory[categoryId];

                        return (
                            <div key={categoryId} className="mb-12">
                                <h2 className="mb-6 text-xl font-semibold text-foreground">
                                    {category?.name ?? 'Other'}
                                </h2>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {categoryQuizzes.map((quiz) => (
                                        <Link
                                            key={quiz.id}
                                            href={`/quizzes/${quiz.slug}`}
                                            className={`group relative flex flex-col rounded-xl border p-6 transition-all duration-200 ${getCategoryColor(categoryId)}`}
                                        >
                                            <div className="mb-4 flex items-start justify-between">
                                                <div className={`rounded-lg p-2 ${getCategoryBadgeColor(categoryId)}`}>
                                                    <QuizIcon />
                                                </div>
                                                <span className={`rounded-full px-2 py-1 text-xs font-medium ${getCategoryBadgeColor(categoryId)}`}>
                                                    {quiz.difficulty}
                                                </span>
                                            </div>

                                            <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                                {quiz.certification?.shortName ?? quiz.title}
                                            </h3>
                                            <p className="mb-4 flex-1 text-sm text-foreground-subtle line-clamp-2">
                                                {quiz.description}
                                            </p>

                                            <div className="flex items-center gap-4 text-xs text-foreground-subtle">
                                                <span className="flex items-center gap-1">
                                                    <QuestionIcon />
                                                    {quiz.questions.length} questions
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <ClockIcon />
                                                    {quiz.timeLimit} min
                                                </span>
                                                <span className="ml-auto text-primary font-medium">
                                                    {quiz.passingScore}% to pass
                                                </span>
                                            </div>

                                            <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-xl bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    <div className="mt-12 rounded-xl border border-border/50 bg-secondary/20 p-6 text-center">
                        <h3 className="mb-2 text-lg font-semibold text-foreground">More Quizzes Coming Soon</h3>
                        <p className="text-sm text-foreground-subtle">
                            We&apos;re continuously adding new practice questions based on the latest Sitecore documentation and exam objectives.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
