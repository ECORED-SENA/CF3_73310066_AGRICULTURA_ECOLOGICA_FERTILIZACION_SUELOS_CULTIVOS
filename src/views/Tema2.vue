<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 El suelo como organismo vivo 
    
    p(data-aos="fade-right") El suelo es un sistema en el que una parte importante de sus componentes está representada por seres vivos. En él habitan bacterias, hongos, protozoarios, algas, anélidos y otros microorganismos que aumentan en número al acercarse a la zona de raíces, también llamada rizosfera. 

    .row.mt-4.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in-up")
        .h-100.text-center.p-4.cont_2_1
          figure
            img(src="@/assets/curso/tema2/1.svg")
          h5.mb-0.bg-white.p-1.ps-3.pe-3.m-auto.mt-3 Mineralización de materia orgánica
          p.mt-3.mb-0 Conversión a gas carbónico, agua, nitritos, nitratos, fosfatos, iones potásicos, cálcicos, azufre, boro.
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in-up")
        .h-100.text-center.p-4.cont_2_1
          figure
            img(src="@/assets/curso/tema2/2.svg")
          h5.mb-0.bg-white.p-1.ps-3.pe-3.m-auto.mt-3 Fotosíntesis
          p.mt-3.mb-0 Las plantas utilizan gas carbónico, energía solar, agua y minerales para sintetizar carbohidratos, proteínas y otros compuestos.
      .col-lg.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/3.png")
    
    .row.mt-4 
      .col-lg-auto.d-none.d-lg-block.pe-lg-0(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema2/4.png")
      .col-lg.ps-lg-0(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#DCEEB6;")
          p Los tipos de nutrientes son: 
          .mt-4.col-xl-11.m-auto 
            .bg-white.p-2.mb-4(style="border-radius:10px;")
              .row
                .col-auto(style="place-self:center;")
                  figure 
                    img(src="@/assets/curso/tema2/5.svg")
                .col(style="place-self:center;")
                  p.mb-0.fw-bold Macronutrientes
                  p.mb-0 Nitrógeno (N), Fósforo (P), Potasio (K), Calcio (Ca), Azufre (S), Magnesio (Mg)
            .bg-white.p-2(style="border-radius:10px;")
              .row
                .col-auto(style="place-self:center;")
                  figure 
                    img(src="@/assets/curso/tema2/6.svg")
                .col(style="place-self:center;")
                  p.mb-0.fw-bold Micronutrientes
                  p.mb-0 Manganeso (Mn), Hierro (Fe), Boro (B), Zinc (Zn), Molibdeno (Mb), Cobre (Cu)
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema2/7.svg")
        .col.ps-2.pt-lg-3(style="place-self:center;")
          h3.mb-0.pe-5 Deficiencias nutricionales de los cultivos
    
    p(data-aos="fade-left") Si en el suelo no hay disponibles nutrientes en cantidades suficientes para el crecimiento y desarrollo de los cultivos, estos empiezan a manifestar síntomas de deficiencias nutricionales.

    .cont_2_2.mt-5.pt-4.pb-4.pt-lg-5.pb-lg-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        SlyderA(tipo="b")
          .row
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Nitrógeno 
              ul.lista-ul.mt-4
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Formación de proteínas, crecimiento. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Hojas cloróticas (verde claro o amarillo), hojas más viejas amarillentas en los ápices, bordes de las hojas permanecen verdes, nervadura central amarillenta, crecimiento lento. 
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-9.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/9.png')
          .row
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Fósforo  
              ul.lista-ul.mt-4
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Formación de raíces y semillas.  
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Hojas verdes apagadas y oscuras, tornándose rojizas o púrpuras, caída de hojas. 
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-9.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/10.png')
          .row
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Potasio 
              ul.lista-ul.mt-4
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Turgencia de tejidos, calidad de los frutos. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Necrosis en los bordes de las hojas y amarillamiento. 
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-9.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/11.png')
          .row
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Magnesio 
              ul.lista-ul.mt-4
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Síntesis de clorofila. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Nervaduras verdes y clorosis en el resto de la hoja, caída de hojas. 
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-9.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/12.png')
          .row
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Calcio 
              ul.lista-ul.mt-4
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Regulador de absorción de nutrientes, formador de paredes celulares.  
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Clorosis en hojas nuevas, pérdida de turgencia de la hoja, deformación de la hoja. 
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-9.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/13.png')
          .row
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Azufre 
              ul.lista-ul.mt-4
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Formación de proteínas.  
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Clorosis y amarillamiento parecido a la deficiencia de nitrógeno. 
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-9.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/14.png')
          .row
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Boro 
              ul.lista-ul.mt-4
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Metabolismo de carbohidratos. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Necrosis en el meristemo apical, hojas pequeñas y delgadas formando ramilletes. 
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-9.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/15.png')
          .row
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Zinc 
              ul.lista-ul.mt-4
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Síntesis enzimática y clorofila. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Hojas pequeñas, cloróticas, rizadas y encartuchadas. 
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-9.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/16.png')
          .row
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Hierro 
              ul.lista-ul.mt-4
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Síntesis de clorofila. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span Nervaduras verdes, limbo de las hojas amarillo intenso. 
            .col-lg-5(style="place-self:center;")
              figure.m-auto.col-9.col-md-7.col-lg-12
                img(src='@/assets/curso/tema2/17.png')
    
    .row.mt-5
      .col-lg-8(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#143701;border-radius:10px;")
          .row
            .col-lg-auto.md-4.mb-lg-0 
              figure.m-auto.col-7.col-md-5.col-lg-12
                img(src="@/assets/curso/tema2/18.svg")
            .col-lg
              h4(style="color:#F3D02C;") Podcast
              p.text-white No se pierdan el episodio: El suelo como organismo vivo de nuestro podcast, acompañen a Don Campos y Azusena mientras revelan los secretos del suelo y su vitalidad. Este episodio les enseñará sobre la importancia de los microorganismos y las prácticas para mantener un suelo fértil y productivo.
              TarjetaAudio.color-acento-contenido.mb-3(
                texto="El suelo como organismo vivo"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                tiempo
              )
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure 
          img(src="@/assets/curso/tema2/19.png")


          


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
