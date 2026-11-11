// ⚙️ Datos de contacto de NODO: se cambian solo acá.
// WhatsApp en formato internacional, sin + ni espacios:
// 549 + código de área sin 0 + número sin 15. Ejemplo: 5491123456789
export const WHATSAPP = '5493426395536';
export const INSTAGRAM = ''; // TODO: usuario sin @, ej.: 'nodo.textil'
export const EMAIL = '';     // TODO: ej.: 'hola@nodo.com.ar'

/** Arma un enlace de WhatsApp con el mensaje ya escrito */
export const waLink = (mensaje: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
