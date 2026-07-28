import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GradientButton } from '@/components/GradientButton';
import { SurfaceCard } from '@/components/SurfaceCard';
import { versionedSrc } from '@/config/publicAssets';
import { useScrollLock } from '@/hooks/useScrollLock';

type FacebookCredentialModalProps = {
    onClose: () => void;
};

export const FacebookCredentialModal = ({ onClose }: FacebookCredentialModalProps) => {
    const { t } = useTranslation('stats');

    useScrollLock(true);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const modal = (
        <div className="fixed inset-0 z-[9998]">
            <button
                type="button"
                className="absolute inset-0 bg-stone-900/65 backdrop-blur-md"
                aria-label={t('credentials.facebookHackerCup2020.modal.close')}
                onClick={onClose}
            />

            <div
                className="relative z-10 flex h-full w-full justify-center overflow-y-auto overscroll-contain px-3 py-4 sm:px-5 sm:py-6"
                onWheel={(event) => event.stopPropagation()}
            >
                <div
                    className="relative my-auto w-full max-w-2xl"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="facebook-modal-title"
                    onClick={(event) => event.stopPropagation()}
                >
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute right-2 top-2 z-30 flex h-9 w-9 items-center justify-center rounded-full border-2 border-stone-900 bg-white text-stone-900 shadow-sm transition-colors hover:bg-stone-100 sm:right-3 sm:top-3 sm:h-10 sm:w-10"
                        aria-label={t('credentials.facebookHackerCup2020.modal.close')}
                    >
                        <X className="h-5 w-5" strokeWidth={2.25} />
                    </button>

                    <SurfaceCard className="overflow-hidden">
                        <div className="overflow-hidden border-b-2 border-stone-900 bg-stone-100">
                            <img
                                src={versionedSrc(
                                    '/assets/credentials/facebook-colombia-hack-2020-team.png',
                                )}
                                alt=""
                                className="h-[180px] w-full object-cover object-[center_42%] md:h-[240px] md:object-[center_40%]"
                            />
                        </div>

                        <div className="space-y-4 p-4 md:space-y-5 md:p-6">
                            <div className="flex items-start gap-3 md:gap-4">
                                <img
                                    src={versionedSrc('/assets/badges/facebook-hacker-cup-2020.png')}
                                    alt=""
                                    className="mt-0.5 h-8 w-auto shrink-0 object-contain md:h-11"
                                />
                                <div className="min-w-0 space-y-0.5 pr-8 md:pr-10">
                                    <h2
                                        id="facebook-modal-title"
                                        className="font-cabinet_grotesk text-base font-bold leading-snug text-stone-900 md:text-xl"
                                    >
                                        {t('credentials.facebookHackerCup2020.title')}
                                    </h2>
                                    <p className="font-dm_sans text-xs leading-snug text-stone-600 md:text-base">
                                        {t('credentials.facebookHackerCup2020.subtitle')}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3 text-left font-dm_sans text-sm leading-relaxed text-stone-800 md:text-base md:leading-7">
                                <p>{t('credentials.facebookHackerCup2020.modal.storyP1')}</p>
                                <p>{t('credentials.facebookHackerCup2020.modal.storyP2')}</p>
                            </div>

                            <div className="flex justify-center pt-0.5 md:pt-1">
                                <GradientButton
                                    href="https://ingsistemas.cloud.ufps.edu.co/evento-facebook-colombia-hack-2020/"
                                    external
                                    className="md:[&_a]:px-6 md:[&_a]:py-3.5"
                                >
                                    <span className="font-dm_sans text-sm font-semibold text-stone-900 md:text-base">
                                        {t('credentials.facebookHackerCup2020.modal.viewPublication')}
                                    </span>
                                </GradientButton>
                            </div>
                        </div>
                    </SurfaceCard>
                </div>
            </div>
        </div>
    );

    return createPortal(modal, document.body);
};
