import Link from 'next/link';

export interface HeroBreadcrumb {
    label: string;
    href?: string;
}

export interface HeroStat {
    label: string;
    value: string;
}

interface CleanPageHeroProps {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    breadcrumbs: HeroBreadcrumb[];
    stats?: HeroStat[];
}

export function CleanPageHero({
    eyebrow,
    title,
    subtitle,
    breadcrumbs,
    stats = [],
}: CleanPageHeroProps) {
    return (
        <header className="relative isolate overflow-hidden border-b border-border/70 bg-[radial-gradient(circle_at_16%_8%,rgba(255,126,69,0.14),rgba(20,23,42,0.94)_35%,rgba(11,13,25,1)_72%)] py-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(255,126,69,0.08)_0%,transparent_42%),linear-gradient(0deg,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]" />

            <div className="container relative z-10 mx-auto max-w-6xl px-4">
                <nav aria-label="Breadcrumb" className="mb-5">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        {breadcrumbs.map((breadcrumb, index) => {
                            const isLastItem = index === breadcrumbs.length - 1;

                            return (
                                <li key={`${breadcrumb.label}-${index}`} className="contents">
                                    {breadcrumb.href && !isLastItem ? (
                                        <Link
                                            href={breadcrumb.href}
                                            className="rounded-sm transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                        >
                                            {breadcrumb.label}
                                        </Link>
                                    ) : (
                                        <span
                                            aria-current={isLastItem ? 'page' : undefined}
                                            className={isLastItem ? 'text-foreground' : undefined}
                                        >
                                            {breadcrumb.label}
                                        </span>
                                    )}

                                    {!isLastItem ? <span aria-hidden="true">/</span> : null}
                                </li>
                            );
                        })}
                    </ol>
                </nav>

                {eyebrow ? (
                    <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                        {eyebrow}
                    </p>
                ) : null}

                <h1 className="max-w-4xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                    {title}
                </h1>

                {subtitle ? (
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/88 sm:text-lg">
                        {subtitle}
                    </p>
                ) : null}

                {stats.length > 0 ? (
                    <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:max-w-3xl lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div
                                key={`${stat.label}-${stat.value}`}
                                className="rounded-xl border border-border/80 bg-secondary/35 px-4 py-3"
                            >
                                <dt className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                                    {stat.label}
                                </dt>
                                <dd className="mt-1 text-base font-semibold text-foreground sm:text-lg">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                ) : null}
            </div>
        </header>
    );
}
