export type Credential = {
    id: string;
    imageSrc: string;
    href: string;
    titleKey: string;
    subtitleKey: string;
    detailKey?: string;
    ctaKey?: string;
    /** Opens an in-page story modal instead of navigating away. */
    modalId?: 'topcoder-tco19' | 'facebook-colombia-hack-2020';
    coverImageSrc?: string;
};

/** Verified credentials, certifications, and awards. Add new entries here. */
export const CREDENTIALS: Credential[] = [
    {
        id: 'azure-fundamentals',
        imageSrc: '/assets/badges/azure-fundamentals.png',
        href: 'https://www.credly.com/badges/87d4a73a-5565-4195-842e-02c6ebc9987d',
        titleKey: 'credentials.azureFundamentals.title',
        subtitleKey: 'credentials.azureFundamentals.subtitle',
        detailKey: 'credentials.azureFundamentals.detail',
    },
    {
        id: 'icpc',
        imageSrc: '/assets/badges/icpc.png',
        href: 'https://icpc.global/ICPCID/J9BF6SPO1ZIM',
        titleKey: 'credentials.icpc.title',
        subtitleKey: 'credentials.icpc.subtitle',
        detailKey: 'credentials.icpc.detail',
        ctaKey: 'credentials.icpc.viewProfile',
    },
    {
        id: 'topcoder-tco19',
        imageSrc: '/assets/badges/topcoder.png',
        href: 'https://profiles.topcoder.com/Mackenziefox',
        titleKey: 'credentials.topcoderTco19.title',
        subtitleKey: 'credentials.topcoderTco19.subtitle',
        detailKey: 'credentials.topcoderTco19.detail',
        ctaKey: 'credentials.topcoderTco19.openStory',
        modalId: 'topcoder-tco19',
        coverImageSrc: '/assets/credentials/tco19-topcoder-cover.png',
    },
    {
        id: 'facebook-hacker-cup-2020',
        imageSrc: '/assets/badges/facebook-hacker-cup-2020.png',
        href: 'https://ingsistemas.cloud.ufps.edu.co/evento-facebook-colombia-hack-2020/',
        titleKey: 'credentials.facebookHackerCup2020.title',
        subtitleKey: 'credentials.facebookHackerCup2020.subtitle',
        detailKey: 'credentials.facebookHackerCup2020.detail',
        ctaKey: 'credentials.facebookHackerCup2020.openStory',
        modalId: 'facebook-colombia-hack-2020',
        coverImageSrc: '/assets/credentials/facebook-colombia-hack-2020-team.png',
    },
];
