interface LearningStep {
    id: string;
    title: string;
    description: string;
}

const offeringPoints: string[] = [
    'Certification-specific preparation for XM Cloud, Content Cloud, CDP/Personalize, and more.',
    'Curated learning resources that prioritize exam objectives and practical implementation knowledge.',
    'A single place to move from discovery to focused practice without context switching.',
];

const learningSteps: LearningStep[] = [
    {
        id: 'step-1',
        title: 'Choose your certification track',
        description:
            'Select the Sitecore path you are targeting and instantly see the relevant objective areas.',
    },
    {
        id: 'step-2',
        title: 'Study by exam-aligned domains',
        description:
            'Work through curated materials grouped by the competencies that actually appear in the exam.',
    },
    {
        id: 'step-3',
        title: 'Validate with focused practice',
        description:
            'Review your weak spots with practical checkpoints before moving to the next domain.',
    },
    {
        id: 'step-4',
        title: 'Sit the exam with confidence',
        description:
            'Follow a clear preparation arc that keeps you accountable from first topic to final revision.',
    },
];

export function WhatItIsHowItWorks() {
    return (
        <section
            id="how-it-works"
            aria-labelledby="how-it-works-heading"
            className="relative border-b border-border/70 bg-[linear-gradient(180deg,rgba(11,13,25,1)_0%,rgba(20,23,42,0.92)_100%)] py-16 sm:py-20"
        >
            <div className="container mx-auto max-w-6xl px-4">
                <div className="mb-10 space-y-4">
                    <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                        What it is & how it works
                    </p>
                    <h2 id="how-it-works-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                        A focused Sitecore certification prep workspace.
                    </h2>
                    <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Certed is a study platform designed for Sitecore professionals who need a
                        direct, exam-ready path instead of scattered research.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <article className="rounded-3xl border border-border/80 bg-secondary/30 p-6 shadow-lg">
                        <h3 className="mb-4 text-xl font-semibold">What the platform offers</h3>
                        <ul className="space-y-3">
                            {offeringPoints.map((point) => (
                                <li key={point} className="flex items-start gap-3">
                                    <span
                                        aria-hidden="true"
                                        className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-primary"
                                    />
                                    <span className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-3xl border border-border/80 bg-background/70 p-6 shadow-lg">
                        <h3 className="mb-4 text-xl font-semibold">How learning works</h3>
                        <ol className="space-y-4">
                            {learningSteps.map((step, index) => (
                                <li key={step.id} className="flex gap-4">
                                    <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                                        {index + 1}
                                    </span>
                                    <div>
                                        <h4 className="text-sm font-semibold tracking-wide text-foreground sm:text-base">
                                            {step.title}
                                        </h4>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {step.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </article>
                </div>
            </div>
        </section>
    );
}
