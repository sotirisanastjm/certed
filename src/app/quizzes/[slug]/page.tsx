import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MinimalMenu } from '@/components/home/minimal-menu';
import { getQuizBySlug, getActiveQuizzes } from '@/data';
import { certifications } from '@/data/certifications';
import { QuizContainer } from './quiz-container';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const quizzes = getActiveQuizzes();
    return quizzes.map((quiz) => ({ slug: quiz.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const quiz = getQuizBySlug(slug);

    if (!quiz) {
        return { title: 'Quiz Not Found' };
    }

    const certification = certifications.find((c) => c.id === quiz.certificationId);

    return {
        title: quiz.title,
        description: quiz.description ?? `Practice quiz for ${certification?.name ?? 'Sitecore'} certification.`,
    };
}

export default async function QuizPage({ params }: PageProps) {
    const { slug } = await params;
    const quiz = getQuizBySlug(slug);

    if (!quiz) {
        notFound();
    }

    const certification = certifications.find((c) => c.id === quiz.certificationId);

    return (
        <>
            <MinimalMenu />
            <main id="main-content" className="min-h-screen">
                <QuizContainer
                    quiz={quiz}
                    certificationName={certification?.name ?? 'Sitecore Certification'}
                />
            </main>
        </>
    );
}
