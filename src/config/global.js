export default {
  global: {
    componenteFormativo: 'Confección de prendas de vestir',
    descripcionCurso:
      'La formación técnica en confección de ropa es crucial para el aprendiz, enfocándose en la trazabilidad de herramientas, maquinarias e insumos, y en cómo se utilizan en procesos operacionales. Es vital abordar la confección en líneas masculinas y femeninas, integrando la interpretación de patrones para la creación de productos industriales y a medida, incluyendo la supervisión de acabados con criterios técnicos de calidad.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',

        numero: '1',
        titulo: 'Maquinaria, herramientas e insumos para la confección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Normas generales de seguridad para la labor en la confección de prendas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Condiciones y espacios en el trabajo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Maquinaria, herramientas e insumos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',

        numero: '2',
        titulo: 'Confección de prendas femeninas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Orden operacional de la falda',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Confección de complementos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Confección de prendas masculinas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',

        numero: '4',
        titulo: 'Revisión y procesos de calidad en una prenda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Control de calidad en industrial textil y confección',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Cultura de calidad',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Puntos de control en producto terminado',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Control de Calidad en terminados',
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
        download: 'downloads/material.pdf',
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
  referencias: [
    {
      referencia:
        'Pellegrino, A. (2010) Detalles constructivos - delantero y espalda exterior. [Infografía].',
      link:
        'https://ayelenpellegrino.files.wordpress.com/2010/12/entrega-sastreria_pc3a1gina_18.jpg',
    },
    {
      referencia: 'Pellegrino, A. (2010) Bolsillo sastre. [Infografía].',
      link:
        'https://ayelenpellegrino.files.wordpress.com/2010/12/entrega-sastreria_pc3a1gina_23.jpg',
    },
    {
      referencia: 'Pellegrino, A. (2010) Bajo cuello. [Infografía].',
      link:
        'https://ayelenpellegrino.files.wordpress.com/2010/12/entrega-sastreria_pc3a1gina_21.jpg',
    },
    {
      referencia:
        'Huaman, W. (2003). Ingeniería en la capacitación de operarios para la industria de la confección textil [Tesis de pregrado, Universidad Nacional Mayor de San Marcos, Lima]. Repositorio institucional UNMSM.',
      link:
        'https://sisbib.unmsm.edu.pe/bibvirtualdata/Tesis/Ingenie/huaman_ow/T_completo.PDF',
    },
    {
      referencia:
        'Knight, L.  (2012).  Secretos de la buena modista. Océano Ámbar.',
    },

    {
      referencia:
        'SENA. (2020). Programa en mantenimiento de máquinas. Centro de manufactura en textil y cuero.',
    },

    {
      referencia:
        'SENA (2020). Programa Técnico en Patronaje Industrial de Prendas de Vestir. Centro de Manufactura en Textil y Cuero.',
    },
    {
      referencia:
        'SENA. (2020). Puesta a punto de máquina fileteadora con puntada de seguridad. [Video]. Youtube.',
      link:
        'https://www.youtube.com/playlist?list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C',
    },
    {
      referencia:
        'SENA. (2021). Operaciones básicas para el manejo de maquina fileteadora. [Video]. Youtube.',
      link:
        'https://www.youtube.com/playlist?list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C',
    },
    {
      referencia:
        'SENA. (2021). Operaciones básicas para el manejo en máquina plana una aguja Paso 7 Coser pechera sencilla. [Video]. Youtube.',
      link: 'https://www.youtube.com/watch?v=V8PrD9bgvb8',
    },
    {
      referencia:
        'SENA. (2021). Operaciones básicas para el manejo en máquina plana una aguja Paso 6 Bolsillo de ribete doble. [Video]. Youtube.',
      link: 'https://www.youtube.com/watch?v=4kT8atODsIQ',
    },
    {
      referencia:
        'SENA. (2021). Operaciones básicas para el manejo en máquina plana una aguja Paso 5 Bolsillo de ribete sencillo. [Video]. Youtube.',
      link: 'https://www.youtube.com/watch?v=wULIEdIahzE',
    },
    {
      referencia:
        'SENA. (2021). Operaciones básicas para el manejo en máquina plana una aguja Paso 4 Pegar bolsillos. ',
      link: 'https://www.youtube.com/watch?v=fUW6xKvpzs0',
    },
    {
      referencia:
        'SENA. (2021). Operaciones básicas para el manejo en máquina plana una aguja Paso 3 Costuras a alforzas de 1 16”. [Video]. Youtube.',
      link: 'https://www.youtube.com/watch?v=Sv7X27S7MSE',
    },
    {
      referencia:
        'SENA. (2021). Operaciones básicas para el manejo en máquina plana una aguja Paso 2 Costuras a alforzas de ¼”. [Video]. Youtube.:',
      link: 'https://www.youtube.com/watch?v=5vxh3RXCw8c',
    },
    {
      referencia:
        'SENA. (2021). Operaciones básicas para el manejo en máquina plana una aguja Paso 1 Costuras rectas a ¼ pulgada. [Video]. Youtube.',
      link: 'https://www.youtube.com/watch?v=m6Bda8bTNxk',
    },
    {
      referencia:
        'SENA. (2021). Puesta a punto máquina plana de una aguja. [Video]. Youtube.',
      link:
        'https://www.youtube.com/playlist?list=PLkc5n6npRWkhq9z8eUd2qXfN43M08IM-3',
    },
  ],
  glosario: [
    {
      termino: 'Hilvanar',
      significado:
        'Cosido manual empleado en diversas técnicas de tejido de acuerdo al proceso empleado en confección de prendas.',
    },
    {
      termino: 'Alfileres',
      significado:
        'Elementos utilizados para sostener prendas en el proceso de elaboración de prendas.',
    },
    {
      termino: 'Goma o caucho',
      significado:
        'Elemento elástico utilizado para la elaboración de cinturillas o en partes que impliquen el recogido para que sea adaptable al cuerpo.',
    },
    {
      termino: 'Crin',
      significado:
        'Insumo para la confección de prendas y accesorios, en algunos casos ayudan a dar soporte a las prendas, esto siempre dependerá de su uso.',
    },
    {
      termino: 'Pedal',
      significado:
        'Elemento que forma parte de las máquinas de coser prendas, su función es permitir el funcionamiento de la máquina con la ayuda del motor.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'Disciplina que estudia las interacciones del ser humano con su entorno, reúne información que permitan medir desempeño y optimización, buscando el bienestar de las personas.',
    },
  ],
  complementario: [
    {
      tema: '1. Maquinaria, herramientas e insumos para la confección',
      referencia: 'SENA.  (2020). Puesta a punto máquina recubridora.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=YF8CMBsceyg&list=PLkc5n6npRWkgXccn8uyniZH0pbZiYdvsw',
    },

    {
      tema: '1. Maquinaria, herramientas e insumos para la confección',
      referencia: 'SENA.  (2020).  Inspección de insumos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HoLZv-WxqyU&t=138s',
    },

    {
      tema: '1. Maquinaria, herramientas e insumos para la confección',
      referencia:
        'SENA.  (2020).  Inspección producto en proceso área de patronaje y corte.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EUH9LPWhh3k&t=95s',
    },

    {
      tema: '1. Maquinaria, herramientas e insumos para la confección',

      referencia: 'SENA.  (2020).  Inspección producto en proceso.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xlPFRjssa2Q&t=3s',
    },

    {
      tema: '2. Confección de prendas femeninas',
      referencia: 'SENA.  (2020).  Inspección producto terminado.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=I8adPpXG-n8&t=27s',
    },

    {
      tema: '2. Confección de prendas femeninas',
      referencia: 'SENA.  (2020).  Inspección de textiles.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2IjwoiNJCDw&t=61s',
    },

    {
      tema: '3. Confección de prendas masculinas',
      referencia:
        'LaCostura diy. (2020). Confección de camisa Slim Fit para hombre.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=xD1u53N8sWQ&ab_channel=LaCosturadiy',
    },

    {
      tema: '3. Confección de prendas masculinas',
      referencia:
        'Informativos.net. (2012). Cómo se confecciona una camisa artesanalmente.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=g7nLMKAMVVQ',
    },

    {
      tema: '3. Confección de prendas masculinas',
      referencia:
        'SENA.  (2020).  Montaje de cremallera, aletilla y aletillón.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=4pMSfzpnmYg&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },

    {
      tema: '4. Revisión y procesos de calidad en una prenda',
      referencia: 'Knight, L.  (2012).  Secretos de la buena modista. Océano.',
      tipo: 'PDF',
      descarga: '/downloads/CF7_Anexo_1_Secretos_Buena_Modista.pdf',
    },

    {
      tema: '4. Revisión y procesos de calidad en una prenda',
      referencia:
        'Mora, L. (2011). Elaboración de camisa para niño, joven y adulto. Primera etapa.',
      tipo: 'PDF',
      descarga: '/downloads/CF7_Anexo2_Proceso_Confeccion_Camisa_Masculino.pdf',
    },

    {
      tema: '4. Revisión y procesos de calidad en una prenda',
      referencia: 'SENA, (2021). Maquinaria, herramienta e insumos.',
      tipo: 'PDF',
      descarga: '/downloads/maquinaria_herramientas_insumos_vf_compressed.pdf',
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
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Leidy Johana Velásquez Hernández',
          cargo: 'Experta temática',
          centro: 'Diseño, Confección y Moda - Regional Antioquía',
        },
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Diseño, Confección y Moda - Regional Antioquía',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz ',
          cargo: 'Diseñadora instruccional ',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Paola Morales Paez',
          cargo: 'Evaluadora Instruccional ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñadora web',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora Full-Stack',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
}
