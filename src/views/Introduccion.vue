<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-3
      
      .col-md-12.col-lg-8.mb-3
        p Bienvenidos al programa, la producción de aguacate requiere un enfoque integral que abarca desde la siembra y el manejo del cultivo hasta la cosecha y la poscosecha. La siembra y el manejo adecuados son fundamentales para garantizar un crecimiento saludable y productivo del árbol, considerando factores como la elección de variedades, el control de plagas y el manejo del riego. Una vez alcanzada la madurez, la cosecha se convierte en un proceso crítico, donde se deben aplicar técnicas precisas para minimizar daños al fruto. Posteriormente, las prácticas de poscosecha son esenciales para conservar la calidad y frescura del aguacate, asegurando su óptima presentación en el mercado.
      .col-md-8.col-lg-4.mb-3
        figure
          img(src="@/assets/curso/introduccion/img_1.png", alt="alt").mx-auto

      h4 Estos dos aspectos son vitales para el éxito en la producción y comercialización de este valioso fruto:
      
      .video.mb-5
        //- <iframe width="560" height="315" src="https://www.youtube.com/embed/6AGqGgSEQ2g?si=ErpkvXxiI8TMyktw" title="Ecología y conducción de grupos turísticos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
            
  
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
