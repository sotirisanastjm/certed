'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useId, useState } from 'react';
import { cn } from '@/lib/utils';

const navigationLinks = [
    {
        id: 'categories',
        label: 'Categories',
        href: '/categories',
        ariaLabel: 'Browse Sitecore certification categories',
    },
    {
        id: 'certifications',
        label: 'Certifications',
        href: '/certifications',
        ariaLabel: 'Browse all Sitecore certifications',
    },
    {
        id: 'quizzes',
        label: 'Quizzes',
        href: '/quizzes',
        ariaLabel: 'Practice certification quizzes',
    },
] as const;

function isNavigationItemActive(pathname: string, href: string): boolean {
    return pathname === href || pathname.startsWith(`${href}/`);
}

function Logo({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 80"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="nav-accent" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FF7E45" />
                    <stop offset="100%" stopColor="#FF5A1A" />
                </linearGradient>
                <linearGradient id="nav-mark-bg" x1="4" y1="4" x2="56" y2="64" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1E2140" />
                    <stop offset="100%" stopColor="#141628" />
                </linearGradient>
            </defs>

            {/* Mark */}
            <g transform="translate(4, 6)">
                <rect x="2" y="2" width="64" height="64" rx="15" fill="url(#nav-mark-bg)" />
                <rect x="4.5" y="4.5" width="59" height="59" rx="13" fill="none" stroke="#2A2D48" strokeWidth="0.8" />
                <line x1="12" y1="57" x2="57" y2="12" stroke="#FF7E45" strokeWidth="0.5" opacity="0.15" />
                <path d="M19 35L29 45L49 22" fill="none" stroke="url(#nav-accent)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="52" cy="52" r="3" fill="#FF7E45" opacity="0.45" />
            </g>

            {/* Wordmark */}
            <text
                x="80"
                y="53"
                fontFamily="'Outfit', 'Sora', 'Satoshi', sans-serif"
                fontSize="46"
                fontWeight="800"
                letterSpacing="-2"
                fill="#F0EDE8"
            >
                Certed
            </text>

            {/* Period accent */}
            <circle cx="275" cy="51" r="4" fill="url(#nav-accent)" />
        </svg>
    );
}

export function MinimalMenu() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mobilePanelId = useId();
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="flex h-16 items-center justify-between">
                    <Link
                        href="/"
                        aria-label="Certed — Go to homepage"
                        className="group -ml-1 flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                        <Logo className="h-8 w-auto transition-opacity group-hover:opacity-80" />
                    </Link>

                    <nav
                        aria-label="Primary"
                        className="hidden items-center gap-8 md:flex"
                    >
                        {navigationLinks.map((navigationLink) => {
                            const isActive = isNavigationItemActive(pathname, navigationLink.href);

                            return (
                                <Link
                                    key={navigationLink.id}
                                    href={navigationLink.href}
                                    aria-label={navigationLink.ariaLabel}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={cn(
                                        'relative py-1 text-[13px] font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary',
                                        isActive
                                            ? 'text-primary'
                                            : 'text-foreground-subtle hover:text-foreground'
                                    )}
                                >
                                    {navigationLink.label}
                                    {isActive && (
                                        <span className="absolute -bottom-[1.19rem] left-0 right-0 h-px bg-primary" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((currentValue) => !currentValue)}
                        aria-expanded={mobileMenuOpen}
                        aria-controls={mobilePanelId}
                        aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        className="relative flex h-8 w-8 items-center justify-center rounded-md text-foreground-subtle transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
                    >
                        <span className="sr-only">{mobileMenuOpen ? 'Close' : 'Menu'}</span>
                        <span
                            className={cn(
                                'absolute h-px w-4 bg-current transition-all duration-200',
                                mobileMenuOpen ? 'rotate-45' : '-translate-y-1'
                            )}
                        />
                        <span
                            className={cn(
                                'absolute h-px w-4 bg-current transition-all duration-200',
                                mobileMenuOpen ? '-rotate-45' : 'translate-y-1'
                            )}
                        />
                    </button>
                </div>

                <div
                    id={mobilePanelId}
                    className={cn(
                        'overflow-hidden transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none md:hidden',
                        mobileMenuOpen
                            ? 'max-h-40 opacity-100'
                            : 'max-h-0 opacity-0'
                    )}
                >
                    <nav
                        aria-label="Primary mobile"
                        className="flex flex-col gap-1 border-t border-border/50 py-3"
                    >
                        {navigationLinks.map((navigationLink) => {
                            const isActive = isNavigationItemActive(pathname, navigationLink.href);

                            return (
                                <Link
                                    key={navigationLink.id}
                                    href={navigationLink.href}
                                    aria-label={navigationLink.ariaLabel}
                                    aria-current={isActive ? 'page' : undefined}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={cn(
                                        'rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                                        isActive
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-foreground-subtle hover:bg-secondary/40 hover:text-foreground'
                                    )}
                                >
                                    {navigationLink.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </header>
    );
}
