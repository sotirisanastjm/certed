import Image from 'next/image';
import Link from 'next/link';

interface HeroBannerProps {
    ctaHref?: string;
    ctaLabel?: string;
    activeTrackCount?: number;
}

export function HeroBanner({
    ctaHref = '#certifications',
    ctaLabel = 'Browse Certifications',
    activeTrackCount,
}: HeroBannerProps) {
    return (
        <section
            aria-labelledby="hero-heading"
            className="relative isolate overflow-hidden border-b border-border/70 bg-[radial-gradient(circle_at_20%_0%,rgba(255,126,69,0.2),rgba(20,23,42,0.92)_35%,rgba(11,13,25,1)_70%)] py-20 sm:py-24"
        >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(255,126,69,0.05)_0%,transparent_40%),linear-gradient(0deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:auto,38px_38px,38px_38px]" />

            <div className="container mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div className="relative z-10 space-y-7">
                    <p className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                        Sitecore Certification Prep
                    </p>

                    <h1 id="hero-heading" className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
                        Turn Sitecore Certification Goals Into a Structured Study Win.
                    </h1>

                    <p className="max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-lg">
                        Certed gives you focused learning paths, exam-aligned resources, and
                        practical progress checkpoints so you can prepare faster and pass with
                        confidence.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            href={ctaHref}
                            aria-label="Browse available Sitecore certifications"
                            className="inline-flex items-center justify-center rounded-xl bg-gradient-accent px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_14px_34px_rgba(255,126,69,0.35)] transition-transform duration-300 ease-out hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            {ctaLabel}
                        </Link>

                        <p className="text-sm text-muted-foreground">
                            Official docs, guided learning, and quiz-ready revision in one place.
                        </p>
                    </div>
                </div>

                <div className="relative z-10 mx-auto w-full max-w-md rounded-3xl border border-border/70 bg-background/65 p-6 shadow-xl backdrop-blur-sm">
                    <Image
                        src="/assets/logo-dark.svg"
                        alt="Certed logo with a checkmark mark symbolizing Sitecore certification success"
                        width={420}
                        height={100}
                        priority
                        className="h-auto w-full"
                    />

                    <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                        <div className="rounded-xl border border-border/80 bg-secondary/45 p-3">
                            <p className="text-xs tracking-wide text-muted-foreground uppercase">
                                Active tracks
                            </p>
                            <p className="mt-1 text-lg font-bold">
                                {activeTrackCount ?? 'Multiple'} certifications
                            </p>
                        </div>
                        <div className="rounded-xl border border-border/80 bg-secondary/45 p-3">
                            <p className="text-xs tracking-wide text-muted-foreground uppercase">
                                Learning flow
                            </p>
                            <p className="mt-1 text-lg font-bold">Plan → Study → Validate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
