export default {
  global: {
    componenteFormativo: 'Fertilización agroecológica',
    descripcionCurso:
      'El componente formativo de fertilización agroecológica abarca principios y prácticas del manejo ecológico de suelos para satisfacer las necesidades nutricionales de los cultivos. Incluye técnicas como compostaje, abonos verdes, lombricompuesto y bioles, promoviendo la sostenibilidad y salud del suelo, y la optimización del crecimiento vegetal mediante métodos naturales y respetuosos con el medio ambiente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos básicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'El suelo como organismo vivo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Nutrición de cultivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Incorporación de materia orgánica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Abonos verdes',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Compostaje',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Abonos líquidos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Procedimiento para obtener abonos orgánicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Compost de pila',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Lombricompuesto',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: '<em>Biol</em> básico',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Abono orgánico fermentado tipo “<em>bocashi</em>”',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'El suelo como organismo vivo ',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2021). Protección de cultivos. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://youtu.be/cMNwWYR7FNw?feature=shared  ',
    },
    {
      tema: 'Nutrición de cultivos ',
      referencia:
        'AGQLabs. (2014). Nutrición vegetal. Seguimiento nutricional de cultivos [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://youtu.be/nJC-5dSNqqc?feature=shared  ',
    },
    {
      tema: 'Incorporación de materia orgánica ',
      referencia:
        'Podcast Agricultura. (2023, enero 2). <em>130 Nutrientes orgánicos para mejorar el suelo</em> [Audio podcast]. ',
      tipo: 'Podcast',
      link: 'https://music.youtube.com/podcast/umz6sVcngTo  ',
    },
    {
      tema: 'Abonos verdes ',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2023). Composición líquida de bioabonos y lixiviados. [Archivo de video] Youtube. ',
      tipo: 'Video',
      link: 'https://youtu.be/Y036TMrfYMo?feature=shared  ',
    },
    {
      tema: 'Compostaje ',
      referencia:
        'Bueno Bosch, M. (2021).<em>Cómo hacer un buen compost: manual para horticultores ecológicos:</em>(5 ed.). La Fertilidad de la Tierra Ediciones.  ',
      tipo: 'Capitulo 7',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/230083  ',
    },
    {
      tema: 'Abonos líquidos ',
      referencia: '',
      tipo: '',
      link: '',
    },
    {
      tema: 'Procedimiento para obtener abonos orgánicos ',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2023). Producción de bioabonos. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://youtu.be/ERQhd-HzDcA?feature=shared  ',
    },
    {
      tema: 'Compost de pila ',
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2013). <em>El estado de los recursos de tierras y aguas del mundo para la alimentación y la agricultura: Gestionar sistemas en riesgo.</em> ',
      tipo: 'Documento (Leer 45-65) ',
      link: 'https://www.fao.org/4/i3388s/i3388s.pdf  ',
    },
    {
      tema: 'Lombricompuesto ',
      referencia:
        'La finca de hoy. (2017). Ingenio en la elaboración de camas para lombricultura | La Finca de Hoy [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OvnDm7JZz2E  ',
    },
    {
      tema: 'Biol básico ',
      referencia:
        'Planeta Agronómico. (2020). Cómo elaborar BIOL sencillo a partir de ESTIÉRCOL de VACA [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ht5k0A5Q2oE  ',
    },
    {
      tema: 'Abono orgánico fermentado tipo “bocashi” ',
      referencia:
        'TvAgro (2018). Biofábricas: Abono Bocashi como solución para Recuperar Suelos - TvAgro por Juan Gonzalo Angel [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=x1JNdLiUlIs  ',
    },
  ],
  glosario: [
    {
      termino: 'Abonos verdes',
      significado:
        'plantas, generalmente leguminosas, que se siembran y luego se incorporan al suelo para aportar nutrientes y mejorar la estructura del suelo. ',
    },
    {
      termino: 'Bioles',
      significado:
        'abonos líquidos obtenidos de la fermentación de residuos orgánicos y otros componentes, utilizados para proporcionar nutrientes a las plantas de manera eficiente. ',
    },
    {
      termino: 'Compostaje',
      significado:
        'proceso de descomposición controlada de residuos orgánicos, como restos de cosecha y estiércol, para producir compost, un abono natural que mejora la fertilidad del suelo. ',
    },
    {
      termino: 'Deficiencias nutricionales',
      significado:
        'síntomas visibles en las plantas causados por la falta de nutrientes esenciales, como clorosis, necrosis y amarillamiento de hojas, que afectan su crecimiento y producción. ',
    },
    {
      termino: 'Fertilización agroecológica',
      significado:
        'práctica que busca satisfacer las necesidades nutricionales de los cultivos mediante técnicas sostenibles y respetuosas con el medio ambiente, evitando el uso de fertilizantes sintéticos. ',
    },
    {
      termino: 'Lombricompuesto',
      significado:
        'abono producido mediante la descomposición de materia orgánica por lombrices rojas californianas, que aporta nutrientes al suelo y mejora su estructura. ',
    },
    {
      termino: 'Macronutrientes',
      significado:
        'nutrientes esenciales que las plantas necesitan en grandes cantidades para su crecimiento y desarrollo, como nitrógeno, fósforo y potasio. ',
    },
    {
      termino: 'Micronutrientes',
      significado:
        'nutrientes esenciales que las plantas necesitan en pequeñas cantidades, como manganeso, hierro y zinc, cruciales para diversas funciones metabólicas. ',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'capacidad de mantener prácticas agrícolas que no agoten los recursos naturales, asegurando la conservación del medio ambiente y la productividad a largo plazo. ',
    },
    {
      termino: 'Suelo como organismo vivo',
      significado:
        'concepto que considera el suelo como un sistema dinámico que alberga una diversidad de organismos vivos, como bacterias y hongos, que contribuyen a su fertilidad. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, F. (2010). Preparación y uso del biol. Cusco: Soluciones Prácticas. ',
      link: '',
    },
    {
      referencia:
        'Kolmans, E., Vásquez, D. (1999). Manual de Agricultura Ecológica. La Habana: Grupo de Agricultura Orgánica de ACTAF. ',
      link: '',
    },
    {
      referencia: 'Monroig, M. F. (s.f.). Ecos del Café.',
      link: 'http://academic.uprm.edu/mmonroig/id25.htm ',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2011). Elaboración y uso del bocashi. San Salvador: Ministerio de Agricultura y Ganadería. ',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) e Instituto Colombiano de Desarrollo Rural (INCODER). (2016). Guía para la Implementación de Centros Demostrativos de Capacitación CDC con enfoque agroecológico.',
      link: 'http://www.fao.org/3/a-i6041s.pdf ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
