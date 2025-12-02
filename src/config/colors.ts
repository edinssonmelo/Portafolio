/**
 * Configuración centralizada de colores del tema
 * 
 * Edita estos valores para cambiar los colores en toda la aplicación
 */

export const colors = {
    // Color principal/accento (usado en hover, estados activos, etc.)
    primary: '#DCFF31',

    // Color secundario (usado en backgrounds de iconos sociales, timeline dots, etc.)
    secondary: '#DCFF31',

    // Color de hover para enlaces de navegación
    navHover: '#DCFF31',

    // Color de estado activo para enlaces de navegación
    navActive: '#DCFF31',

    // Color de fondo para iconos sociales en hover
    socialIconHover: '#DCFF31',

    // Color de fondo para iconos sociales por defecto
    socialIconBackground: '#DCFF31',

    // Color de las bolitas del timeline
    timelineDot: '#4BFBBA',

} as const;

// Exportar valores individuales para uso directo
export const PRIMARY_COLOR = colors.primary;
export const NAV_HOVER_COLOR = colors.navHover;
export const NAV_ACTIVE_COLOR = colors.navActive;
export const SOCIAL_ICON_HOVER_COLOR = colors.socialIconHover;
export const SOCIAL_ICON_BACKGROUND_COLOR = colors.socialIconBackground;
export const TIMELINE_DOT_COLOR = colors.timelineDot;

