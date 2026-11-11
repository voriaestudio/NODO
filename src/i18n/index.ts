import es from './es';

// Cuando sumemos inglés: import en from './en'; y agregarlo acá.
const textos = { es };

export type Idioma = keyof typeof textos;

/** Devuelve los textos del idioma de la página (por defecto, español) */
export const getTextos = (idioma?: string) => textos[(idioma as Idioma) ?? 'es'] ?? textos.es;
