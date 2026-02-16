import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCertificationBySlug, certifications, getTopicLearningContent } from '@/data';
import type { Metadata } from 'next';
import type { LearningResource, Topic } from '@/types';
import { MinimalMenu } from '@/components/home/minimal-menu';
import { CleanPageHero } from '@/components/ui/clean-page-hero';

interface PageProps {
    params: Promise<{
        slug: string;
        competencySlug: string;
        topicSlug: string;
    }>;
}

export async function generateStaticParams() {
    const params: { slug: string; competencySlug: string; topicSlug: string }[] = [];

    for (const cert of certifications) {
        for (const competency of cert.competencies) {
            for (const topic of competency.topics) {
                params.push({
                    slug: cert.slug,
                    competencySlug: competency.slug,
                    topicSlug: topic.slug,
                });
            }
        }
    }

    return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug, competencySlug, topicSlug } = await params;
    const certification = getCertificationBySlug(slug);

    if (!certification) {
        return { title: 'Topic Not Found' };
    }

    const competency = certification.competencies.find((c) => c.slug === competencySlug);
    const topic = competency?.topics.find((t) => t.slug === topicSlug);

    if (!topic) {
        return { title: 'Topic Not Found' };
    }

    const title = `${topic.name} | ${certification.name}`;
    const description =
        topic.description ??
        `Study reading material, key concepts, and official resources for ${topic.name}.`;
    const canonicalPath = `/certifications/${slug}/${competencySlug}/${topicSlug}`;

    return {
        title,
        description,
        alternates: {
            canonical: canonicalPath,
        },
        openGraph: {
            title,
            description,
            url: canonicalPath,
            type: 'article',
        },
        twitter: {
            card: 'summary',
            title,
            description,
        },
    };
}

interface TopicPagerProps {
    slug: string;
    competencySlug: string;
    prevTopic: Topic | null;
    nextTopic: Topic | null;
}

