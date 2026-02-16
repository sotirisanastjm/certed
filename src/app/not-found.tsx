import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(255,126,69,0.2),rgba(20,23,42,0.96)_40%,rgba(11,13,25,1)_72%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(255,126,69,0.08)_0%,transparent_45%),linear-gradient(0deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:auto,42px_42px,42px_42px]" />

            <section
                aria-labelledby="not-found-title"
                className="relative z-10 w-full max-w-2xl rounded-3xl border border-border/80 bg-secondary/25 p-8 text-center shadow-xl backdrop-blur-sm sm:p-12"
            >
                <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">Error 404</p>
                <h1 id="not-found-title" className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                    This page got lost in the content tree.
                </h1>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    The page you are looking for does not exist or moved. Let’s get you back to a
                    place that actually helps you get certified.
                </p>

                <Link
                    href="/"
                    aria-label="Go back to the homepage"
                    className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-accent px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_14px_34px_rgba(255,126,69,0.35)] transition-transform duration-300 ease-out hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                    Back to home
                </Link>
            </section>
        </main>
    );
}
