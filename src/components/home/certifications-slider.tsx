'use client';

import Link from 'next/link';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import type { CertificationSlide, CertificationTagTone } from './types';

interface CertificationsSliderProps {
    items: CertificationSlide[];
}

const tagToneClasses: Record<CertificationTagTone, string> = {
    platform: 'cat-platform-dxp-subtle',
    xmCloud: 'cat-xm-cloud-subtle',
    contentCloud: 'cat-content-cloud-subtle',
    experienceCloud: 'cat-experience-cloud-subtle',
    commerceCloud: 'cat-commerce-cloud-subtle',
    neutral: 'bg-muted text-muted-foreground',
};

function clampIndex(index: number, max: number): number {
    return Math.min(Math.max(index, 0), max);
}

function usePrefersReducedMotion(): boolean {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

        updatePreference();
        mediaQuery.addEventListener('change', updatePreference);

        return () => mediaQuery.removeEventListener('change', updatePreference);
    }, []);

    return prefersReducedMotion;
}

export function CertificationsSlider({ items }: CertificationsSliderProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const listRef = useRef<HTMLUListElement>(null);
    const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
    const statusId = useId();
    const prefersReducedMotion = usePrefersReducedMotion();

    const scrollToIndex = useCallback(
        (targetIndex: number, shouldFocus = false) => {
            if (items.length === 0) {
                return;
            }

            const index = clampIndex(targetIndex, items.length - 1);
            const targetCard = itemRefs.current[index];

            setActiveIndex(index);

            if (!targetCard) {
                return;
            }

            targetCard.scrollIntoView({
                inline: 'center',
                block: 'nearest',
                behavior: prefersReducedMotion ? 'auto' : 'smooth',
            });

            if (shouldFocus) {
                const interactiveElement = targetCard.querySelector<HTMLElement>(
                    'a, button, [tabindex]:not([tabindex="-1"])'
                );
                interactiveElement?.focus({ preventScroll: true });
            }
        },
        [items.length, prefersReducedMotion]
    );

    const updateActiveIndexFromScroll = useCallback(() => {
        const list = listRef.current;
        if (!list || items.length === 0) {
            return;
        }

        const viewportCenter = list.scrollLeft + list.clientWidth / 2;
        let nearestIndex = 0;
        let smallestDistance = Number.POSITIVE_INFINITY;

        itemRefs.current.forEach((item, index) => {
            if (!item) {
                return;
            }

            const itemCenter = item.offsetLeft + item.clientWidth / 2;
            const distance = Math.abs(viewportCenter - itemCenter);

            if (distance < smallestDistance) {
                smallestDistance = distance;
                nearestIndex = index;
            }
        });

        setActiveIndex((previousIndex) =>
            previousIndex === nearestIndex ? previousIndex : nearestIndex
        );
    }, [items.length]);

    useEffect(() => {
        const list = listRef.current;

        if (!list || items.length === 0) {
            return;
        }

        let animationFrame = 0;

        const handleScroll = () => {
            cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(updateActiveIndexFromScroll);
        };

        list.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            cancelAnimationFrame(animationFrame);
            list.removeEventListener('scroll', handleScroll);
        };
    }, [items.length, updateActiveIndexFromScroll]);

    useEffect(() => {
        itemRefs.current = itemRefs.current.slice(0, items.length);
    }, [items.length]);

    const handleCarouselKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLElement>) => {
            if (items.length === 0 || event.altKey || event.ctrlKey || event.metaKey) {
                return;
            }

            if (event.key === 'ArrowRight') {
                event.preventDefault();
                scrollToIndex(activeIndex + 1, true);
                return;
            }

            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                scrollToIndex(activeIndex - 1, true);
                return;
            }

            if (event.key === 'Home') {
                event.preventDefault();
                scrollToIndex(0, true);
                return;
            }

            if (event.key === 'End') {
                event.preventDefault();
                scrollToIndex(items.length - 1, true);
            }
        },
        [activeIndex, items.length, scrollToIndex]
    );

    return (
        <section
            id="certifications"
            aria-labelledby="certifications-heading"
            className="border-b border-border/70 bg-[linear-gradient(180deg,rgba(20,23,42,0.95)_0%,rgba(11,13,25,1)_100%)] py-16 sm:py-20"
        >
            <div className="container mx-auto max-w-6xl px-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                            Certifications slider
                        </p>
                        <h2
                            id="certifications-heading"
                            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
                        >
                            Explore Sitecore certification tracks
                        </h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => scrollToIndex(activeIndex - 1, true)}
                            disabled={items.length === 0 || activeIndex === 0}
                            aria-label="Go to previous certification"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:bg-secondary/80 disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            <span aria-hidden="true">←</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollToIndex(activeIndex + 1, true)}
                            disabled={items.length === 0 || activeIndex === items.length - 1}
                            aria-label="Go to next certification"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:bg-secondary/80 disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </div>

                <p className="mt-4 max-w-3xl text-sm text-muted-foreground sm:text-base">
                    Use the arrow keys while focused on the carousel to move between
                    certifications.
                </p>

                <p id={statusId} aria-live="polite" className="sr-only">
                    {items.length > 0
                        ? `Showing ${items[activeIndex]?.name ?? ''}, ${activeIndex + 1} of ${items.length}`
                        : 'No certifications available'}
                </p>

                <div
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Sitecore certifications"
                    aria-describedby={statusId}
                    tabIndex={0}
                    onKeyDownCapture={handleCarouselKeyDown}
                    className="mt-8 rounded-3xl border border-border/80 bg-background/65 p-4 shadow-xl backdrop-blur-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:p-6"
                >
                    <ul
                        ref={listRef}
                        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {items.map((item, index) => (
                            <li
                                key={item.id}
                                ref={(element) => {
                                    itemRefs.current[index] = element;
                                }}
                                role="group"
                                aria-roledescription="slide"
                                className="min-w-[86%] snap-center sm:min-w-[60%] lg:min-w-[38%]"
                                aria-label={`${item.name}, ${index + 1} of ${items.length}`}
                            >
                                <article className="h-full rounded-2xl border border-border/80 bg-secondary/35 p-5">
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag.id}
                                                className={cn(
                                                    'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide',
                                                    tagToneClasses[tag.tone]
                                                )}
                                            >
                                                {tag.label}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-bold leading-tight">{item.name}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                        {item.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground">
                                        {item.examDuration ? (
                                            <span className="rounded-full border border-border px-2.5 py-1">
                                                {item.examDuration} min
                                            </span>
                                        ) : null}
                                        {item.questionCount ? (
                                            <span className="rounded-full border border-border px-2.5 py-1">
                                                {item.questionCount} questions
                                            </span>
                                        ) : null}
                                    </div>

                                    <Link
                                        href={`/certifications/${item.slug}`}
                                        aria-label={`Open ${item.name} certification details`}
                                        className="mt-6 inline-flex items-center rounded-lg border border-primary/60 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        View certification details
                                    </Link>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                    {items.map((item, index) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => scrollToIndex(index, true)}
                            className={cn(
                                'h-2.5 rounded-full transition-all motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                                index === activeIndex ? 'w-8 bg-primary' : 'w-2.5 bg-secondary/70'
                            )}
                            aria-label={`Go to slide ${index + 1}: ${item.name}`}
                            aria-current={index === activeIndex ? 'true' : undefined}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
