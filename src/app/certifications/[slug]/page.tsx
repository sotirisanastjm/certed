import { notFound } from 'next/navigation';
import Link from 'next/link';
import { categories, getCertificationBySlug, certifications } from '@/data';
import type { Metadata } from 'next';
import { MinimalMenu } from '@/components/home/minimal-menu';
import { CleanPageHero } from '@/components/ui/clean-page-hero';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return certifications.map((cert) => ({
        slug: cert.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const certification = getCertificationBySlug(slug);

    if (!certification) {
        return { title: 'Certification Not Found' };
    }

    const title = certification.name;
    const description =
        certification.description ??
        `Study overview and competencies for the ${certification.name} Sitecore certification.`;

    return {
        title,
        description,
        alternates: {
            canonical: `/certifications/${certification.slug}`,
        },
        openGraph: {
            title,
            description,
            url: `/certifications/${certification.slug}`,
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title,
            description,
        },
    };
}

export default async function CertificationPage({ params }: PageProps) {
    const { slug } = await params;
    const certification = getCertificationBySlug(slug);

    if (!certification) {
        notFound();
    }

    const category = categories.find((existingCategory) => existingCategory.id === certification.categoryId);

    const competencies = certification.competencies
        .slice()
        .sort((firstCompetency, secondCompetency) => firstCompetency.sortOrder - secondCompetency.sortOrder);

    return (
        <>
            <MinimalMenu />

            <main id="main-content" className="min-h-screen">
                <CleanPageHero
                    eyebrow={category?.name ?? 'Certification'}
                    title={certification.name}
                    subtitle={
                        certification.description ??
                        'Exam-aligned competencies and learning topics for this certification.'
                    }
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Certifications', href: '/certifications' },
                        { label: certification.name },
                    ]}
                    stats={[
                        {
                            label: 'Competencies',
                            value: `${competencies.length}`,
                        },
                        {
                            label: 'Duration',
                            value: certification.examDuration
                                ? `${certification.examDuration} minutes`
                                : 'Not specified',
                        },
                        {
                            label: 'Questions',
                            value: certification.questionCount
                                ? `${certification.questionCount}`
                                : 'Not specified',
                        },
                    ]}
                />

                <section className="py-12 sm:py-14">
                    <div className="container mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[minmax(0,1fr)_320px]">
                        <div className="space-y-10">
                            <section aria-labelledby="competencies-heading">
                                <h2
                                    id="competencies-heading"
                                    className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl"
                                >
                                    Competencies and topic coverage
                                </h2>
                                <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                                    Each competency card highlights the primary objective and links
                                    directly to the topics you should revise.
                                </p>

                                {competencies.length === 0 ? (
                                    <p className="mt-5 rounded-xl border border-border/80 bg-secondary/20 p-5 text-base text-muted-foreground">
                                        Detailed competency mapping for this certification is being
                                        prepared.
                                    </p>
                                ) : (
                                    <ul role="list" className="mt-6 grid gap-5 md:grid-cols-2">
                                        {competencies.map((competency) => {
                                            const sortedTopics = competency.topics
                                                .slice()
                                                .sort((firstTopic, secondTopic) =>
                                                    firstTopic.sortOrder - secondTopic.sortOrder
                                                );

                                            return (
                                                <li key={competency.id}>
                                                    <article className="h-full rounded-2xl border border-border/80 bg-secondary/20 p-5">
                                                        <div className="flex items-start justify-between gap-3">
                                                            <h3 className="text-lg font-semibold leading-tight">
                                                                {competency.name}
                                                            </h3>
                                                            {competency.weightPercent ? (
                                                                <span className="rounded-full border border-primary/45 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                                                    {competency.weightPercent}%
                                                                </span>
                                                            ) : null}
                                                        </div>

                                                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                                            {competency.description ??
                                                                'Core exam objective for this competency.'}
                                                        </p>

                                                        <p className="mt-4 text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                                                            Topics
                                                        </p>

                                                        {sortedTopics.length > 0 ? (
                                                            <ul className="mt-2 space-y-2">
                                                                {sortedTopics.map((topic) => (
                                                                    <li key={topic.id}>
                                                                        <Link
                                                                            href={`/certifications/${slug}/${competency.slug}/${topic.slug}`}
                                                                            aria-label={`Open topic ${topic.name}`}
                                                                            className="group flex items-center justify-between rounded-lg border border-border/70 px-3 py-2 text-sm text-foreground/90 transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                                                        >
                                                                            <span>{topic.name}</span>
                                                                            <span
                                                                                aria-hidden="true"
                                                                                className="text-xs text-muted-foreground transition-colors group-hover:text-primary"
                                                                            >
                                                                                →
                                                                            </span>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <p className="mt-2 text-sm text-muted-foreground">
                                                                Topics for this competency will be
                                                                added soon.
                                                            </p>
                                                        )}
                                                    </article>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </section>
                        </div>

                        <aside className="lg:sticky lg:top-24 lg:self-start">
                            <div className="space-y-5">
                                <section className="rounded-2xl border border-border/80 bg-secondary/20 p-5">
                                    <h2 className="text-lg font-semibold">Exam details</h2>

                                    <dl className="mt-4 space-y-3">
                                        {certification.examDuration ? (
                                            <div>
                                                <dt className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                                                    Duration
                                                </dt>
                                                <dd className="mt-1 text-sm font-medium">
                                                    {certification.examDuration} minutes
                                                </dd>
                                            </div>
                                        ) : null}

                                        {certification.questionCount ? (
                                            <div>
                                                <dt className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                                                    Questions
                                                </dt>
                                                <dd className="mt-1 text-sm font-medium">
                                                    {certification.questionCount} questions
                                                </dd>
                                            </div>
                                        ) : null}

                                        {certification.passingScore ? (
                                            <div>
                                                <dt className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                                                    Passing score
                                                </dt>
                                                <dd className="mt-1 text-sm font-medium">
                                                    {certification.passingScore}
                                                </dd>
                                            </div>
                                        ) : null}

                                        {certification.examType ? (
                                            <div>
                                                <dt className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                                                    Exam type
                                                </dt>
                                                <dd className="mt-1 text-sm font-medium">
                                                    {certification.examType}
                                                </dd>
                                            </div>
                                        ) : null}

                                        {certification.examFormat ? (
                                            <div>
                                                <dt className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                                                    Format
                                                </dt>
                                                <dd className="mt-1 text-sm font-medium">
                                                    {certification.examFormat}
                                                </dd>
                                            </div>
                                        ) : null}

                                        <div>
                                            <dt className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                                                Support access
                                            </dt>
                                            <dd className="mt-1 text-sm font-medium">
                                                {certification.supportAccess ? 'Yes' : 'No'}
                                            </dd>
                                        </div>
                                    </dl>
                                </section>

                                {certification.documentationLinks.length > 0 ? (
                                    <section className="rounded-2xl border border-border/80 bg-secondary/20 p-5">
                                        <h2 className="text-lg font-semibold">Official resources</h2>

                                        <ul className="mt-4 space-y-2">
                                            {certification.documentationLinks.map((documentationLink) => (
                                                <li key={documentationLink.id}>
                                                    <a
                                                        href={documentationLink.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block rounded-lg border border-border/70 bg-background/50 px-3 py-2 transition-colors hover:border-primary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                                    >
                                                        <p className="text-sm font-medium leading-snug">
                                                            {documentationLink.title}
                                                        </p>
                                                        {documentationLink.description ? (
                                                            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                                                {documentationLink.description}
                                                            </p>
                                                        ) : null}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                ) : null}
                            </div>
                        </aside>
                    </div>
                </section>
            </main>
        </>
    );
}
