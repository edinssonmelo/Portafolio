import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { useEffect } from "react";

export const CotizacionPage = () => {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif min-h-screen">
            <Header />

            <div className="relative content-center items-center bg-white box-border caret-transparent gap-x-0 flex flex-col h-auto justify-start min-h-screen gap-y-0 overflow-clip pt-[100px] pb-20">
                <div className="w-full max-w-full mx-auto px-0">
                    {/* Images Container - Full Width */}
                    <div className="w-full bg-white">
                        {/* Images Gallery - Display in order */}
                        <div className="flex flex-col gap-0 w-full">
                            <img
                                src="/cotizaciones/c1.png"
                                alt="Cotización Sistema Barber - Parte 1"
                                className="w-full h-auto object-contain"
                                loading="lazy"
                            />
                            <img
                                src="/cotizaciones/c2.png"
                                alt="Cotización Sistema Barber - Parte 2"
                                className="w-full h-auto object-contain"
                                loading="lazy"
                            />
                            <img
                                src="/cotizaciones/c3.png"
                                alt="Cotización Sistema Barber - Parte 3"
                                className="w-full h-auto object-contain"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

