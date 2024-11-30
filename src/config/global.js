export default {
  global: {
    componenteFormativo: 'Manejo del cultivo de aguacate, cosecha y poscosecha',
    descripcionCurso:
      'El manejo del cultivo de aguacate incluye prácticas agronómicas como la elección de variedades, fertilización, riego y control de plagas, garantizando un crecimiento óptimo. La cosecha se realiza cuidadosamente para evitar daños, mientras que en la poscosecha se implementan procesos de clasificación, empaque y almacenamiento que preservan la calidad y frescura del fruto, asegurando su éxito en el mercado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-3'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      // },
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
        titulo: 'La siembra y el manejo del cultivo de aguacate',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cosecha y poscosecha del aguacate.',
        desarrolloContenidos: true,
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
      tema: 'Manual de manejo pre y poscosecha de aguacate',
      referencia: 'Mini agricultura',
      tipo: 'PDF',
      link: 'https://www.mag.go.cr/bibliotecavirtual/F01-9029.pdf',
    },
    {
      tema: 'Cosecha, manejo de poscosecha y agroindustria',
      referencia: 'Agrosavia',
      tipo: 'PDF',
      link:
        'https://editorial.agrosavia.co/index.php/publicaciones/catalog/download/162/152/1129-1?inline=1',
    },
    {
      tema: 'Introducción Cosecha y poscosecha',
      referencia: 'Ecosistema SENA',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3fHDdKRxuvM',
    },
    // {
    //   tema: '',
    //   referencia: '',
    //   tipo: '',
    //   descarga: '/downloads/prueba.pdf',
    // },
  ],
  glosario: [
    {
      termino: 'Ahoyado',
      significado:
        'Esta labor consiste en hacer huecos u hoyos previamente demarcados, se deben realizar con uno (1) o dos (2) meses antes de la siembra',
    },
    {
      termino: 'Cosecha',
      significado:
        'La cosecha es la recolección de productos agrícolas, como frutas y verduras, en su madurez óptima. Este proceso es crucial para asegurar calidad y cantidad, utilizando técnicas manuales o mecánicas, y se ve influenciado por el clima y la variedad del cultivo.',
    },
    {
      termino: 'Elementos menores',
      significado:
        'Entre estos se encuentran el Hierro (Fe), Cobre (Cu), Manganeso (Mn), Molibdeno (Mo), Boro (B), Zinc (Zn) y Cloro (Cl). Son indispensables en el crecimiento y desarrollo de la planta.',
    },
    {
      termino: 'Fertilidad',
      significado:
        'Es la capacidad de un suelo para suministrar todos y cada uno de los nutrientes que necesitan las plantas en el momento, cantidad y forma adecuados.',
    },
    {
      termino: 'Poscosecha',
      significado:
        'La poscosecha abarca las etapas posteriores a la recolección de productos agrícolas, incluyendo manejo, almacenamiento y distribución. Su objetivo es mantener la calidad y prolongar la vida útil, minimizando pérdidas mediante prácticas como limpieza, clasificación y control de temperatura.',
    },
    {
      termino: 'Selección del terreno',
      significado:
        'La selección del terreno es crucial para establecer el cultivo de aguacate, ya que influye en su productividad a lo largo de más de veinte años. Se deben considerar aspectos como la zona de vida, ubicación, pendiente y tipo de suelo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bernal, J. y Díaz, C. (2005). Tecnología para el cultivo del aguacate. Bogotá, Colombia: Produmedios.',
      link: '',
    },
    {
      referencia:
        'Cabezas, C., Hueso, J. y Cuevas, J. (2003). Identificación y descripción de los estados fenológicos-tipo del aguacate (Persea americana Mill). Almería, España: Universidad de Almería.',
      link: '',
    },
    {
      referencia:
        'Corpoica. (2008). Tecnología para el cultivo de aguacate. Consultado el 15 de julio de 2014.',
      link: '',
    },
    {
      referencia:
        'Díaz, D. (2009). Manual técnico del cultivo de aguacate. Bogotá, Colombia: Produmedios.',
      link: '',
    },
    {
      referencia:
        'Fotolia. (2004). Avocado. Consultado el 17 de julio de 2014.',
      link: 'http://co.fotolia.com/id/28686578',
    },
    {
      referencia:
        'Fotolia. (2004). Avocado trees. Consultado el 17 de julio de 2014.',
      link: 'http://co.fotolia.com/id/10785554',
    },
    {
      referencia:
        'Holdridge, L. (1987). Ecología basada en zonas de vida. San José, Costa Rica: Editorial IICA.',
      link: '',
    },
    {
      referencia:
        'Infoagro. (s.f.). El cultivo del aguacate (2ª parte). Consultado el 17 de julio de 2014.',
      link: 'http://www.infoagro.com/frutas/frutas_tropicales/aguacate2.htm',
    },
    {
      referencia:
        'Programa nacional de frutas en el Salvador. (s.f.). Guía técnica del cultivo de aguacate. Salvador: Instituto Interamericano de Cooperación para la Agricultura.',
      link: '',
    },
    {
      referencia:
        'Tamayo, P. (1994). Integración de métodos de control de las enfermedades de las plantas: guía ilustrada. Rionegro, Antioquia: Corpoica.',
      link: '',
    },
    {
      referencia:
        'Tamayo, P. (2005). Reconocimiento de enfermedades del aguacate en Colombia. Medellín, Colombia: Facultad Nacional de Agronomía.',
      link: '',
    },
    {
      referencia:
        'Whiley, A., Schaffer, B. y Wolstenholme, B. (2007). El Palto: botánica, producción y usos. Valparaíso, Chile: Ediciones Universitarias de Valparaíso.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
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
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
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