function TopicPager({ slug, competencySlug, prevTopic, nextTopic }: TopicPagerProps) {
    return (
        <nav
            aria-label="Topic navigation"
            className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border/80 pt-6"
        >
            {prevTopic ? (
                <Link
                    href={`/certifications/${slug}/${competencySlug}/${prevTopic.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-secondary/20 px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                    ← {prevTopic.name}
                </Link>
            ) : (
                <span className="text-sm text-muted-foreground">First topic in this competency</span>
            )}

            {nextTopic ? (
                <Link
                    href={`/certifications/${slug}/${competencySlug}/${nextTopic.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-secondary/20 px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                    {nextTopic.name} →
                </Link>
            ) : (
                <span className="text-sm text-muted-foreground">Last topic in this competency</span>
            )}
        </nav>
    );
}

interface OfficialResourcesPanelProps {
    resources: LearningResource[];
}

function OfficialResourcesPanel({ resources }: OfficialResourcesPanelProps) {
    return (
        <section className="rounded-2xl border border-border/80 bg-secondary/20 p-5">
            <h2 className="text-lg font-semibold">Official resources</h2>

            {resources.length > 0 ? (
                <ul className="mt-4 space-y-2">
                    {resources.map((resource) => (
                        <li key={resource.id}>
                            <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-lg border border-border/70 bg-background/55 px-3 py-2 transition-colors hover:border-primary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <span className="text-sm font-medium leading-snug">
                                        {resource.title}
                                    </span>
                                    {resource.isOfficial ? (
                                        <span className="rounded-full bg-primary/12 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-primary uppercase">
                                            Official
                                        </span>
                                    ) : null}
                                </div>

                                {resource.description ? (
                                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                        {resource.description}
                                    </p>
                                ) : null}
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="mt-3 text-sm text-muted-foreground">
                    Official resources for this topic will be added soon.
                </p>
            )}
        </section>
    );
}

interface RelatedTopicsPanelProps {
    slug: string;
    competencySlug: string;
    activeTopicSlug: string;
    topics: Topic[];
}

function RelatedTopicsPanel({
    slug,
    competencySlug,
    activeTopicSlug,
    topics,
}: RelatedTopicsPanelProps) {
    return (
        <section className="rounded-2xl border border-border/80 bg-secondary/20 p-5">
            <h2 className="text-lg font-semibold">Related topics</h2>

            <ul className="mt-4 space-y-2">
                {topics.map((topic) => {
                    const isActiveTopic = topic.slug === activeTopicSlug;

                    return (
                        <li key={topic.id}>
                            <Link
                                href={`/certifications/${slug}/${competencySlug}/${topic.slug}`}
                                aria-current={isActiveTopic ? 'page' : undefined}
                                className={`block rounded-lg border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                                    isActiveTopic
                                        ? 'border-primary/70 bg-primary/10 text-primary'
                                        : 'border-border/70 bg-background/55 text-foreground/90 hover:border-primary/50 hover:text-primary'
                                }`}
                            >
                                {topic.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default async function TopicPage({ params }: PageProps) {
    const { slug, competencySlug, topicSlug } = await params;
    const certification = getCertificationBySlug(slug);

    if (!certification) {
        notFound();
    }

    const competency = certification.competencies.find((c) => c.slug === competencySlug);
    if (!competency) {
        notFound();
    }

    const topic = competency.topics.find((t) => t.slug === topicSlug);
    if (!topic) {
        notFound();
    }

    const learningContent = getTopicLearningContent(slug, competencySlug, topicSlug);

    const topicIndex = competency.topics.findIndex((t) => t.slug === topicSlug);
    const prevTopic = topicIndex > 0 ? competency.topics[topicIndex - 1] : null;
    const nextTopic =
        topicIndex < competency.topics.length - 1 ? competency.topics[topicIndex + 1] : null;
    const sortedTopics = competency.topics
        .slice()
        .sort((firstTopic, secondTopic) => firstTopic.sortOrder - secondTopic.sortOrder);

    return (
        <>
            <MinimalMenu />

            <main id="main-content" className="min-h-screen">
                <CleanPageHero
                    eyebrow="Learning Topic"
                    title={topic.name}
                    subtitle={
                        topic.description ??
                        `Deep-dive reading material for ${topic.name} in ${certification.name}.`
                    }
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Certifications', href: '/certifications' },
                        { label: certification.shortName || certification.name, href: `/certifications/${certification.slug}` },
                        { label: competency.name },
                        { label: topic.name },
                    ]}
                    stats={[
                        {
                            label: 'Competency weight',
                            value: competency.weightPercent ? `${competency.weightPercent}%` : 'N/A',
                        },
                        {
                            label: 'Topic position',
                            value: `${topicIndex + 1} of ${competency.topics.length}`,
                        },
                        {
                            label: 'Official resources',
                            value: `${learningContent?.resources.length ?? 0}`,
                        },
                    ]}
                />

                <section className="py-12 sm:py-14">
                    <div className="container mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[minmax(0,1fr)_320px]">
                        <article className="space-y-7">
                            {learningContent ? (
                                <>
                                    <section className="rounded-2xl border border-border/80 bg-secondary/16 p-6 sm:p-7">
                                        <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
                                        <p className="mt-3 text-base leading-8 text-foreground/90 sm:text-lg">
                                            {learningContent.overview}
                                        </p>
                                    </section>

                                    <section className="rounded-2xl border border-border/80 bg-secondary/16 p-6 sm:p-7">
                                        <h2 className="text-2xl font-bold tracking-tight">
                                            {learningContent.keyConceptsTitle}
                                        </h2>

                                        <ul className="mt-4 space-y-3">
                                            {learningContent.keyConcepts.map((concept, conceptIndex) => (
                                                <li
                                                    key={`${concept}-${conceptIndex}`}
                                                    className="flex items-start gap-3 text-base leading-8 text-foreground/90 sm:text-lg"
                                                >
                                                    <span
                                                        aria-hidden="true"
                                                        className="mt-3 h-2.5 w-2.5 flex-none rounded-full bg-primary"
                                                    />
                                                    <span>{concept}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

                                    {learningContent.sections.map((learningSection) => (
                                        <section
                                            key={learningSection.id}
                                            className="rounded-2xl border border-border/80 bg-secondary/16 p-6 sm:p-7"
                                        >
                                            <h2 className="text-2xl font-bold tracking-tight">
                                                {learningSection.title}
                                            </h2>
                                            <p className="mt-3 text-base leading-8 text-foreground/90 sm:text-lg">
                                                {learningSection.content}
                                            </p>
                                        </section>
                                    ))}

                                    {learningContent.examTips.length > 0 ? (
                                        <section className="rounded-2xl border border-primary/30 bg-primary/10 p-6 sm:p-7">
                                            <h2 className="text-2xl font-bold tracking-tight text-primary">
                                                Exam tips
                                            </h2>

                                            <ul className="mt-4 space-y-3">
                                                {learningContent.examTips.map((tip, tipIndex) => (
                                                    <li
                                                        key={`${tip}-${tipIndex}`}
                                                        className="flex items-start gap-3 text-base leading-8 text-foreground/88 sm:text-lg"
                                                    >
                                                        <span aria-hidden="true" className="mt-2">💡</span>
                                                        <span>{tip}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>
                                    ) : null}
                                </>
                            ) : (
                                <section className="rounded-2xl border border-border/80 bg-secondary/16 p-6 sm:p-7">
                                    <h2 className="text-2xl font-bold tracking-tight">Reading material</h2>
                                    <p className="mt-3 text-base leading-8 text-foreground/88 sm:text-lg">
                                        {topic.description
                                            ? topic.description
                                            : 'Detailed learning material for this topic is in progress. Please use the official resources while this page is being expanded.'}
                                    </p>
                                </section>
                            )}

                            <TopicPager
                                slug={slug}
                                competencySlug={competencySlug}
                                prevTopic={prevTopic}
                                nextTopic={nextTopic}
                            />
                        </article>

                        <aside className="lg:sticky lg:top-24 lg:self-start">
                            <div className="space-y-5">
                                <OfficialResourcesPanel resources={learningContent?.resources ?? []} />

                                <RelatedTopicsPanel
                                    slug={slug}
                                    competencySlug={competencySlug}
                                    activeTopicSlug={topicSlug}
                                    topics={sortedTopics}
                                />
                            </div>
                        </aside>
                    </div>
                </section>
            </main>
        </>
    );
}
