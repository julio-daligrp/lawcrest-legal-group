/**
 * LAWCREST LEGAL GROUP - Design Tokens & Theme Configuration
 * Boutique Legal Firm — Bávaro–Punta Cana, Dominican Republic
 */

export const COLORS = {
  navy: {
    main: '#062446',       // Azul marino principal
    deep: '#031A39',       // Azul profundo
    secondary: '#173C68',  // Azul secundario
  },
  gold: {
    main: '#C89A32',       // Dorado principal (acento)
    secondary: '#D8B65A',  // Dorado secundario (acento suave / bordes)
  },
  neutral: {
    warmWhite: '#F7F7F5',  // Blanco cálido
    white: '#FFFFFF',      // Blanco puro
  },
} as const;

export const TYPOGRAPHY = {
  fontFamilies: {
    serif: "'Cormorant Garamond', Georgia, serif",
    sans: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
  },
  scale: {
    display: 'text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight',
    h1: 'text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight',
    h2: 'text-2xl md:text-3xl lg:text-4xl font-serif font-medium tracking-tight',
    h3: 'text-xl md:text-2xl font-serif font-medium tracking-normal',
    h4: 'text-lg md:text-xl font-serif font-medium',
    lead: 'text-base md:text-lg font-sans font-light leading-relaxed',
    body: 'text-sm md:text-base font-sans font-normal leading-relaxed',
    small: 'text-xs md:text-sm font-sans font-normal leading-normal',
    caption: 'text-xs font-sans tracking-wider uppercase font-medium',
    button: 'text-xs md:text-sm font-sans font-medium tracking-wide uppercase',
    nav: 'text-sm font-sans font-medium tracking-normal',
  },
} as const;

export const SPACING = {
  containerMaxWidth: '1240px',
  sectionPaddingY: {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
  },
  containerPaddingX: 'px-4 sm:px-6 md:px-8 lg:px-12',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
