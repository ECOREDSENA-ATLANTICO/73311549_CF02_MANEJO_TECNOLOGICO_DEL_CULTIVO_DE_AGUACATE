<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El manejo del cultivo de aguacate incluye prácticas esenciales para asegurar el crecimiento saludable del árbol, como la selección de variedades adecuadas, el control de plagas y enfermedades, y el manejo del riego y la nutrición. Durante la cosecha, es crucial identificar el momento óptimo para recoger los frutos, garantizando su calidad y evitando daños. Las técnicas de poscosecha son igualmente importantes, ya que aseguran la conservación del aguacate y su presentación en el mercado. Esto implica el uso de métodos de almacenamiento adecuados y el manejo de la maduración para prolongar la vida útil del fruto. Un enfoque integral en estas etapas maximiza la producción y rentabilidad del cultivo de aguacate.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
