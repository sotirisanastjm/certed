import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: {
        default: 'Certed - Sitecore Certification Study Hub',
        template: '%s | Certed',
    },
    description:
        'Your personal study companion for Sitecore certifications. Stop searching. Start learning.',
    keywords: [
        'Sitecore',
        'certification',
        'study',
        'XM Cloud',
        'Content Hub',
        'CDP',
        'Personalize',
    ],
    icons: {
        icon: [
            { url: '/assets/favicon.svg', type: 'image/svg+xml' },
            { url: '/assets/icon.svg', type: 'image/svg+xml', sizes: '120x120' },
        ],
        apple: [{ url: '/assets/icon.svg', type: 'image/svg+xml', sizes: '120x120' }],
    },
    openGraph: {
        title: 'Certed - Sitecore Certification Study Hub',
        description:
            'Your personal study companion for Sitecore certifications. Stop searching. Start learning.',
        siteName: 'Certed',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Certed - Sitecore Certification Study Hub',
        description:
            'Your personal study companion for Sitecore certifications. Stop searching. Start learning.',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
            <body className="bg-background text-foreground font-sans antialiased">
                {children}
            </body>
        </html>
    );
}
