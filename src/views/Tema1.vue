<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Conceptos básicos 
    
    p(data-aos="fade-up") El suelo es un sistema formado por una fracción sólida, una líquida y otra gaseosa. 

    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Figura 1.
        span Fracciones del suelo
      .cont_1_1.p-4.pt-lg-5.pb-lg-5
        .col-xl-10.m-auto 
          figure(data-aos="zoom-in-up")
            img.d-none.d-md-block(src="@/assets/curso/tema1/2.svg" alt="Figura  que presenta las fracciones del suelo: sólida, líquida y gaseosa. La fracción sólida incluye elementos minerales inertes y elementos orgánicos. La fracción líquida está representada por el agua, y la fracción gaseosa por el aire.")
            img.d-md-none(src="@/assets/curso/tema1/3.svg" alt="Figura  que presenta las fracciones del suelo: sólida, líquida y gaseosa. La fracción sólida incluye elementos minerales inertes y elementos orgánicos. La fracción líquida está representada por el agua, y la fracción gaseosa por el aire.")
    
    p.mt-4(data-aos="fade-right") El equilibrio de estas tres fracciones da como resultado la fertilidad del suelo, definida como la capacidad de sostener las plantas y brindar los nutrientes necesarios para su producción. Los beneficios de la materia orgánica son:  

    .row.justify-content-center.mt-4
      .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left" @mouseover="indicadorTarjetaFlip = false")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/4.png")
          .crd_hover_txt--body
            h5.mb-3 Mejora física del suelo
            p.mb-0 Incrementa la porosidad y mejora la estructura, aumentando la retención de agua.
      .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left" @mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/5.png")
          .crd_hover_txt--body
            h5.mb-3 Mejora química del suelo
            p.mb-0 Aporta nutrientes en formas disponibles para las plantas.
      .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left" @mouseover="indicadorTarjetaFlip = false")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/6.png")
          .crd_hover_txt--body
            h5.mb-3 Mejora biológica del suelo
            p.mb-0 Adiciona y favorece microorganismos del suelo.
    
    .row.mt-5
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure 
          img(src="@/assets/curso/tema1/10.svg")
      .col(data-aos="fade-up" style="place-self:center;")
        p.mb-0 El suelo se presenta organizado en capas llamadas horizontes. El conjunto de horizontes se denomina perfil del suelo. Estos horizontes se diferencian por su color, tamaño de partículas, contenido de rocas, materia orgánica y estructura. 
    
    TabsC.color-acento-contenido.mt-4
      .py-3.py-md-4(titulo="Horizonte A")
        .row.col-xl-11.m-auto
          .col-md-6.col-lg-auto.mb-4.mb-md-0(style="place-self:center;")
            figure.m-auto.col-7.col-md-12
              img(src='@/assets/curso/tema1/7.png')
          .col-md-6.col-lg(style="place-self:center;")
            h4 Horizonte A
            p Capa más superficial, color más oscuro, contiene raíces, alta actividad biológica, capa arable. 
      .py-3.py-md-4(titulo="Horizonte B")
        .row.col-xl-11.m-auto
          .col-md-6.col-lg-auto.mb-4.mb-md-0(style="place-self:center;")
            figure.m-auto.col-7.col-md-12
              img(src='@/assets/curso/tema1/8.png')
          .col-md-6.col-lg(style="place-self:center;")
            h4 Horizonte B
            p Capa subsiguiente al Horizonte A, color más claro, menos raíces, menor actividad biológica, subsuelo. 
      .py-3.py-md-4(titulo="Horizonte C")
        .row.col-xl-11.m-auto
          .col-md-6.col-lg-auto.mb-4.mb-md-0(style="place-self:center;")
            figure.m-auto.col-7.col-md-12
              img(src='@/assets/curso/tema1/9.png')
          .col-md-6.col-lg(style="place-self:center;")
            h4 Horizonte C
            p Capa más profunda, constituida por la roca madre. 


      


      
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
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
