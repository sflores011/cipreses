export const SITE_MEDIA = {
  logo: "https://multimedia.aumenta.do/wp-content/uploads/2026/08/cps-logo-scaled.png",
} as const;

// El archivo fuente (1834x2560) es un lockup vertical: símbolo + wordmark
// "CIPRESES Y PINOS" debajo. Estas constantes describen su geometría para
// poder recortar solo el símbolo cuando se necesita el logo compacto.
export const LOGO_FULL_ASPECT_RATIO = 1834 / 2560; // ancho / alto del archivo completo
export const LOGO_MARK_HEIGHT_FRACTION = 1946 / 2560; // % de la altura ocupado por el símbolo
export const LOGO_MARK_ASPECT_RATIO =
  LOGO_FULL_ASPECT_RATIO / LOGO_MARK_HEIGHT_FRACTION;
