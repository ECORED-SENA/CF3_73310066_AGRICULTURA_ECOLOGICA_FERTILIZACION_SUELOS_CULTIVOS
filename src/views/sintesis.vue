<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-down") A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.  

    .row.justify-content-center.pt-4(style="background-color:#FDFBF6;")
      .col-lg-10.mb-5
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama de fertilización agroecológica que destaca la importancia de cubrir las necesidades nutricionales de los cultivos a través de prácticas sostenibles y respetuosas con el medio ambiente. Se presentan conceptos básicos, prácticas agroecológicas y sus beneficios.")
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
