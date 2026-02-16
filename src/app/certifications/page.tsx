import type { Metadata } from 'next';
import Link from 'next/link';
import { MinimalMenu } from '@/components/home/minimal-menu';
import { categories, getActiveCertifications } from '@/data';

const pageTitle = 'Sitecore Certifications';
const pageDescription =
    'Browse all Sitecore certifications available in Certed and jump into the track you are preparing for.';

function getCategoryBadgeClass(categoryId: string): string {
    switch (categoryId) {
        case 'cat-platform-dxp':
            return 'cat-platform-dxp-subtle';
        case 'cat-xm-cloud':
            return 'cat-xm-cloud-subtle';
        case 'cat-content-cloud':
            return 'cat-content-cloud-subtle';
        case 'cat-experience-cloud':
            return 'cat-experience-cloud-subtle';
        case 'cat-commerce-cloud':
            return 'cat-commerce-cloud-subtle';
        default:
            return 'bg-muted text-muted-foreground';
    }
}

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: '/certifications',
    },
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: '/certifications',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: pageTitle,
        description: pageDescription,
    },
};

export default function CertificationsLandingPage() {
    const orderedCategories = categories
        .slice()
        .sort((firstCategory, secondCategory) => firstCategory.sortOrder - secondCategory.sortOrder);

    const categoryById = new Map(orderedCategories.map((category) => [category.id, category]));
    const categoryOrderById = new Map(orderedCategories.map((category) => [category.id, category.sortOrder]));

    const certifications = getActiveCertifications()
        .slice()
        .sort((firstCertification, secondCertification) => {
            const categoryOrderDifference =
                (categoryOrderById.get(firstCertification.categoryId) ?? 999) -
                (categoryOrderById.get(secondCertification.categoryId) ?? 999);

            if (categoryOrderDifference !== 0) {
                return categoryOrderDifference;
            }

            return firstCertification.sortOrder - secondCertification.sortOrder;
        });

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
                                    Certifications
                                </li>
                            </ol>
                        </nav>

                        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                            Sitecore certification tracks
                        </h1>
                        <p className="mt-3 max-w-3xl text-base text-muted-foreground sm:text-lg">
                            Explore every active Sitecore certification in one place and open the
                            detailed study view for your selected track.
                        </p>
                    </div>
                </header>

                <section
                    aria-labelledby="certifications-gallery-heading"
                    className="py-14 sm:py-16"
                >
                    <div className="container mx-auto max-w-6xl px-4">
                        <h2
                            id="certifications-gallery-heading"
                            className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl"
                        >
                            Certification gallery
                        </h2>

                        <ul role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {certifications.map((certification) => {
                                const category = categoryById.get(certification.categoryId);

                                return (
                                    <li key={certification.id}>
                                        <Link
                                            href={`/certifications/${certification.slug}`}
                                            aria-label={`Open ${certification.name} certification details`}
                                            className="group flex h-full flex-col rounded-2xl border border-border/80 bg-secondary/20 p-5 shadow-md transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/60 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                        >
                                            <span
                                                className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${getCategoryBadgeClass(certification.categoryId)}`}
                                            >
                                                {category?.name ?? 'Sitecore'}
                                            </span>

                                            <h3 className="mt-4 text-lg font-semibold text-foreground">
                                                {certification.name}
                                            </h3>

                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                                {certification.description ??
                                                    'Exam-focused preparation and learning resources for this track.'}
                                            </p>

                                            <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                                                {certification.examDuration ? (
                                                    <span className="rounded-full border border-border px-2.5 py-1">
                                                        {certification.examDuration} min
                                                    </span>
                                                ) : null}
                                                {certification.questionCount ? (
                                                    <span className="rounded-full border border-border px-2.5 py-1">
                                                        {certification.questionCount} questions
                                                    </span>
                                                ) : null}
                                            </div>

                                            <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
                                                View certification →
                                            </span>
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
