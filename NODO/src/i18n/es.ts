// Textos de la web en español. Para la versión en inglés se crea en.ts con la misma estructura.
export default {
  meta: {
    title: 'NODO · Desarrollo y producción textil',
    description:
      'Desarrollamos y producimos indumentaria para empresas, marcas y proyectos. Del concepto al producto terminado. Envíos a todo el país.',
  },

  nav: {
    skip: 'Saltar al contenido',
    home: 'NODO, volver al inicio',
    openMenu: 'Abrir menú',
    items: [
      { href: '#nosotros', label: 'Nosotros' },
      { href: '#servicios', label: 'Servicios' },
      { href: '#proceso', label: 'Proceso' },
      { href: '#trabajos', label: 'Trabajos' },
      { href: '#contacto', label: 'Contacto' },
    ],
  },

  hero: {
    eyebrow: 'Desarrollo y producción textil',
    title1: 'Del concepto',
    title2: 'al producto terminado.',
    lead: 'Desarrollamos y producimos indumentaria para empresas, marcas y proyectos. Coordinamos cada etapa del proceso para transformar una idea o un diseño existente en un producto terminado.',
    cta: 'Cotizá tu producción',
    secondary: 'Conocé nuestros trabajos',
    tags: 'Desarrollo · Producción · Personalización',
    photo: 'Foto principal · prenda terminada',
    photoSrc: '/img/fotos/hero-4get.jpeg',
    photoAlt: 'Remera negra con estampado cromado en la espalda, producida por NODO para 4GET Producciones',
  },

  marquee: [
    'Desarrollo de producto',
    'Moldería',
    'Corte y confección',
    'Estampado',
    'Bordado',
    'Uniformes',
    'Colecciones para marcas',
  ],

  about: {
    index: 'Nosotros',
    title: 'Conectamos ideas con producción.',
    intro: 'En NODO conectamos las necesidades de cada cliente con soluciones concretas de producción textil.',
    body: [
      'Trabajamos con empresas que necesitan vestir a sus equipos y con marcas que buscan desarrollar o fabricar sus propios productos. Nos ocupamos de coordinar las distintas etapas de cada proyecto, desde la elección de materiales hasta la confección y la personalización de las prendas.',
      'Podemos acompañarte desde el desarrollo inicial o trabajar sobre un diseño que ya tengas definido. Adaptamos cada producción al producto, las cantidades y los requerimientos de cada cliente.',
    ],
    photo: 'Foto horizontal · taller o proceso',
    photoSrc: '/img/fotos/taller-serigrafia.png',
    photoAlt: 'Pulpo de serigrafía con remeras negras en plena producción',
    quote: 'Un solo contacto para coordinar todo el proceso de producción.',
  },

  services: {
    index: 'Servicios',
    title: 'Soluciones para cada etapa de producción.',
    items: [
      {
        name: 'Desarrollo de producto',
        photo: '/img/fotos/servicio-desarrollo.webp',
        desc: 'Te ayudamos a convertir una idea en una prenda concreta. Trabajamos sobre el producto, los materiales, la moldería y los detalles necesarios para llevarlo a producción.',
      },
      {
        name: 'Corte y confección',
        photo: '/img/fotos/servicio-confeccion.jpeg',
        desc: 'Coordinamos la fabricación de prendas según las especificaciones de cada proyecto, cuidando los materiales, las terminaciones y los requisitos acordados.',
      },
      {
        name: 'Estampado y bordado',
        photo: '/img/fotos/servicio-estampado.jpeg',
        desc: 'Integramos distintas técnicas de personalización para aplicar logos, diseños e identidades visuales sobre las prendas.',
      },
      {
        name: 'Producción para empresas',
        photo: '/img/fotos/servicio-empresas.webp',
        desc: 'Desarrollamos indumentaria corporativa, uniformes y prendas para equipos de trabajo, adaptándonos a las necesidades de cada organización.',
      },
      {
        name: 'Producción para marcas',
        photo: '/img/fotos/servicio-marcas.jpeg',
        desc: 'Fabricamos prendas destinadas a la comercialización. Podemos trabajar desde el desarrollo del producto o ejecutar una propuesta que ya tengas definida.',
      },
      {
        name: 'Soluciones a medida',
        photo: '/img/fotos/servicio-medida.jpeg',
        desc: 'Trabajamos con diferentes tipos de prendas y materiales. El alcance y la viabilidad de cada proyecto se evalúan según sus características, cantidades y requerimientos.',
      },
    ],
  },

  process: {
    index: 'Proceso',
    title: 'De la idea a la entrega.',
    steps: [
      { title: 'Nos contás tu proyecto', desc: 'Nos compartís qué necesitás producir, para quién, en qué cantidad y para cuándo.' },
      { title: 'Definimos la propuesta', desc: 'Evaluamos el producto, los materiales, las técnicas de personalización y las etapas de fabricación necesarias.' },
      { title: 'Cotizamos y coordinamos', desc: 'Definimos las especificaciones, las cantidades, los plazos y el presupuesto antes de comenzar.' },
      { title: 'Producimos', desc: 'Coordinamos las etapas de fabricación según lo acordado para cada proyecto.' },
      { title: 'Entregamos', desc: 'Recibís las prendas terminadas, listas para el uso, la distribución o la comercialización.' },
    ],
  },

  works: {
    index: 'Trabajos',
    title: 'Experiencia en distintos sectores.',
    lead: 'Trabajamos con clientes de diferentes industrias, desde empresas de ingeniería hasta marcas comerciales, gastronomía y producción de eventos.',
    items: [
      {
        id: 'aus',
        cat: 'Indumentaria corporativa',
        name: 'AUS — Automatica Services',
        photo: '',
        alt: '',
        desc: 'Remeras estampadas y chombas bordadas. El trabajo incluyó selección de telas, corte y confección.',
      },
      {
        id: 'highs',
        cat: 'Marca de ropa',
        name: 'HIGHS',
        photo: '/img/fotos/trabajo-highs.jpeg',
        alt: 'Remeras negras de HIGHS con estampado en la espalda y logo en el pecho',
        desc: 'Producción de remeras destinadas a la comercialización de la marca.',
      },
      {
        id: 'ahumadero',
        cat: 'Uniformes · Gastronomía',
        name: 'El Ahumadero',
        photo: '/img/fotos/trabajo-ahumadero.png',
        alt: 'Remeras bordó con cuello y puños blancos para el equipo de El Ahumadero',
        desc: 'Producción de uniformes para el equipo de trabajo del establecimiento gastronómico.',
      },
      {
        id: 'gladys',
        cat: 'Gastronomía',
        name: 'Gladys Pastelería',
        photo: '',
        alt: '',
        desc: 'Nuevo proyecto de producción para una marca gastronómica santafesina.',
      },
      {
        id: '4get',
        cat: 'Eventos y entretenimiento',
        name: '4GET Producciones',
        photo: '/img/fotos/trabajo-4get.jpeg',
        alt: 'Remera negra de la edición 10 años de 4GET con estampado en la espalda',
        desc: 'Proyecto de producción textil para una empresa vinculada al sector de eventos y entretenimiento.',
      },
      {
        id: 'bubble',
        cat: 'Marca · Cultivo',
        name: 'Bubble Genetics',
        photo: '/img/fotos/trabajo-bubble.png',
        alt: 'Buzo negro con las letras BG estampadas en rosa',
        desc: 'Remeras y buzos con estampado y bordado para la línea de indumentaria de la marca.',
      },
    ],
    photoPrefix: 'Foto ·',
    photoAlt: 'Foto del trabajo (próximamente)',
  },

  measure: {
    index: 'Producción',
    title: 'Producción a tu medida.',
    lead: 'Cada proyecto tiene necesidades distintas. Por eso, las cantidades mínimas y los plazos dependen del tipo de prenda, los materiales y las técnicas de personalización.',
    // En "value": los números se animan con un conteo; los textos quedan fijos.
    figures: [
      { value: [15, '+'], small: false, unit: 'Remeras por color', desc: 'Cantidad mínima de referencia.' },
      { value: [10, '–', 15], small: false, unit: 'Días hábiles', desc: 'Plazo habitual para remeras y chombas, sujeto a las características de cada producción.' },
      { value: ['ARG'], small: false, unit: 'Envíos a todo el país', desc: 'Realizamos envíos a todo el territorio argentino.' },
    ],
  },

  contact: {
    index: 'Contacto',
    title: 'Hablemos de tu proyecto.',
    lead: '¿Necesitás producir indumentaria para tu empresa o fabricar una colección para tu marca? Contanos qué tenés en mente. Evaluamos tu proyecto y te preparamos una propuesta acorde a tus necesidades.',
    note: 'Completá el formulario y te abrimos WhatsApp con el mensaje armado. El logo o las referencias nos los mandás por ahí mismo.',
    formTitle: 'Para cotizar, necesitamos conocer:',
    fields: {
      nombre: { label: 'Nombre y empresa', placeholder: 'Ej.: Laura, de Estudio Sur' },
      prenda: {
        label: 'Tipo de prenda',
        placeholder: 'Elegí una opción',
        options: ['Remeras', 'Chombas', 'Musculosas', 'Buzos', 'Camperas', 'Pantalones', 'Gorras', 'Varias prendas', 'Otro producto textil'],
      },
      cantidad: { label: 'Cantidad', placeholder: 'Ej.: 60 unidades' },
      colores: { label: 'Colores', placeholder: 'Ej.: negro y blanco' },
      talles: { label: 'Talles', placeholder: 'Ej.: S a XXL' },
      fecha: { label: 'Fecha estimada de entrega', placeholder: 'Ej.: antes del 15 de diciembre' },
      diseno: {
        label: 'Diseño, logo o referencia visual',
        options: [
          { label: 'Lo tengo listo', value: 'Tengo el diseño o el logo listo' },
          { label: 'Tengo una referencia', value: 'Tengo una referencia visual' },
          { label: 'Todavía no', value: 'Todavía no tengo diseño' },
        ],
      },
      etapa: {
        label: '¿En qué etapa estás?',
        options: [
          { label: 'Ya tengo todo definido', value: 'Ya tengo las especificaciones definidas' },
          { label: 'Necesito desarrollar el producto', value: 'Necesito desarrollar el producto' },
        ],
      },
      detalle: { label: 'Algo más que quieras contarnos', placeholder: 'Opcional' },
    },
    error: 'Completá los campos marcados con * para seguir.',
    submit: 'Consultar por WhatsApp',
    // Textos del mensaje que llega por WhatsApp
    message: {
      greeting: 'Hola NODO, soy {nombre}. Quiero pedir una cotización:',
      prenda: 'Prenda',
      cantidad: 'Cantidad',
      colores: 'Colores',
      talles: 'Talles',
      fecha: 'Fecha estimada',
      diseno: 'Diseño',
      etapa: 'Etapa',
      detalle: 'Detalle',
    },
  },

  footer: {
    sections: 'Secciones',
    contact: 'Contacto',
    whatsappMsg: 'Hola NODO, quiero hacer una consulta.',
    copyright: '© 2026 NODO. Todos los derechos reservados.',
  },
};
