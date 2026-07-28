import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeader } from '@/components/SectionHeader';
import { SurfaceCard } from '@/components/SurfaceCard';
import { CredentialsCarousel } from '@/sections/Stats/components/CredentialsCarousel';
import { FacebookCredentialModal } from '@/sections/Stats/components/FacebookCredentialModal';
import { TopcoderCredentialModal } from '@/sections/Stats/components/TopcoderCredentialModal';

export const CredentialsGrid = () => {
    const { t } = useTranslation('stats');
    const [openModalId, setOpenModalId] = useState<string | null>(null);

    return (
        <>
            <SurfaceCard className="relative z-[1] w-full overflow-hidden p-6 md:p-8">
                <div className="mb-6 flex justify-center md:mb-8">
                    <SectionHeader
                        iconUrl="https://c.animaapp.com/mih2ldgveCT36V/assets/icon-4.svg"
                        label={t('section.label')}
                        title={t('section.title')}
                        align="center"
                        variant="max-w-[640px]"
                    />
                </div>

                <CredentialsCarousel
                    onOpenModal={setOpenModalId}
                    isPaused={openModalId !== null}
                />
            </SurfaceCard>

            {openModalId === 'topcoder-tco19' ? (
                <TopcoderCredentialModal onClose={() => setOpenModalId(null)} />
            ) : null}
            {openModalId === 'facebook-colombia-hack-2020' ? (
                <FacebookCredentialModal onClose={() => setOpenModalId(null)} />
            ) : null}
        </>
    );
};
