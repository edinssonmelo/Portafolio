import { BlurEllipseProps } from "@/components/BlurEllipse";

/**
 * Configuración centralizada de todos los elipses con blur
 * 
 * Para agregar un nuevo elipse, simplemente añade un objeto con las propiedades:
 * - color: Color en formato rgba
 * - blur: Intensidad del blur (opcional, por defecto 100)
 * - size: Tamaño para mobile y desktop
 * - position: Posición para mobile y desktop
 */

export type BlurEllipseConfig = BlurEllipseProps;

// ============================================
// CONFIGURACIÓN DE ELIPSES PARA HERO SECTION
// ============================================
export const heroEllipses: BlurEllipseConfig[] = [
    {
        color: "rgba(220, 255, 49, 0.4)", // Amarillo-verde
        blur: 100,
        size: {
            mobile: {
                width: "609px",
                height: "560px",
                aspectRatio: "1.108_/_1",
            },
            desktop: {
                width: "609px",
                height: "560px",
                aspectRatio: "1.108_/_1",
            },
        },
        position: {
            mobile: {
                bottom: "-85px",
                right: "-221px",
                top: "auto",
            },
            desktop: {
                top: "-116px",
                right: "-172px",
                bottom: "auto",
            },
        },
    },
    {
        color: "rgba(127, 230, 217, 0.4)", // Cyan/turquesa
        blur: 100,
        size: {
            mobile: {
                width: "577px",
                height: "540px",
                aspectRatio: "1.108_/_1",
            },
            desktop: {
                width: "577px",
                height: "540px",
                aspectRatio: "1.108_/_1",
            },
        },
        position: {
            mobile: {
                bottom: "-124px",
                left: "-181px",
                transform: "transform-none",
            },
            desktop: {
                bottom: "-156px",
                left: "51%",
                transform: "translate-x-[-50.0%]",
            },
        },
    },
];

// ============================================
// CONFIGURACIÓN DE ELIPSES PARA SERVICES SECTION
// ============================================
export const servicesEllipses: BlurEllipseConfig[] = [
    {
        color: "rgba(220, 255, 49, 0.4)", // Amarillo-verde
        blur: 100,
        size: {
            mobile: {
                width: "calc(100% + 477px)",
                height: "340px",
                aspectRatio: "1.108_/_1",
            },
            desktop: {
                width: "657px",
                height: "592px",
                aspectRatio: "1.108_/_1",
            },
        },
        position: {
            mobile: {
                bottom: "-282px",
                left: "-477px",
                right: "0",
            },
            desktop: {
                bottom: "7px",
                right: "-190px",
                left: "auto",
            },
        },
    },
    {
        color: "rgba(127, 230, 217, 0.4)", // Cyan/turquesa (verdoso)
        blur: 100,
        size: {
            mobile: {
                width: "calc(100% + 333px)",
                height: "340px",
                aspectRatio: "1.108_/_1",
            },
            desktop: {
                width: "660px",
                height: "694px",
                aspectRatio: "1.108_/_1",
            },
        },
        position: {
            mobile: {
                bottom: "-210px",
                right: "-333px",
                left: "0",
            },
            desktop: {
                bottom: "-361px",
                right: "-25px",
                left: "auto",
            },
        },
    },
];

// ============================================
// CONFIGURACIÓN DE ELIPSES PARA ABOUT SECTION
// ============================================
export const aboutEllipses: BlurEllipseConfig[] = [
    {
        color: "rgba(127, 230, 217, 0.4)", // Cyan/turquesa (verdoso)
        blur: 100,
        size: {
            mobile: {
                width: "377px",
                height: "340px",
                aspectRatio: "1.108_/_1",
            },
            desktop: {
                width: "624px",
                height: "657px",
                aspectRatio: "1.108_/_1",
            },
        },
        position: {
            mobile: {
                bottom: "-210px",
                right: "-333px",
                left: "0",
                top: "auto",
            },
            desktop: {
                left: "-23px",
                top: "-98px",
                bottom: "auto",
                right: "auto",
            },
        },
    },
    {
        color: "rgba(220, 255, 49, 0.4)", // Amarillo-verde
        blur: 100,
        size: {
            mobile: {
                width: "377px",
                height: "340px",
                aspectRatio: "1.108_/_1",
            },
            desktop: {
                width: "624px",
                height: "570px",
                aspectRatio: "1.108_/_1",
            },
        },
        position: {
            mobile: {
                bottom: "-282px",
                left: "-477px",
                right: "0",
            },
            desktop: {
                left: "-23px",
                bottom: "-5px",
                right: "auto",
                top: "auto",
            },
        },
    },
];

