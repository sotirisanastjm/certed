import type { Metadata } from 'next';
import Link from 'next/link';
import { MinimalMenu } from '@/components/home/minimal-menu';
import { categories, getActiveCertifications } from '@/data';

const pageTitle = 'Sitecore Certification Categories';
const pageDescription =
    'Browse every Sitecore certification category and pick the domain that matches your learning path.';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: '/categories',
    },
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: '/categories',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: pageTitle,
        description: pageDescription,
    },
};

export default function CategoriesLandingPage() {
    const orderedCategories = categories
        .slice()
        .sort((firstCategory, secondCategory) => firstCategory.sortOrder - secondCategory.sortOrder);

    const certificationCountByCategory = getActiveCertifications().reduce(
        (countMap, certification) => {
            const currentCount = countMap.get(certification.categoryId) ?? 0;
            countMap.set(certification.categoryId, currentCount + 1);
            return countMap;
        },
        new Map<string, number>()
    );

    return (
        <>
            <MinimalMenu />

            <main id="main-content" className="min-h-screen">
                <header className="border-b border-border/70 bg-[radial-gradient(circle_at_16%_8%,rgba(255,126,69,0.14),rgba(20,23,42,0.92)_35%,rgba(11,13,25,1)_72%)] py-14 sm:py-16">
                    <div className="container mx-auto max-w-6xl px-4">
                        <nav aria-label="Breadcrumb" className="mb-5">
                            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                                <li>
                                    <Link
                                        href="/"
                                        className="rounded-md transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li aria-hidden="true">/</li>
                                <li aria-current="page" className="text-foreground">
                                    Categories
                                </li>
                            </ol>
                        </nav>

                        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                            Sitecore certification categories
                        </h1>
                        <p className="mt-3 max-w-3xl text-base text-muted-foreground sm:text-lg">
                            Choose a category to explore the certification tracks that match your
                            Sitecore role and learning goals.
                        </p>
                    </div>
                </header>

                <section aria-labelledby="categories-gallery-heading" className="py-14 sm:py-16">
                    <div className="container mx-auto max-w-6xl px-4">
                        <h2
                            id="categories-gallery-heading"
                            className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl"
                        >
                            Category gallery
                        </h2>

                        <ul role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {orderedCategories.map((category) => {
                                const certificationCount =
                                    certificationCountByCategory.get(category.id) ?? 0;

                                return (
                                    <li key={category.id}>
                                        <Link
                                            href={`/categories/${category.slug}`}
                                            aria-label={`Open ${category.name} category with ${certificationCount} certifications`}
                                            className="group flex h-full flex-col rounded-2xl border border-border/80 bg-secondary/20 p-5 shadow-md transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/60 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/12 text-xl"
                                            >
                                                {category.icon ?? '📘'}
                                            </span>

                                            <h3 className="text-lg font-semibold text-foreground">
                                                {category.name}
                                            </h3>

                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                                {category.description ??
                                                    'Focused preparation tracks in this category.'}
                                            </p>

                                            <p className="mt-4 text-xs font-semibold tracking-wide text-primary uppercase">
                                                {certificationCount} certification
                                                {certificationCount === 1 ? '' : 's'}
                                            </p>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </section>
            </main>
        </>
    );
}
