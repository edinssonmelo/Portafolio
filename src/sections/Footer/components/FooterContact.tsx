import { CONTACT_LINKS } from "@/config/seo";
import { Trans, useTranslation } from 'react-i18next';

const linkClassName =
    "font-semibold text-stone-900 underline decoration-stone-400 underline-offset-2 transition-colors hover:decoration-stone-900";

export const FooterContact = () => {
    const { t } = useTranslation('common');

    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-black text-sm md:text-stone-900 md:text-base font-semibold font-dm_sans">
                {t('footer.contactTitle')}
            </h3>
            <div className="flex flex-col gap-2">
                <p className="text-black text-sm md:text-stone-700 md:text-base font-dm_sans">
                    <Trans
                        i18nKey="footer.contactLine"
                        ns="common"
                        components={{
                            emailLink: <a href={CONTACT_LINKS.mailto} className={linkClassName} />,
                            waLink: (
                                <a
                                    href={CONTACT_LINKS.whatsappDefault}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={linkClassName}
                                />
                            ),
                        }}
                    />
                </p>
                <p className="text-black text-sm md:text-stone-700 md:text-base font-dm_sans">
                    {t('footer.location')}
                </p>
            </div>
        </div>
    );
};
