import React from "react";

export type BlurEllipsePosition = {
    // Mobile positions
    mobile?: {
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
        transform?: string;
    };
    // Desktop positions
    desktop?: {
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
        transform?: string;
    };
};

export type BlurEllipseSize = {
    // Mobile size
    mobile?: {
        width?: string;
        height?: string;
        aspectRatio?: string;
    };
    // Desktop size
    desktop?: {
        width?: string;
        height?: string;
        aspectRatio?: string;
    };
};

export type BlurEllipseProps = {
    /** Color del elipse en formato rgba (ej: "rgba(220, 255, 49, 0.4)") */
    color: string;
    /** Intensidad del blur (por defecto: 100px) */
    blur?: number;
    /** Tamaño del elipse */
    size?: BlurEllipseSize;
    /** Posición del elipse */
    position?: BlurEllipsePosition;
    /** ViewBox del SVG (por defecto: "0 0 377 340") */
    viewBox?: string;
    /** Clases CSS adicionales */
    className?: string;
    /** Z-index del elipse (por defecto: 0) */
    zIndex?: number;
};

/**
 * Componente reutilizable para crear elipses con efecto blur
 * 
 * @example
 * ```tsx
 * <BlurEllipse
 *   color="rgba(220, 255, 49, 0.4)"
 *   blur={100}
 *   size={{
 *     mobile: { width: "377px", height: "340px" },
 *     desktop: { width: "377px", height: "340px" }
 *   }}
 *   position={{
 *     mobile: { bottom: "-85px", right: "-221px" },
 *     desktop: { top: "-116px", right: "-172px", bottom: "auto" }
 *   }}
 * />
 * ```
 */
export const BlurEllipse = ({
    color,
    blur = 100,
    size,
    position,
    viewBox = "0 0 377 340",
    className = "",
    zIndex = 0,
}: BlurEllipseProps) => {
    // Construir estilos inline para propiedades dinámicas
    const buildStyles = (): React.CSSProperties => {
        const styles: React.CSSProperties = {
            filter: `blur(${blur}px)`,
            position: "absolute",
            zIndex: zIndex,
        };

        // Estilos para mobile (por defecto)
        if (size?.mobile?.width) styles.width = size.mobile.width;
        if (size?.mobile?.height) styles.height = size.mobile.height;

        if (position?.mobile) {
            if (position.mobile.top !== undefined) {
                styles.top = position.mobile.top === "auto" ? "auto" : position.mobile.top;
            }
            if (position.mobile.right !== undefined) {
                styles.right = position.mobile.right === "auto" ? "auto" : position.mobile.right;
            }
            if (position.mobile.bottom !== undefined) {
                styles.bottom = position.mobile.bottom === "auto" ? "auto" : position.mobile.bottom;
            }
            if (position.mobile.left !== undefined) {
                styles.left = position.mobile.left === "auto" ? "auto" : position.mobile.left;
            }
            if (position.mobile.transform) {
                if (position.mobile.transform.includes("translate-x")) {
                    const match = position.mobile.transform.match(/translate-x-\[([^\]]+)\]/);
                    if (match) {
                        styles.transform = `translateX(${match[1]})`;
                    }
                } else if (position.mobile.transform === "transform-none") {
                    styles.transform = "none";
                }
            }
        }

        return styles;
    };

    // Construir clases CSS para Tailwind
    const buildClasses = () => {
        const classes: string[] = ["absolute", "box-border", "caret-transparent", "shrink-0", "pointer-events-none"];

        // Aspect ratio
        if (size?.mobile?.aspectRatio) {
            classes.push(`aspect-[${size.mobile.aspectRatio}]`);
        }
        if (size?.desktop?.aspectRatio) {
            classes.push(`md:aspect-[${size.desktop.aspectRatio}]`);
        }

        if (className) classes.push(className);

        return classes.join(" ");
    };

    const baseStyles = buildStyles();
    const classes = buildClasses();

    // Crear un ID único para este elipse para aplicar estilos de desktop
    const ellipseId = `blur-ellipse-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <>
            <style>
                {`
          #${ellipseId} {
            ${Object.entries(baseStyles).map(([key, value]) => {
                    const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
                    return `${cssKey}: ${value};`;
                }).join('\n            ')}
          }
          @media (min-width: 768px) {
            #${ellipseId} {
              ${size?.desktop?.width ? `width: ${size.desktop.width};` : ''}
              ${size?.desktop?.height ? `height: ${size.desktop.height};` : ''}
              ${position?.desktop?.top !== undefined ? `top: ${position.desktop.top === "auto" ? "auto" : position.desktop.top};` : ''}
              ${position?.desktop?.right !== undefined ? `right: ${position.desktop.right === "auto" ? "auto" : position.desktop.right};` : ''}
              ${position?.desktop?.bottom !== undefined ? `bottom: ${position.desktop.bottom === "auto" ? "auto" : position.desktop.bottom};` : ''}
              ${position?.desktop?.left !== undefined ? `left: ${position.desktop.left === "auto" ? "auto" : position.desktop.left};` : ''}
              ${position?.desktop?.transform?.includes("translate-x") ?
                        `transform: translateX(${position.desktop.transform.match(/translate-x-\[([^\]]+)\]/)?.[1] || "0"});` :
                        position?.desktop?.transform === "transform-none" ? "transform: none;" : ""}
            }
          }
        `}
            </style>
            <svg
                id={ellipseId}
                className={classes}
                viewBox={viewBox}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M 188.5 0 C 292.606 0 377 76.112 377 170 C 377 263.888 292.606 340 188.5 340 C 84.394 340 0 263.888 0 170 C 0 76.112 84.394 0 188.5 0 Z"
                    fill={color}
                />
            </svg>
        </>
    );
};

