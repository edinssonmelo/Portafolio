import { CONTACT_LINKS } from "@/config/seo";

const linkClassName =
    "font-semibold text-stone-900 underline decoration-stone-400 underline-offset-2 transition-colors hover:decoration-stone-900";

export const FooterContact = () => {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-black text-sm md:text-stone-900 md:text-base font-semibold font-dm_sans">
                Contacto
            </h3>
            <div className="flex flex-col gap-2">
                <p className="text-black text-sm md:text-stone-700 md:text-base font-dm_sans">
                    Contáctame por{" "}
                    <a href={CONTACT_LINKS.mailto} className={linkClassName}>
                        email
                    </a>{" "}
                    o{" "}
                    <a
                        href={CONTACT_LINKS.whatsappDefault}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClassName}
                    >
                        WhatsApp
                    </a>
                    .
                </p>
                <p className="text-black text-sm md:text-stone-700 md:text-base font-dm_sans">
                    Cúcuta, Colombia
                </p>
            </div>
        </div>
    );
};