// ============================================
// CONFIGURACIÓN DE ELIPSES PARA PORTFOLIO SECTION
// ============================================
export const portfolioEllipses: BlurEllipseConfig[] = [
    {
        color: "rgba(127, 230, 217, 0.4)", // Cyan/turquesa (verdoso)
        blur: 100,
        size: {
            mobile: {
                width: "377px",
                height: "340px",
                aspectRatio: "1.108_/_1",
            },
            desktop: {
                width: "603px",
                height: "628px",
                aspectRatio: "1.108_/_1",
            },
        },
        position: {
            mobile: {
                bottom: "-282px",
                left: "-477px",
                right: "0",
            },
            desktop: {
                left: "-306px",
                top: "-251px",
                right: "auto",
                bottom: "auto",
            },
        },
    },
    {
        color: "rgba(220, 255, 49, 0.4)", // Amarillo-verde
        blur: 100,
        size: {
            mobile: {
                width: "377px",
                height: "340px",
                aspectRatio: "1.108_/_1",
            },
            desktop: {
                width: "596px",
                height: "542px",
                aspectRatio: "1.108_/_1",
            },
        },
        position: {
            mobile: {
                bottom: "-210px",
                right: "-333px",
                left: "0",
            },
            desktop: {
                right: "-97px",
                top: "-202px",
                left: "auto",
                bottom: "auto",
            },
        },
    },
];

// ============================================
// CONFIGURACIÓN DE ELIPSES PARA CTA SECTION
// ============================================
export const ctaEllipses: BlurEllipseConfig[] = [
    {
        color: "rgba(127, 230, 217, 0.4)", // Cyan/turquesa (verdoso)
        blur: 100,
        size: {
            mobile: {
                width: "377px",
                height: "340px",
                aspectRatio: "1.108_/_1",
            },
            desktop: {
                width: "722px",
                height: "748px",
                aspectRatio: "1.108_/_1",
            },
        },
        position: {
            mobile: {
                bottom: "-282px",
                left: "-477px",
                right: "0",
            },
            desktop: {
                right: "-135px",
                top: "-473px",
                left: "auto",
                bottom: "auto",
            },
        },
    },
    {
        color: "rgba(220, 255, 49, 0.4)", // Amarillo-verde
        blur: 100,
        size: {
            mobile: {
                width: "377px",
                height: "340px",
                aspectRatio: "1.108_/_1",
            },
            desktop: {
                width: "645px",
                height: "587px",
                aspectRatio: "1.108_/_1",
            },
        },
        position: {
            mobile: {
                bottom: "-210px",
                right: "-333px",
                left: "0",
            },
            desktop: {
                right: "-594px",
                top: "-473px",
                left: "auto",
                bottom: "auto",
            },
        },
    },
];

// ============================================
// CONFIGURACIÓN DE ELIPSES PARA CONTACT SECTION
// ============================================
export const contactEllipses: BlurEllipseConfig[] = [
    {
        color: "rgba(127, 230, 217, 0.4)", // Cyan/turquesa (verdoso)
        blur: 100,
        size: {
            mobile: {
                width: "377px",
                height: "340px",
                aspectRatio: "1.108_/_1",
            },
            desktop: {
                width: "361px",
                height: "379px",
                aspectRatio: "1.108_/_1",
            },
        },
        position: {
            mobile: {
                bottom: "-210px",
                right: "-333px",
                left: "0",
                top: "auto",
            },
            desktop: {
                right: "-323px",
                top: "-20px",
                bottom: "auto",
                left: "auto",
            },
        },
    },
    {
        color: "rgba(220, 255, 49, 0.4)", // Amarillo-verde
        blur: 100,
        size: {
            mobile: {
                width: "377px",
                height: "340px",
                aspectRatio: "1.108_/_1",
            },
            desktop: {
                width: "372px",
                height: "338px",
                aspectRatio: "1.108_/_1",
            },
        },
        position: {
            mobile: {
                bottom: "-282px",
                left: "-477px",
                right: "0",
            },
            desktop: {
                right: "-98px",
                top: "-26px",
                left: "auto",
                bottom: "auto",
            },
        },
    },
];

// ============================================
// CONFIGURACIÓN DE ELIPSES PARA PROJECTS PAGE
// ============================================
export const projectsPageEllipses: BlurEllipseConfig[] = [
    {
        color: "rgba(220, 255, 49, 0.4)", // Amarillo-verde
        blur: 100,
        zIndex: -1, // Detrás del contenido en ProjectsPage
        size: {
            mobile: {
                width: "377px",
                height: "340px",
                aspectRatio: "1.108_/_1",
            },
            desktop: {
                width: "624px",
                height: "657px",
                aspectRatio: "1.108_/_1",
            },
        },
        position: {
            mobile: {
                bottom: "-282px",
                left: "-477px",
                top: "auto",
                right: "auto",
            },
            desktop: {
                top: "-58px",
                left: "523px",
                right: "0",
                bottom: "161px",
            },
        },
    },
    {
        color: "rgba(127, 230, 217, 0.4)", // Cyan/turquesa (verdoso)
        blur: 100,
        zIndex: -1, // Detrás del contenido en ProjectsPage
        size: {
            mobile: {
                width: "377px",
                height: "340px",
                aspectRatio: "1.108_/_1",
            },
            desktop: {
                width: "624px",
                height: "570px",
                aspectRatio: "1.108_/_1",
            },
        },
        position: {
            mobile: {
                bottom: "-210px",
                right: "-333px",
                left: "0",
                top: "auto",
            },
            desktop: {
                top: "-60px",
                left: "100px",
                right: "-296px",
                bottom: "250px",
            },
        },
    },
];

