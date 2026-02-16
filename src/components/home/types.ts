export type CertificationTagTone =
    | 'platform'
    | 'xmCloud'
    | 'contentCloud'
    | 'experienceCloud'
    | 'commerceCloud'
    | 'neutral';

export interface CertificationTag {
    id: string;
    label: string;
    tone: CertificationTagTone;
}

export interface CertificationSlide {
    id: string;
    slug: string;
    name: string;
    description: string;
    examDuration?: number;
    questionCount?: number;
    tags: CertificationTag[];
}
