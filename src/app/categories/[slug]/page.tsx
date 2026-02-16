import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategoryBySlug, getCertificationsByCategory, categories } from '@/data';
import type { Metadata } from 'next';
import { MinimalMenu } from '@/components/home/minimal-menu';
import { CleanPageHero } from '@/components/ui/clean-page-hero';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return categories.map((category) => ({
        slug: category.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);

    if (!category) {
        return { title: 'Category Not Found' };
    }

    const title = `${category.name} Certifications`;
    const description =
        category.description ??
        `Explore the ${category.name} certification paths and choose your Sitecore study track.`;

    return {
        title,
        description,
        alternates: {
            canonical: `/categories/${category.slug}`,
        },
        openGraph: {
            title,
            description,
            url: `/categories/${category.slug}`,
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title,
            description,
        },
    };
}

export default async function CategoryPage({ params }: PageProps) {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);

    if (!category) {
        notFound();
    }

    const certifications = getCertificationsByCategory(category.id)
        .filter((certification) => certification.isActive)
        .sort((firstCertification, secondCertification) =>
            firstCertification.sortOrder - secondCertification.sortOrder
        );

    return (
        <>
            <MinimalMenu />

            <main id="main-content" className="min-h-screen">
                <CleanPageHero
                    eyebrow="Category"
                    title={`${category.icon ? `${category.icon} ` : ''}${category.name}`}
                    subtitle={
                        category.description ??
                        'Explore every certification track in this Sitecore category.'
                    }
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Categories', href: '/categories' },
                        { label: category.name },
                    ]}
                    stats={[
                        {
                            label: 'Active certifications',
                            value: `${certifications.length}`,
                        },
                    ]}
                />

                <section aria-labelledby="category-certifications-heading" className="py-12 sm:py-14">
                    <div className="container mx-auto max-w-6xl px-4">
                        <h2
                            id="category-certifications-heading"
                            className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl"
                        >
                            Certifications in this category
                        </h2>

                        {certifications.length === 0 ? (
                            <p className="rounded-xl border border-border/80 bg-secondary/20 p-5 text-base text-muted-foreground">
                                No certifications are published for this category yet.
                            </p>
                        ) : (
                            <ul role="list" className="grid gap-5 md:grid-cols-2">
                                {certifications.map((certification) => (
                                    <li key={certification.id}>
                                        <article className="group h-full rounded-2xl border border-border/80 bg-secondary/20 p-5 transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/60 motion-reduce:transform-none motion-reduce:transition-none">
                                            <h3 className="text-xl font-semibold tracking-tight">
                                                {certification.name}
                                            </h3>

                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                                {certification.description ??
                                                    'Certification preparation details will appear here.'}
                                            </p>

                                            <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                                                {certification.examDuration ? (
                                                    <span className="rounded-full border border-border px-3 py-1">
                                                        {certification.examDuration} min
                                                    </span>
                                                ) : null}
                                                {certification.questionCount ? (
                                                    <span className="rounded-full border border-border px-3 py-1">
                                                        {certification.questionCount} questions
                                                    </span>
                                                ) : null}
                                                {certification.passingScore ? (
                                                    <span className="rounded-full border border-border px-3 py-1">
                                                        Pass {certification.passingScore}
                                                    </span>
                                                ) : null}
                                            </div>

                                            <Link
                                                href={`/certifications/${certification.slug}`}
                                                aria-label={`Open ${certification.name} certification page`}
                                                className="mt-5 inline-flex items-center rounded-lg border border-primary/60 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                            >
                                                View certification details
                                            </Link>
                                        </article>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
}
