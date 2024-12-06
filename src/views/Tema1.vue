<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La siembra y el manejo del cultivo de aguacate
      
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12.mb-2
        .bloque-texto-g.bloque-texto-g.bg-03.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 la siembra y manejo del cultivo de aguacate se tienen en cuenta diferentes procesos, los cuales involucran una serie de actividades que se deben seguir en forma secuencial para garantizar una buena producción, productividad y calidad de la fruta. <br>La trazabilidad del sistema de producción inicia desde la selección del lote y termina en la poscosecha de la fruta; en cada fase se deben ver reflejados los parámetros técnicos y tecnológicos, pues de la medición y evaluación de ellos dependen los ajustes para la mejora del sistema y la vida útil del cultivo.

    Separador
    
    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Selección del terreno
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

      .col-lg-12.mb-2
        p La Selección del terreno es el primer paso en el establecimiento del cultivo, de este depende en buena medida el comportamiento productivo del sistema; pues la planta de aguacate es una especie perenne que dura más de veinte años en producción. Por ello, se debe tener en cuenta aspectos como: zona de vida, ubicación, pendiente, tipo de suelo, entre otros.

      
      .col-lg-10.mb-2
        .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
          .div.mb-3(data-aos="fade-right")
            h3.bgr_4.position-relative Zona de vida
              img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')
        p Es de vital importancia seleccionar la especie de aguacate que se adapte a la zona de vida escogida, pues cada raza y variedad requiere de una específica, como se vio en la actividad de aprendizaje 1.

            
      .col-lg-10.mb-2
        .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
          .div.mb-3(data-aos="fade-right")
            h3.bgr_4.position-relative Para ubicar la zona de vida se tiene en cuenta
              img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')
        p La temperatura, la humedad, la altura sobre el nivel del mar, la precipitación y el viento; parámetros que intervienen directamente sobre el crecimiento, desarrollo, producción y productividad de la especie.

      .col-lg-10.mb-2
        .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
          .div.mb-3(data-aos="fade-right")
            h3.bgr_4.position-relative Ubicación
              img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')

        .row.justify-content-center.align-items-center.mb-2
          .col-md-12.col-lg-8.mb-2
            figure
              img(src="@/assets/curso/temas/tema1/img_2.png", alt="alt").mx-auto
          .col-md-12.col-lg-4.mb-2
            p El terreno seleccionado para el cultivo debe contar con buena protección natural (barreras contra viento) o establecerla con un año de anterioridad a la siembra definitiva del cultivo; con esto se evita la caída de estructuras florales, la baja polinización y la caída de los frutos.

      .col-lg-10.mb-2
        .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
          .div.mb-3(data-aos="fade-right")
            h3.bgr_4.position-relative Topografía
              img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')

        .row.justify-content-center.align-items-center.mb-2
          .col-md-12.col-lg-7.mb-2
            p.mb-2 La topografía más apropiada para el establecimiento del cultivo debe ser ondulada y en terrenos ligeramente inclinados con pendientes inferiores al 30%. Plantaciones establecidas a pendientes superiores dificultan la realización de prácticas de manejo agronómico.
            p Cuando se siembra en terrenos planos (pendientes inferiores al 3%), se recomienda nivelarlo para evitar encharcamientos. Mientras que al momento de cultivar en pendientes mayores a 40%, la plantación debe hacerse siguiendo las curvas a nivel y se debe proteger el suelo de la erosión mediante cultivos de cobertura.
          .col-md-8.col-lg-5.mb-2
            figure
              img(src="@/assets/curso/temas/tema1/img_3.png", alt="alt").mx-auto
    
      .col-lg-10.mb-3
        h4 Suelos: debe tenerse en cuenta los siguientes parámetros:

      .col-lg-10.mb-3
        .tarjeta.fondo_1_2.p-4.slyder_1.bg-01
          SlyderA(tipo="b").tarjeta--blanca
            .tarjeta.bg-01.p-3
              .row.justify-content-center.align-items-center.my-lg-4.p-1
                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Textura:
                  p Esta especie se adapta a diferentes tipos de suelo, desde los arenoso y suelto hasta franco limoso y compacto (las arcillas no pueden superar el 28%, pues se puede ver afectado el desarrollo radicular del árbol o problemas de pudrición y enfermedades fungosas). Sin embargo, los mejores rendimientos se obtienen en suelos permeables y bien drenados, de textura franca y estructura o consistencia media con alto contenido de materia orgánica. 
                
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img_5.png', alt='Texto que describa la imagen').mx-auto
                
            .tarjeta.bg-01.p-2
              .row.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Estructura:
                  p Son preferibles los suelos con gran porcentaje de macroporos, determinados por el contenido de materia orgánica y en los cuales se permite la fluidez al movimiento del agua y del oxígeno que debe estar presente en la zona radical en una concentración suficiente para que se realicen los procesos de absorción de agua y nutrientes, así como la respiración y el desarrollo de nuevas raíces. 
                
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img_6.png', alt='Texto que describa la imagen').mx-auto
                
            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-12.col-xl-5.mb-4
                  h3.mb-2 Profundidad efectiva:
                  p Determina el desarrollo y la profundidad de las raíces, se recomienda sembrar en suelos cuya profundidad efectiva supere los 50 cm. Además, se debe evitar capas de roca o arcillas endurecidas. 
                
                .col-md-8.col-xl-7.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img_7.png', alt='Texto que describa la imagen').mx-auto
                
            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-12.col-xl-6.mb-4
                  h3.mb-2 Drenaje:
                  p No se debe sembrar plantaciones de aguacate en terrenos con problemas de drenaje, tanto externo como interno, donde se pueda presentar la muerte de raíces y/o la aparición de enfermedades fungosas. El nivel freático debe ser superior a un metro de profundidad. 

                .col-md-8.col-xl-6.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img_8.png', alt='Texto que describa la imagen').mx-auto
                
            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-12.col-xl-7.mb-4
                  h3.mb-2 pH:
                  p Este puede afectar la disponibilidad y absorción de los nutrientes para la planta. El sistema radical absorbe los nutrientes que se encuentran disueltos en el agua del suelo. Valores extremos de pH, ya sea por acidez o alcalinidad, pueden provocar la precipitación de ciertos elementos nutritivos químicos, los cuales permanecen en forma no disponible para ser absorbidos por las raíces. 
                
                .col-md-8.col-xl-5.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img_9.png', alt='Texto que describa la imagen').mx-auto

            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-12.col-xl-8.mb-4
                  h3.mb-2 Fertilidad:
                  p es la capacidad de un suelo para suministrar todos y cada uno de los nutrientes que necesitan las plantas en el momento, cantidad y forma adecuados; para profundizar consultar documento denominado Diagnóstico visual de trastornos nutrimentales que se encuentra en el botón Materiales del programa / Materiales de apoyo / Documentos complementarios / Documentos complementarios: Actividad de aprendizaje.
                
                .col-md-8.col-xl-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img_10.png', alt='Texto que describa la imagen').mx-auto

      .col-lg-10.mb-0
        p.mb-2 Antes de la siembra es recomendable contar con un análisis de suelo, pues es la base para que los asistentes técnicos den sus respectivas recomendaciones en cuanto a nutrientes se refiere.
        p Además de los parámetros anteriormente mencionados, el lote para la siembra debe contar con una adecuada disponibilidad de agua (cantidad y calidad) durante todo el año, para la aplicación de los fertilizantes foliares y edáficos. Las etapas de fecundación de la flor y llenado de fruto son muy susceptibles al estrés por sequía.


    Separador

    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Trazado del lote
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')
      
      .col-lg-12.mb-4
        p.mb-3 Esta labor se realiza entre los 45 y 60 días antes de la siembra y permite señalar los puntos donde las plantas van a quedar establecidas. El sitio depende de la topografía del terreno y la dirección del recorrido del sol para evitar en lo posible el sombrea miento entre árboles.
        h4 Se pueden utilizar diferentes métodos de trazado:
      
      .col-lg-10.mb-2
        .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
          .div.mb-3(data-aos="fade-right")
            h3.bgr_4.position-relative Curvas a nivel:
              img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')
        
        .col-lg-12.mb-2
          figure
            img(src="@/assets/curso/temas/tema1/img_11.png", alt="alt")
        .col-lg-12.mb-2
          p Este método se usa cuando las siembras se realizan en terrenos de altas pendientes (superiores al 40%).

      .col-lg-10.mb-2
        .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
          .div.mb-3(data-aos="fade-right")
            h3.bgr_4.position-relative Triángulo o tres bolillos:
              img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')
        
        .col-lg-12.mb-2
          figure
            img(src="@/assets/curso/temas/tema1/img_12.png", alt="alt")
        .col-lg-12.mb-2
          p Este se usa cuando la siembra se realiza en terrenos con pendientes suaves o semi-pendientes (3% a 30%). Consiste en formar triángulos equiláteros en el terreno, por este sistema se siembran un 15% más de árboles por unidad de área.

      .col-lg-10.mb-2
        .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
          .div.mb-3(data-aos="fade-right")
            h3.bgr_4.position-relative Cuadrado: 
              img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')
        
        .col-lg-12.mb-2
          figure
            img(src="@/assets/curso/temas/tema1/img_13.png", alt="alt")
        .col-lg-12.mb-2
          p Consiste en colocar los árboles en los vértices de un cuadro, es decir, guardando la misma distancia entre los árboles por los cuatro lados del cuadrado.

      .col-lg-10.mb-2
        h4 Distancia de siembra: 
      
      .col-lg-10.mb-4
        p.mb-4 Para la siembra de este cultivo se pueden utilizar diferentes distancias de siembra, lo más recomendable es evitar altas densidades, pues, aunque en estas se obtiene un mayor número de plantas en el terreno y un aumento significativo en la producción, se pueden presentar mayores problemas fitosanitarios (presencia de plagas y enfermedades) por aumento en la humedad relativa y la temperatura, afectando considerablemente la productividad de las plantas. También es importante tener en cuenta aspectos como la variedad a sembrarse y las condiciones del terreno.
        p.mb-2 A continuación, se relacionan las distancias de siembra más recomendadas:


      .col-lg-10.mb-2
        .titulo-sexto.bg-11.mb-4
            h5 Tabla 1. 
            span.text-dark Distancia de la siembra
        
        .tabla-b.mb-5 
          table
            caption Nota: Sena (2012).
            thead
              tr
                th Distancia entre plantas (m)
                th Distancia entre surcos (m)
                th Número de plantas en cuadrado
                th Número de plantas en triángulo
            tbody
              tr
                td 5
                td 5
                td 400
                td 465
              tr
                td 6
                td 6
                td 221
                td 277
              tr
                td 7
                td 7
                td 204
                td 236
              tr
                td 8
                td 8
                td 156
                td 180
              tr
                td 9
                td 9
                td 123
                td 142
              tr
                td 10
                td 10
                td 100
                td 115
              tr
                td 11
                td 11
                td 82
                td 95
              tr
                td 12
                td 12
                td 69
                td 80

      .col-lg-10.mb-2
        .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
          .div.mb-3(data-aos="fade-right")
            h3.bgr_4.position-relative Ahoyado: 
              img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')

        .col-lg-12.mb-2
          p.mb-2 Esta labor consiste en hacer huecos u hoyos previamente demarcados, se deben realizar con uno (1) o dos (2) meses antes de la siembra. El tamaño mínimo recomendado del hoyo es de 40 cm de diámetro x 40 cm de ancho x 50 cm de profundidad. Estos deben ser llenados con una mezcla de suelo (del mismo hoyo) más 2 a 5 kg de materia orgánica, fertilizante a base de fósforo que permita una buena formación de raíces y un correctivo de pH como cal agrícola; la aplicación de este último es lo que se conoce como enmienda o encalado que tiene como fin aumentar el pH del suelo y así incrementar la disponibilidad de los elementos nutritivos que necesita la planta para su crecimiento y desarrollo.
          p Antes de aplicar la fuente de calcio (cal dolomítica, yeso, cal agrícola, entre otras) se debe tener en cuenta los resultados del análisis de suelo y aplicar la dosis de la enmienda según el grado de acidez del suelo y las recomendaciones del asistente técnico.


      .col-lg-10.mb-4
        .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
          .div.mb-3(data-aos="fade-right")
            h3.bgr_4.position-relative Siembra o trasplante: 
              img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')

        .col-lg-12.mb-2
          p.mb-2 La siembra se debe implementar con la técnica adecuada, pues esta labor influirá en los rendimientos y la productividad final de la planta. Se debe realizar de una (1) a dos (2) semanas antes del periodo de lluvias, las plántulas para el trasplante deben estar entre 60 y 120 cm de altura. Las plántulas cuya raíz haya superado la longitud de la bolsa (salido de la bolsa) se les pueden podar las raíces.
          p El procedimiento para la siembra es el siguiente: cortar la bolsa por la parte inferior, ubicarla en el centro del hoyo y retirar la bolsa por la parte superior de la planta, pues de lo contrario podría atrofiarse la raíz en su crecimiento y desarrollo. Luego se termina de llenar el hueco con suelo suficiente para evitar cámaras de aire y en lo posible se debe aplicar una cobertura vegetal seca.


      .col-lg-10.mb-2
        .titulo-sexto.bg-11.mb-4
          h5 Figura 1. 
          span.text-dark Proceso de siembra para aguacate:

        figure
          img.mb-3(src='@/assets/curso/temas/tema1/img_14.png', alt='Proceso de siembra para aguacate.').mx-auto
          figcaption Nota: Sena (2012)

      .col-lg-10.mb-2
        p El árbol debe quedar con un montículo de 10 cm por encima del nivel del suelo para evitar encharcamientos y posibles pudriciones (se pueden realizar posteriores resiembras en caso de la muerte de algunas plántulas).

      .col-lg-10.mb-2
        .h3 Diagrama de plántula en campo después de la siembra.

      .col-lg-12.mb-2
        figure
          img(src='@/assets/curso/temas/tema1/img_15.png', alt='Diagrama de plántula en campo luego de la siembra.').mx-auto


    
    Separador

    .row.justify-content-center.align-items-center.mb-1
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Labores culturales
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

      .col-lg-12.mb-4
        p.mb-3 Esta labor se realiza entre los 45 y 60 días antes de la siembra y permite señalar los puntos donde las plantas van a quedar establecidas. El sitio depende de la topografía del terreno y la dirección del recorrido del sol para evitar en lo posible el sombrea miento entre árboles.
        p.text-bold Se pueden utilizar diferentes métodos de trazado:

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-10      
        .div.mb-3(data-aos="fade-right")
          h3.bgr_4.position-relative Manejo de tutores: 
            img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-8
            p El manejo de tutores en aguacate es indispensable para lograr un árbol recto y bien distribuido, que permita darle un fácil manejo a la hora de realizar las podas de formación. Esta labor se hace clavando una estaca delgada a 10 cm por fuera de la zona de gotera del árbol, atando el tronco con tiras de tela, buscando una adecuada dirección de la planta, procurando que el tronco principal quede lo más recto posible para darle una adecuada conformación al árbol.
          .col-md-6.col-lg-4
            figure
              img(src="@/assets/curso/temas/tema1/img_23.png", alt="alt").img400.m-auto
    
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-10      
        .div.mb-3(data-aos="fade-right")
          h3.bgr_4.position-relative Plateo: 
            img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')

        .row.justify-content-center.align-items-center.ordenar_tarjeta_lg
          .col-md-6.col-lg-4.pos_2
            figure
              img(src="@/assets/curso/temas/tema1/img_24.png", alt="alt").img400.m-auto
          .col-lg-8
            p El manejo de tutores en aguacate es indispensable para lograr un árbol recto y bien distribuido, que permita darle un fácil manejo a la hora de realizar las podas de formación. Esta labor se hace clavando una estaca delgada a 10 cm por fuera de la zona de gotera del árbol, atando el tronco con tiras de tela, buscando una adecuada dirección de la planta, procurando que el tronco principal quede lo más recto posible para darle una adecuada conformación al árbol.
          
    
    Separador

    .row.justify-content-center.align-items-center.mb-1
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Podas
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

      .col-lg-12.mb-4
        p En general en los trópicos la poda estimula el crecimiento vegetativo en detrimento de la floración, por lo que en la mayoría de las ocasiones se limita la poda a una limpieza de ramas secas, mal formadas o distribuidas. En la variedad Hass se tiene como técnica podar las ramas de la parte superior de la copa de los árboles, con el fin de equilibrar la producción y regular la alternancia de cosechas.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10      
        .div.mb-3(data-aos="fade-right")
          h3.bgr_4.position-relative Poda de formación: 
            img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')

        .row.justify-content-center.align-items-center.ordenar_tarjeta_lg
          .col-md-6.col-lg-4.mb-2.pos_2
            figure
              img(src="@/assets/curso/temas/tema1/img_25.png", alt="alt").img400.m-auto
          .col-lg-8.mb-2
            p.mb-3 Es indispensable y se realiza en los primeros años de desarrollo, consiste en cortar ramas con el propósito de dirigir el crecimiento y estimulando la brotación de nuevas ramas. El procedimiento consiste en dejar todas las ramas fuertes, preferiblemente las que se encuentren en un ángulo de 45 grados, dejando una en cada punto cardinal.
            p En el aguacate se recomienda dejar de tres (3) a cinco (5) ramas máximo bien distribuidas para permitir una buena entrada de luz en todo el árbol. El corte del tallo principal se hace al momento en que finaliza la selección de las ramas que se dejarán para orientar la producción. Es importante eliminar las ramas que tienen dirección al suelo.

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-10      
        .div.mb-3(data-aos="fade-right")
          h3.bgr_4.position-relative Poda de mantenimiento:
            img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-8.mb-2
            p.mb-3 Es indispensable y se realiza en los primeros años de desarrollo, consiste en cortar ramas con el propósito de dirigir el crecimiento y estimulando la brotación de nuevas ramas. El procedimiento consiste en dejar todas las ramas fuertes, preferiblemente las que se encuentren en un ángulo de 45 grados, dejando una en cada punto cardinal.
            p En el aguacate se recomienda dejar de tres (3) a cinco (5) ramas máximo bien distribuidas para permitir una buena entrada de luz en todo el árbol. El corte del tallo principal se hace al momento en que finaliza la selección de las ramas que se dejarán para orientar la producción. Es importante eliminar las ramas que tienen dirección al suelo.

          .col-md-6.col-lg-4.mb-2
            figure
              img(src="@/assets/curso/temas/tema1/img_26.png", alt="alt").img400.m-auto
    


    Separador

    .row.justify-content-center.align-items-center.mb-1
      .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Fertilización
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')
      
      .col-lg-12.mb-4
        p.mb-3 La fertilización tiene como objetivo aumentar la cantidad de nutrientes disponibles en la solución del suelo. Debido a que el sistema radical del aguacate no es muy extenso y no presenta pelos radicales, es necesaria una buena cantidad de elementos nutritivos en la solución del suelo.

        p.mb-3 Es indispensable antes de recomendar cualquier elemento nutritivo, tener un análisis de suelo y foliar que dé recomendaciones técnicas acertadas en benéfico de la productividad de la plantación y calidad del fruto.

        p.text-bold A continuación, se presenta la función de los principales elementos minerales sobre el crecimiento y desarrollo de la planta de aguacate:


      .col-lg-10.mb-2
        .bg--img_03
          .row.justify-content-center.align-items-center.mb-2
            .col-md-6.col-lg-4.mb-3
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/tema1/img_16.png", alt="alt").img400.m-auto
            .col-lg-8.mb-3
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                .row(titulo="El nitrógeno (N):")
                  .col-12
                    p.mb-0 Es crucial para las funciones de las plantas, especialmente en la síntesis de proteínas que promueven el crecimiento. Su aplicación afecta la producción de hojas, el diámetro del tronco y el tamaño de los frutos, además de ser un componente de la clorofila, responsable del color verde y la fotosíntesis. Sin embargo, un exceso de nitrógeno puede causar un aumento desproporcionado de hojas, retrasar la formación de frutos, debilitar el sistema radicular y reducir la firmeza y contenido de aceite de los frutos, haciendo que los tejidos sean más susceptibles a plagas. Por otro lado, la deficiencia de nitrógeno resulta en frutos pequeños con epidermis verde claro y hojas cloróticas.

                .row(titulo="Fósforo (P):")
                  .col-12
                    p.mb-0 El P es requerido en cantidades menores, frente a las dosis de nitrógeno (N) y potasio (K). Este elemento es indispensable en puntos de crecimiento activo de la planta puesto que estimula el desarrollo de raíces, formación de órganos de reproducción y hace parte del sistema de transporte de energía. El exceso puede acelerar la maduración y causar desbalances con otros elementos. La deficiencia genera la formación de frutos pequeños con epidermis verde claro. Es recomendable realizar aplicaciones de fósforo en la siembra y primeros meses de desarrollo de la plantación.


                .row(titulo="El potasio (K):")
                  .col-12
                    p.mb-0 Es esencial para el crecimiento saludable de las plantas, participando en la fotosíntesis y en la utilización de energía solar, lo que lo hace crucial en condiciones nubladas. Regula el contenido de agua en las hojas, siendo vital durante sequías, y facilita el transporte de azúcares a los frutos, afectando su tamaño y calidad. Además, mejora la tolerancia de las plantas a plagas y enfermedades, y les ayuda a resistir el estrés. Sin embargo, un exceso puede causar desórdenes fisiológicos, mientras que su deficiencia produce frutos pequeños y vulnerables a la deshidratación. El aguacate es especialmente sensible a la salinidad, por lo que se sugiere utilizar diversas fuentes de potasio en lugar de solo cloruro de potasio (KCl).

                .row(titulo="Calcio (Ca):")
                  .col-12
                    p.mb-0 Este elemento da estabilidad a la planta, formado estructuras rígidas de soporte, además de protección al ingreso de insectos plagas y enfermedades en el árbol. Es determinante en la estabilidad y calidad del fruto. El exceso puede generar desbalances y deficiencias de otros elementos como el magnesio (Mg) y el potasio (K). La deficiencia se observa en la detención del crecimiento, las hojas se enroscan y empiezan a secarse por las puntas y bordes, y se incrementa la susceptibilidad a pudriciones.

                .row(titulo="Magnesio (Mg):")
                  .col-12
                    p.mb-0 Hace parte principal de la molécula de clorofila, de allí su importancia en la fotosíntesis (proceso en el cual la planta produce azúcares para su crecimiento). Es fundamental en el proceso de floración y fructificación.

                .row(titulo="Elementos menores:")
                  .col-12
                    p.mb-0 Entre estos se encuentran el Hierro (Fe), Cobre (Cu), Manganeso (Mn), Molibdeno (Mo), Boro (B), Zinc (Zn) y Cloro (Cl). Son indispensables en el crecimiento y desarrollo de la planta, participando en procesos como la respiración, síntesis de clorofila, fotosíntesis, protección en condiciones de estrés, síntesis de hormonas, floración y transpiración.
      
      .col-lg-10.mb-2
        p Las concentraciones de nutrientes en las hojas sirven de referencia para ajustar los niveles de producción a través de los años.

      .col-lg-10.mb-2
        .titulo-sexto.bg-11.mb-4
            h5 Tabla 2. 
            span.text-dark Niveles nutricionales en las hojas del aguacate
        
        .tabla-b.mb-5 
          table.text-center
            caption Nota: Sena (2012).
            thead
              tr 
                th Nutriente
                th Deficiente
                th Adecuado
                th Excesivo
            tbody 
              tr 
                  th(colspan="4").text-center Micronutrientes (ppm)
              tr 
                  td Nitrógeno
                  td &lt; 1,60
                  td 1,60-2,0
                  td &gt; 2,00
              tr 
                  td Fósforo
                  td &lt; 0,05
                  td 0,08-0,25
                  td &gt; 0,30
              tr 
                  td Potasio
                  td &lt; 0,35
                  td 0,75-2,0
                  td &gt; 3,00
              tr 
                  td Calcio
                  td &lt; 0,50
                  td 1,00-3,0
                  td &gt; 4,00
              tr 
                  td Magnesio
                  td &lt; 0,15
                  td 0,25-0,80
                  td &gt; 1,00
              tr 
                  td Azufre
                  td &lt; 0,05
                  td 0,20-0,60
                  td &gt; 1,00

        .tabla-b.mb-5 
          table.text-center
            caption Fuente: (Bernal y Díaz, 2005)
            thead
              tr 
                th(colspan="4").text-center Macronutrientes (%)
            tbody 
              tr
                td Boro
                td &lt; 50
                td 50-100
                td &gt; 100
              tr
                  td Cobre
                  td &lt; 5
                  td 5-50
                  td &gt; 50
              tr
                  td Hierro
                  td &lt; 50
                  td 50-200
                  td -
              tr
                  td Manganeso
                  td &lt; 30
                  td 30-200
                  td &gt; 500
              tr
                  td Molibdeno
                  td &lt; 0,05
                  td 0,05-1,0
                  td -
              tr
                  td Zinc
                  td &lt; 30
                  td 30-150
                  td &gt; 300

      .col-lg-10.mb-2
        p La extracción de nutrientes en la fruta puede ser un buen parámetro para utilizarse para determinar la dosis de nutrientes a aplicar.

      .col-md-10.col-lg-6.mb-2
        .titulo-sexto.bg-11.mb-4
            h5 Tabla 3. 
            span.text-dark Extracción de nutrientes en fruta fresca de aguacate, de árboles en plena producción

        .tabla-b.mb-3 
          table.text-center
            caption Fuente: (Bernal y Díaz, 2005)
            thead
              tr
                th Nutriente
                th Kg / tonelada de fruta fresca
            tbody
              tr
                td Nitrógeno
                td 3,152
              tr
                td Fósforo
                td 0,736
              tr
                td Potasio
                td 3,530
              tr
                td Calcio
                td 0,547
              tr
                td Magnesio
                td 0,474
              tr
                td Azufre
                td 0,183
              tr
                th Nutriente
                th g / tonelada de fruto fresco
              tr
                td Boro
                td 3,7
              tr
                td Cobre
                td 3,0
              tr
                td Hierro
                td 7,4
              tr
                td Manganeso
                td 2,0
              tr
                td Molibdeno
                td 0,02
              tr
                td Zinc
                td 4,5

      .col-lg-10.mb-0
        p.mb-3 La fertilización en etapa de establecimiento debe incluir elementos como el fósforo para el desarrollo de raíces y nitrógeno para producción de ramas y hojas, en etapa de floración debe incluir elementos como: hierro, cobre, manganeso y boro, esenciales en formación de polen e inflorescencias. En etapa de producción o llenado de fruto, la fertilización debe incluir elementos como: potasio, calcio, zinc, molibdeno y boro, esenciales en la formación del fruto.

        p.mb-2 En general, la fertilización se recomienda que sea dirigida directamente al suelo (edáfica), principalmente los elementos mayores (N, P y K y las enmiendas como el calcio). Los elementos menores se pueden aplicar por la vía foliar.

        p Algunos investigadores han demostrado que todas las razas y variedades de aguacate tienen diferentes extracciones de elementos nutritivos, razón por la cual, no se puede estandarizar las dosis de nutrientes a aplicarse, es recomendable el análisis de suelo y foliar así como recurrir a un asistente técnico para que dé las recomendaciones adecuadas y de esta manera tener alta producción y productividad en la plantación de aguacate.


    Separador

    .row.justify-content-center.align-items-center.mb-3
      .row.align-items-center.justify-content-star.mb-2.ps-2(data-aos="zoom-in-down")
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Manejo Integrado de Plagas y Enfermedades (MIPE)
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

      .col-lg-12.mb-2
        .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
          .div.mb-3(data-aos="fade-right")
            h3.bgr_4.position-relative Plagas 
              img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')

        p Las plagas de follaje son insectos y ácaros que atacan las hojas de las plantas, causando daños como amarillamiento, deformaciones y pérdida de vitalidad. Comúnmente incluyen ácaros o arañitas y trips . Estas plagas se alimentan de savia, debilitando las plantas y, en algunos casos, transmitiendo enfermedades. Su control puede implicar el uso de insecticidas, trampas o métodos biológicos, como depredadores naturales, a continuación, plagas de follaje:

    .row.justify-content-center.align-items-center.mb-3.ordenar_tarjeta_lg
      .col-md-6.col-lg-4.col-xl-4.mb-2.pos_1
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img_17.png", alt="alt").img400.m-auto
      .col-lg-12.col-xl-8.mb-2
        SlyderF.custom.mb-5(columnas="col-lg-6 col-xl-6")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8.bg-04
                h4.p-1.text-white.text-center Cucarrón marceño o chiza (Phyllophaga obsoleta):
            p.text-center.mb-0 El cucarrón marceño, presente entre 2100 y 2550 msnm, aparece en marzo y abril. Sus larvas son blancas, mientras que los adultos son escarabajos cafés, de 2,1 cm. Se alimentan de hojas tiernas, causando daño durante la floración y fructificación, afectando la corteza de frutos pequeños y las raíces. Para controlar su población, se recomiendan trampas de luz y trampas de mechón con ACPM. También se sugiere aplicar Bacillus popilliae al suelo o un hongo específico para mitigar su impacto en las plantas.

          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8.bg-04
                h4.p-1.text-white.text-center Metarhizium anisopliae.
            p.text-center.mb-0 Taladrador del tronco y ramas (Copturomímus perseae): es un insecto pequeño de medio centímetro aproximadamente, color gris, con manchas ovaladas negras sobre las alas, su ciclo de vida va de 75 a 94 días

          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8.bg-04
                h4.p-1.text-white.text-center Las larvas y pupas
            p.text-center.mb-0 pasan todo su ciclo en el interior de ramas y tallos. Esta especie agujera el tronco y las ramas; las cuales se van secando hasta provocar la muerte del árbol. El ataque se manifiesta por la presencia de aserrín blanco fuera del orificio que producen en las ramas. Es la plaga que más daños causa en Colombia, considerada como la más importante del cultivo. Cuando la plaga se presenta, se debe manejar mediante la poda de las ramas afectadas, las cuales deben ser quemadas; después se debe aplicar en los cortes una pasta cicatrizante.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12.mb-2
        .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
          .div.mb-3(data-aos="fade-right")
            h3.bgr_4.position-relative Plagas del follaje 
              img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')

        p Las plagas de follaje son insectos y ácaros que atacan las hojas de las plantas, causando daños como amarillamiento, deformaciones y pérdida de vitalidad. Comúnmente incluyen ácaros o arañitas y trips . Estas plagas se alimentan de savia, debilitando las plantas y, en algunos casos, transmitiendo enfermedades. Su control puede implicar el uso de insecticidas, trampas o métodos biológicos, como depredadores naturales, a continuación, plagas de follaje:

      .col-md-5.col-lg-4.mb-3
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img_18.png", alt="alt").mx-auto
      .col-lg-8.mb-3
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Ácaros o arañitas, arañitas Tetranychus urticae, Tetranychus bimaculatus,Mononychellus planki, Oligonychus punicae y Oligonychus yothersi, Eriophyes sp:")
            .col-md-12.mb-4.mb-md-0
              p.text-small Los ácaros, insectos pequeños de menos de 1 cm, viven en colonias bajo las hojas y a lo largo de las nervaduras. Succionan la savia, causando manchas amarillentas y secado del follaje. En infestaciones severas, también afectan las yemas, que se deforman. Su incidencia es mayor en épocas secas y calurosas, y su población se regula por la lluvia y depredadores. Se recomienda el uso de acaricidas a base de azufre para manejar Oligonychus y Eriophyes.
          
          .row(numero="2" titulo="Trips (Heliothrips haemorrhoidalis y Selenothrips rubrocinctus):")
            .col-md-12.mb-4.mb-md-0
              p.text-small Los trips son insectos pequeños de 0.3 a 1.4 cm, con dos pares de alas largas, que pueden reproducirse sexual y asexualmente. Cada hembra pone alrededor de 60 huevos. Su desarrollo se ve afectado por humedades bajas, siendo más abundantes en épocas secas, cuando se hospedan en arvenses. Su ataque causa engrosamiento y agrietamiento en frutos y hojas, además de decoloración y caída de frutos pequeños. Se debe monitorear durante la floración y mantener las plantaciones libres de arvenses hospederas.

          .row(numero="3" titulo="Escamas articuladas (Selenaspidus articulatus y Pseudo Ischnaspis bowery):")
            .col-md-12.mb-4.mb-md-0
              p.text-small Son insectos planos, pequeños con cubierta de color y forma variable. Son plagas muy especializadas que chupan la savia de las plantas causando alteraciones en los tejidos vegetales, viven en colonias y atacan troncos, ramas, hojas y frutos. Su población se ve favorecida en época seca cuando disminuyen sus enemigos naturales.

          .row(numero="4" titulo="Escamas protegidas (Saissetia oleae y Chrysomphalus dictyospermi):")
            .col-md-12.mb-4.mb-md-0
              p.text-small Se conocen como escamas protegidas, debido a su consistencia dura. Son insectos pequeños, inmóviles y planos, cubiertos por un caparazón de cera, de diferentes formas y color, según la especie. En ataques fuertes pueden causar defoliación. Algunos de ellos secretan un líquido azucarado que atrae las hormigas y sobre el cual crece el hongo causante de la fumagina. Durante las épocas secas su población puede aumentar al verse disminuidos los enemigos naturales. Los primeros síntomas en las hojas son las manchas amarillentas en la superficie y los ataques muy fuertes pueden causar la defoliación de la planta. En los frutos causan manchas y a veces deformación. Ataca cultivos de aguacate que se encuentran descuidados, con mal manejo y abandonados

          .row(numero="5" titulo="Chinche Monalonion (Monalonion Dissimulatum):")
            .col-md-12.mb-4.mb-md-0
              p.text-small Son insectos alargados de 1,5 cm de longitud y de color oscuro. Atacan principalmente las partes tiernas de los árboles, los daños son similares a quemaduras de cigarrillo que se confunde con hongos, los frutos pequeños detienen su crecimiento y se secan. Temperaturas y humedades relativas altas son muy favorables. El control se realiza con insecticidas de contacto categoría III y IV, y con buenas prácticas de manejo.

          .row(numero="6" titulo="Gusano pega – pega o bicho candela (Platynota sp):")
            .col-md-12.mb-4.mb-md-0
              p.text-small La larva es de color verde claro y alcanza hasta 2 cm de longitud, raspa la superficie inferior de las hojas y producen una desecación. Pega las hojas entre sí y forma paquetes donde viven y completan su ciclo de desarrollo. Se presenta en mayor cantidad en períodos prolongados de sequía. El control se debe realizar de manera cultural, recogiendo los manojos de hojas y quemándolas; dada la forma como vive el insecto, el control químico no es eficaz.

      .col-lg-8.mb-3
        LineaTiempoD.color-primario
          .row(numero="7" titulo="Gusano canasta (Oiketicus kirbyi):")
            .col-md-12.mb-4.mb-md-0
              p.text-small el daño de este insecto se distingue por la defoliación severa de cogollos, la cual está acompañada por la presencia de canastas alargadas en forma de tabaco, elaboradas por las larvas con trozos de hojas y filamentos sedosos. Es un gran comedor de hojas y sus daños son bastante notorios. El control biológico para este insecto tiene muy buenos resultados con la bacteria Bacillus thuringiensis.
          
          .row(numero="8" titulo="Gusano comedor de hojas, Gusano barba de indio (Megalopyge orsíloco), Gusano pollo (Megalopyge lanata) y gusano perro del naranjo (Anchisiades papilio):")
            .col-md-12.mb-4.mb-md-0
              p.text-small el daño que pueden causar depende del número de individuos, todos son comedores de hoja. Tienen fácil control biológico con pájaros y avispas.

          .row(numero="9" titulo="Vaquitas del follaje (Compsus sp):")
            .col-md-12.mb-4.mb-md-0
              p.text-small Los adultos son insectos de color blanco perla que atacan cultivos en todas las zonas productoras. Su población aumenta sin podas, con alta densidad de siembra y durante la época de lluvias. Causan daños en hojas, flores y frutos, produciendo cortes irregulares en las hojas jóvenes. El manejo debe ser preventivo e incluir buenas prácticas, como podas, nutrición mineral y la aplicación de los hongos Beauveria bassiana y Metarhizium anisopliae al suelo o al follaje.

          .row(numero="10" titulo="Hormiga arriera (Atta spp):")
            .col-md-12.mb-4.mb-md-0
              p.text-small las hormigas arrieras hacen cortes del follaje provocando la defoliación total o parcial del árbol. El control más efectivo para este insecto es el método mecánico, que consiste en la ubicación y eliminación de la reina cuando el hormiguero tiene un solo conducto, o la destrucción de las colonias, mediante labores normales como aradas y rastrilladas. La colocación de una barrera física al paso de las hormigas a través del tallo también es un método que presenta resultados favorables.

          .row(numero="11" titulo="Perforador del fruto (Stenoma catenifer):")
            .col-md-12.mb-4.mb-md-0
              p.text-small Los adultos son polillas pequeñas con alas pardo amarillento que colocan sus huevos en frutos pequeños. Las larvas penetran la pulpa, formando galerías y dañando las semillas. Los frutos caen o pierden valor comercial tras el ataque. El control incluye buenas prácticas culturales, como fertilización, podas sanitarias y recolección de frutos afectados. Se recomienda aplicar insecticidas desde que el fruto cuaja, así como recoger, destruir y enterrar los frutos caídos para evitar infestaciones.

          .row(numero="12" titulo="Picudo del aguacate (Heilipus lauri y Heilipus pittieri):")
            .col-md-12.mb-4.mb-md-0
              p.text-small El cucarrón adulto es negro brillante con dos bandas amarillas y mide entre 5 y 15 mm. Perfora túneles en los frutos para depositar sus huevos; las larvas se alimentan de la semilla. Si el ataque ocurre en frutos pequeños, estos caen; en frutos maduros, pueden pudrirse por microorganismos. Además, el adulto se alimenta de brotes, hojas y frutos. Para el control, se recomienda recoger y enterrar los frutos caídos, aplicando insecticidas de baja toxicidad si es posible.

      .col-md-5.col-lg-4.mb-3
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img_19.png", alt="alt").mx-auto

    .row.justify-content-center.align-items-center.mb-1.ordenar_tarjeta_lg
      .col-lg-12.mb-2
        .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
          .div.mb-3(data-aos="fade-right")
            h3.bgr_4.position-relative Enfermedades 
              img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')

      .col-lg-12.mb-2
        h4 Pudrición de la raíz o marchitez del aguacate (Phytophthora cinnamomi):

      .col-md-12.col-lg-7.mb-2
        p La pudrición radical es la enfermedad más importante en las regiones productoras de aguacate de Colombia y el mundo, y se presenta en cualquier estado de desarrollo de la planta, provocando pérdidas hasta del 50% de los árboles en vivero y los dos primeros años de establecimiento del cultivo. En vivero se puede dar la muerte de la plántula incluso antes de que se produzca el prendimiento del injerto. Las plantas exhiben el escaso crecimiento, amarillamiento foliar y necrosis de la base del tallo del patrón. Los árboles se marchitan pierden hojas y se inicia una muerte ascendente del patrón y descendente de la copa. En el campo la enfermedad se presenta en focos en las zonas más húmedas, los árboles afectados detienen su crecimiento, las hojas son de tamaño reducido, pierden su color verde normal, generalmente no produce nuevos brotes vegetativos o son de menor vigor y tamaño. Se pueden generar floraciones excesivas y a destiempo.
      .col-md-8.col-lg-5.mb-2
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img_20.png", alt="alt").img400.mx-auto
      
      .col-md-8.col-lg-5.mb-2.pos_2
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img_21.png", alt="alt").img400.mx-auto
      .col-md-12.col-lg-7.mb-2
        p.mb-3 Al evolucionar la enfermedad el árbol muestra marchitez y pérdida del follaje, generalmente no produce nuevos brotes y hay muerte descendente de ramas. Las raíces presentan coloración oscura y son quebradizas. En casos muy avanzados el sistema radicular queda totalmente destruido. La producción de frutos disminuye tanto en cantidad como en tamaño, hasta desaparecer totalmente. (infoagro, s.f.)

        p La humedad del suelo es el factor ambiental fundamental que influye en el desarrollo de esta enfermedad, por lo tanto, se recomienda establecer las plantaciones en terrenos bien drenados o hacer drenajes artificiales con el fin de evitar encharcamientos. Es importante no sembrar cualquier clase de semilla, esta debe proceder de árboles sanos y de frutos que no hayan tenido contacto con el suelo y tratadas con agua caliente. El semillero debe hacerse en suelos libres de la enfermedad, por lo que se recomienda hacer una desinfección previa. En la plantación, se debe evitar herir las raíces y los tallos, por lo que se recomienda un manejo adecuado de las arvenses en el plato y preferiblemente a mano. 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.mb-2
        p Debe evitarse cultivos susceptibles a dicha enfermedad. Los árboles muertos o a punto de morir deben arrancarse y quemarse en el mismo lugar, para evitar movimiento de tierra de áreas infectadas a zonas libres de la enfermedad. Los árboles muertos o a punto de morir deben arrancarse y quemarse en el mismo lugar, para evitar movimiento de tierra de áreas infectadas a zonas libres de la enfermedad y desinfectar el sitio de donde se arrancó, a continuación, las diferentes enfermedades: 

      .col-lg-12.mb-5
        .tarjeta.fondo_1_2.p-4.slyder_1.bg-01
          SlyderA(tipo="b").tarjeta--blanca
            .tarjeta.bg-01.p-3
              .row.justify-content-center.align-items-center.my-lg-4.p-1
                .col-md-12.col-xl-10.mb-4
                  h3.mb-2 Marchitez (Verticillium sp):
                  p La marchitez por Verticillium es una enfermedad creciente que a menudo se confunde con la pudrición de raíces por P. cinnamomi. El hongo invade tallos y ramas, causando un crecimiento detenido y marchitez parcial o total, con hojas que se tornan marrones. Para controlarla, es fundamental ubicar los árboles en terrenos bien drenados y podar las ramas afectadas. Las medidas de manejo son similares a las de la pudrición radical, enfocándose en evitar el encharcamiento del suelo.
                
            .tarjeta.bg-01.p-2
              .row.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-12.col-xl-10.mb-4
                  h3.mb-2 Roña (Sphaceloma perseae):
                  p Esta enfermedad es común en todas las zonas productoras de Colombia, favorecida por abundantes precipitaciones y alta humedad. El hongo afecta hojas y frutos, y su ataque se agrava con la presencia de trips, que facilitan la entrada del patógeno. En los frutos aparecen lesiones pardo-cafés, mientras que en las hojas se observan manchas de tonalidad castaño claro, arrugando la lámina foliar. Para su control, se recomiendan podas de aclareo que mejoren la luminosidad y la aireación.
                
            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-12.col-xl-10.mb-4
                  h3.mb-2 Mancha angular o mancha negra (Cercospora purpurea):
                  p La enfermedad se agrava en condiciones de alta precipitación y baja nutrición, afectando principalmente las hojas medias y bajas del árbol, con lesiones marrón oscuro que pueden causar defoliación. En los frutos, provoca lesiones oscuras y resquebrajamiento de la corteza, conocidas como mancha angular, además de la mancha negra en poscosecha. Estas lesiones facilitan la entrada de organismos como Colletotrichum. Para su control, se recomiendan aspersiones racionales de fungicidas a base de cobre.
                
            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-12.col-xl-10.mb-4
                  h3.mb-2 Polvillo (Oidium sp):
                  p a enfermedad aparece en épocas de poca lluvia, iniciando con micelio blanco o grisáceo en hojas y racimos de flores tiernas. Las hojas afectadas se deforman y presentan manchas irregulares negro grisáceas. Para su control, se recomienda el uso de preparados a base de azufre, aplicándolos antes y después de la floración, cada 8 a 15 días, según la intensidad del ataque.

            .tarjeta.bg-01.p-2
              .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3
                .col-md-12.col-xl-10.mb-4
                  h3.mb-2 Mancha negra o antracnosis (Colletotrichum gloeosporioides):
                  p esta enfermedad ataca plantas en vivero produciendo muerte descendente y pudrición del injerto, en el campo afecta ramas produciendo muerte de cogollos. El hongo ocasiona pudrición de fruto en cosecha y poscosecha, deteriorando la calidad del fruto.             

      .col-lg-12.mb-2
        .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
          .div.mb-3(data-aos="fade-right")
            h3.bgr_4.position-relative Manejo de arvenses  
              img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')

      .col-md-12.col-lg-7.mb-2
        p.mb-3 Las arvenses en el cultivo del aguacate son de gran importancia económica durante todo el ciclo vegetativo, principalmente en las etapas de vivero y de establecimiento, donde se forma el sistema radical del futuro árbol.
        p En la etapa de formación, especialmente durante los dos primeros años del cultivo, las arvenses compiten por espacio, luz y agua, por lo que se recomienda mantener por lo menos la región debajo del árbol libre de competencia durante este tiempo. (Corpoica, 2008)

      .col-md-8.col-lg-5.mb-2
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img_22.png", alt="alt").img400.mx-auto
    
    .row.justify-content-center.align-items-center
      .col-lg-12.mb-2
        .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
          .div.mb-3(data-aos="fade-right")
            h3.bgr_4.position-relative Para esto se pueden usar coberturas muertas o Mulch:
              img.pst(src='@/assets/curso/temas/tema1/img_3_2.png', alt='')

      .col-lg-12.mb-2
        p.mb-3 Después de establecido el cultivo y cuando los árboles han desarrollado una gran copa se pueden manejar algunas arvenses dentro de la plantación. Cuando se realiza el control de arvenses debe evitarse el empleo de herramientas cortantes cerca del tallo de los árboles para no provocar heridas que pueden ser la entrada para el hongo causante de la marchitez del aguacate Phytophthora cinnamomi.

        p No es recomendable mantener el suelo descubierto (sin protección), ya que en estas condiciones se favorece la erosión, se recomienda tener especies vegetales de cobertura como las leguminosas entre los árboles, por su aporte de nitrógeno, también se pueden usar coberturas de gramíneas de fácil manejo y poco crecimiento.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
