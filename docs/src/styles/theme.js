const colors = {
  accent: '#7860ed',
  bg: '#ffffff',
  bgLight: '#f0f0f0',
  bgDark: '#1f1f1f',
  border: '#ececec',
  passive: '#444444',
  passiveBg: '#f2f2f2',
  textLight: '#ffffff',
  textDark: '#4e4e4e',
  button: '#4e4e4e',
  buttonHover: '#1f1f1f',
  buttonLight: '#f0f0f0',
  buttonLightHover: '#d6cff9',
  code: '#7860ed',
  codeBg: '#f0f7fb',
};

const systemFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'Noto Sans',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'Noto Color Emoji',
];

const fonts = {
  body: systemFonts.join(', '),
  code: 'Space Mono, monospace',
};

const fontSizes = {
  small: '0.9em',
  body: '1.8rem',
  bodySmall: '1.5rem',
  code: '0.8em',
  h1: '3.45em',
  h2: '2.11em',
  h3: '1.64em',
};

const fontWeights = {
  body: '400',
  links: '500',
  heading: '600',
};

const layout = {
  page: '144rem',
  header: '4.8rem',
  stripes: '0.7rem',
  sidebar: '26rem',
  legend: '22rem',
  logo: '12rem',
};

const spacing = {
  xs: '0.6rem',
  sm: '1.5rem',
  md: '2.75rem',
  lg: '4.75rem',
  xl: '8.2rem',
};

export const shadows = {
  header: 'rgba(0, 0, 0, 0.09) 0px 2px 10px -3px',
  input: 'rgba(0, 0, 0, 0.09) 0px 2px 10px -3px',
};

const lineHeights = {
  body: '1.5',
  heading: '1.1',
  code: '1.2',
};

export const mediaSizes = {
  sm: 700,
  md: 960,
  lg: 1200,
};

export const media = {
  sm: `(min-width: ${mediaSizes.sm}px)`,
  md: `(min-width: ${mediaSizes.md}px)`,
  lg: `(min-width: ${mediaSizes.lg}px)`,
};

export const theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  layout,
  spacing,
  shadows,
  lineHeights,
  media,
};
