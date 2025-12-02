export const FooterContact = () => {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-black text-sm md:text-stone-900 md:text-base font-semibold font-dm_sans">
                Contacto
            </h3>
            <div className="flex flex-col gap-2">
                <a
                    href="mailto:contacto@edinssonmelo.com"
                    className="text-black text-sm md:text-stone-700 md:text-base font-dm_sans hover:underline"
                >
                    contacto@edinssonmelo.com
                </a>
                <p className="text-black text-sm md:text-stone-700 md:text-base font-dm_sans">
                    Cúcuta, Colombia
                </p>
                <a
                    href="https://wa.me/573202633111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black text-sm md:text-stone-700 md:text-base font-dm_sans hover:underline"
                >
                    WhatsApp: +57 320 2633111
                </a>
            </div>
        </div>
    );
};

