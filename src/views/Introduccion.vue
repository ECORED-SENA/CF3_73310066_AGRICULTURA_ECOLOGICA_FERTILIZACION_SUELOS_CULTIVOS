<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-up") Este componente formativo profundiza en la #[strong fertilización agroecológica], abordando conceptos, principios, prácticas y métodos del manejo ecológico de suelos.  

    .cont_intro
      .row
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-10.col-md-7.col-lg-12
            img(src="@/assets/curso/intro2.png")
        .col-lg-7(data-aos="fade-left")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/intro3.svg")
            .col(style="place-self:center;")
              p.mb-0 La fertilización agroecológica se centra en cubrir las necesidades nutricionales de los cultivos mediante el uso de técnicas sostenibles y respetuosas con el medio ambiente, evitando el uso de fertilizantes sintéticos y productos químicos que pueden dañar el ecosistema del suelo. 
          p.mt-4 En el contenido se exploran diversas prácticas agroecológicas, como #[strong el compostaje, los abonos verdes, el lombricompuesto y los bioles]. Estas técnicas permiten reciclar residuos orgánicos y convertirlos en nutrientes disponibles para las plantas, mejorando así la estructura del suelo, su capacidad de retención de agua y su fertilidad general. Además, estas prácticas favorecen el equilibrio biológico del suelo, promoviendo la actividad de microorganismos beneficiosos. 
      
      .row.mt-4
        .col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in")
          .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#F3D02C;border-radius:14px;")
            figure
              img(src="@/assets/curso/intro4.svg" style="max-width:60px;")
            p.mt-3.mb-0 El objetivo principal es proporcionar a los agricultores y estudiantes, herramientas y conocimientos necesarios para implementar prácticas de fertilización agroecológica en sus cultivos. 
        .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in-up")
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/intro5.svg")
        .col-lg-4(data-aos="zoom-in-down")
          figure
            img(src="@/assets/curso/intro6.svg" style="max-width:60px;")
          p.mt-3.mb-0 Al adoptar estos métodos, no solo se mejora la productividad y salud de las plantas, sino que también se contribuye a la sostenibilidad ambiental y a la conservación de los recursos naturales, garantizando un futuro más verde y saludable. 
      
    
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
