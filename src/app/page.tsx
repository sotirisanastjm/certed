import { categories, getActiveCertifications } from '@/data';
import { CertificationsSlider } from '@/components/home/certifications-slider';
import { HeroBanner } from '@/components/home/hero-banner';
import { MinimalMenu } from '@/components/home/minimal-menu';
import type { CertificationSlide, CertificationTagTone } from '@/components/home/types';
import { WhatItIsHowItWorks } from '@/components/home/what-it-is-how-it-works';

function getCategoryTagTone(categoryId: string): CertificationTagTone {
    switch (categoryId) {
        case 'cat-platform-dxp':
            return 'platform';
        case 'cat-xm-cloud':
            return 'xmCloud';
        case 'cat-content-cloud':
            return 'contentCloud';
        case 'cat-experience-cloud':
            return 'experienceCloud';
        case 'cat-commerce-cloud':
            return 'commerceCloud';
        default:
            return 'neutral';
    }
}

export default function HomePage() {
    const orderedCategories = categories.slice().sort((first, second) => first.sortOrder - second.sortOrder);
    const categoryById = new Map(orderedCategories.map((category) => [category.id, category]));
    const categorySortOrderById = new Map(
        orderedCategories.map((category) => [category.id, category.sortOrder])
    );

    const certifications = getActiveCertifications()
        .slice()
        .sort((first, second) => {
            const categoryOrderDifference =
                (categorySortOrderById.get(first.categoryId) ?? 999) -
                (categorySortOrderById.get(second.categoryId) ?? 999);

            if (categoryOrderDifference !== 0) {
                return categoryOrderDifference;
            }

            return first.sortOrder - second.sortOrder;
        });

    const certificationSlides: CertificationSlide[] = certifications.map((certification) => {
        const category = categoryById.get(certification.categoryId);

        return {
            id: certification.id,
            slug: certification.slug,
            name: certification.name,
            description:
                certification.description ??
                'Exam-focused preparation materials for this Sitecore certification track.',
            examDuration: certification.examDuration,
            questionCount: certification.questionCount,
            tags: [
                {
                    id: `${certification.id}-category`,
                    label: category?.name ?? 'Sitecore Certification',
                    tone: getCategoryTagTone(certification.categoryId),
                },
            ],
        };
    });

    return (
        <>
            <MinimalMenu />

            <main id="main-content" className="min-h-screen">
                <HeroBanner
                    ctaHref="#certifications"
                    ctaLabel="Start Learning"
                    activeTrackCount={certificationSlides.length}
                />
                <WhatItIsHowItWorks />
                <CertificationsSlider items={certificationSlides} />

                <footer className="border-t border-border/70 py-10">
                    <div className="container mx-auto max-w-6xl px-4 text-center">
                        <p className="text-sm text-muted-foreground sm:text-base">
                            Built with love for the Sitecore community.
                        </p>
                    </div>
                </footer>
            </main>
        </>
    );
}
