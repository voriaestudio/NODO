// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Cambiar por el dominio real cuando esté (sirve para SEO y para las URLs absolutas)
  site: 'https://nodo.example',

  // Rutas por idioma: español en "/" e inglés en "/en/" (la versión en inglés se suma después)
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
});
