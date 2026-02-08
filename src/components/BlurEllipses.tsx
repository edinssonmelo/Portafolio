import { BlurEllipse, BlurEllipseProps } from "./BlurEllipse";

type BlurEllipsesProps = {
    /** Array de configuraciones de elipses a renderizar */
    ellipses: BlurEllipseProps[];
};

/**
 * Componente helper para renderizar múltiples elipses con blur
 * 
 * @example
 * ```tsx
 * import { heroEllipses } from "@/config/blurEllipses";
 * 
 * <BlurEllipses ellipses={heroEllipses} />
 * ```
 */
export const BlurEllipses = ({ ellipses }: BlurEllipsesProps) => {
    return (
        <>
            {ellipses.map((ellipse, index) => (
                <BlurEllipse key={index} {...ellipse} />
            ))}
        </>
    );
};

