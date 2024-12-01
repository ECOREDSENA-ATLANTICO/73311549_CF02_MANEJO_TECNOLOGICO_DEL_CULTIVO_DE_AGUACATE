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
      descarga: '/downloads/F01-9029.pdf',
    },
    {
      tema: 'Cosecha, manejo de poscosecha y agroindustria',
      referencia: 'Agrosavia',
      tipo: 'PDF',
      descarga: '/downloads/162-Manuscrito de capítulo-1129-1-10-20201215.pdf',
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
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Julio Hernán Beltrán Peñuela',
          cargo: 'Experta temático',
          centro: 'Centro de Comercio y Servicios - Regional Caldas',
        },
        {
          nombre: 'Mónica Patricia Osorio Martínez',
          cargo: 'Asesora pedagógica',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Fabian Cuartas Donado',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Hernando Junior Strusberg Perez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Liborio De Jesús Castañeda Valencia',
          cargo: 'Desarrollador <em>full stack junior</em>',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        // {
        //   nombre: 'Nombre',
        //   cargo: 'Actividad Didáctica',
        //   centro:
        //     'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        // },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
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
