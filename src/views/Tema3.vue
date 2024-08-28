<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Nutrición de cultivos

    p(data-aos="fade-up") Las plantas absorben nutrientes principalmente a través de las raíces; por tanto, cultivos con buen desarrollo de raíces los absorberán eficientemente.
    
    .col-xl-11.m-auto.mt-4
      .row
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido
            h5 Tabla 1.
            span Fuentes agroecológicas de nutrientes 
          .tabla-a.color-acento-contenido
            table
              thead
                tr(style="background-color:#ECDB9F;")
                  th.text-center Fuentes de abono orgánico
                  th.text-center Fuentes de abono mineral 
              tbody
                tr
                  td.text-center Estiércol de animales 
                  td.text-center Roca fosfórica 
                tr
                  td.text-center Residuos animales (mortandad) 
                  td.text-center Dolomita 
                tr
                  td.text-center Abonos verdes
                  td.text-center Cenizas
                tr
                  td.text-center Lombricompuesto
                  td.text-center Feldespatos
                tr
                  td.text-center Compostaje
                  td.text-center Sulfatos
                tr
                  td.text-center Purines
                  td.text-center Harina de huesos y/o sangre
                tr
                  td.text-center Bioles
                  td.text-center Bentonita
                tr
                  td.text-center Bocashi
                  td.text-center Escorias Thomas
        .col-lg-5(data-aos="fade-left")
          figure.m-auto.col-7.col-md-6.col-lg-12 
            img(src="@/assets/curso/tema3/1.png")
    
    p.mt-4(data-aos="fade-right") Las prácticas de fertilización agroecológica toman estas fuentes y las manejan para hacer disponibles los nutrientes a los cultivos. 

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema2/7.svg")
        .col.ps-2.pt-lg-3(style="place-self:center;")
          h3.mb-0.pe-5 Prácticas de fertilización agroecológica 
    
    .row
      .col-lg-auto.d-none.d-lg-block.pe-lg-0(data-aos="flip-right")
        figure 
          img(src="@/assets/curso/tema3/2.png")
      .col-lg.ps-lg-0(data-aos="fade-left")
        .h-100.p-4.p-lg-5.d-flex.align-content-center.flex-wrap(style="background-color:#EDF6DB;")
          p.mb-0 Las prácticas de fertilización agroecológica se centran en la incorporación de materia orgánica, abonos verdes, compostaje y abonos líquidos para mejorar la fertilidad y estructura del suelo. La incorporación de materia orgánica, como estiércol y residuos vegetales, aporta nutrientes esenciales y mejora la retención de agua y la porosidad del suelo. 
    
    .row.mt-5
      .col-lg-8(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#143701;border-radius:10px;")
          .row
            .col-lg-auto.md-4.mb-lg-0 
              figure.m-auto.col-7.col-md-5.col-lg-12
                img(src="@/assets/curso/tema2/18.svg")
            .col-lg
              h4.text-white Podcast
              p.text-white Es momento de escuchar este episodio, Don Campos y Azusena, junto con el ingeniero, compartirán cuatro trucos esenciales para asegurar que sus cultivos reciban la mejor nutrición posible. Desde el uso de materia orgánica hasta abonos verdes, aprenderán cómo mantener sus plantas saludables y productivas.  
              TarjetaAudio.color-acento-contenido.mb-3(
                texto="Nutrición de cultivos"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                tiempo
              )
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure 
          img(src="@/assets/curso/tema3/3.svg")
    
    Separador 

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_1 3.1  Incorporación de materia orgánica 
    
    .row
      .col-auto.d-none.d-md-block(data-aos="flip-right" style="place-self:center;")
        figure 
          img(src="@/assets/curso/tema3/4.svg")
      .col(data-aos="fade-up" style="place-self:center;")
        p.mb-0 La materia orgánica es una fuente natural de nutrientes para las plantas, provenientes de su adecuada descomposición. Se origina en los residuos tanto animales como vegetales que tienen una descomposición natural, propiciada por los organismos del suelo, como las lombrices y los microorganismos (bacterias).
    
    .row.mt-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema3/5.png")
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Aporte continuo en sistemas naturales")
            p En un sistema natural existe un continuo aporte de materia orgánica. 
          .row.col-xl-11.m-auto(titulo="Agotamiento en sistemas agrícolas ")
            p En los sistemas agrícolas, la materia orgánica puede haberse agotado o menguado por la agricultura intensiva, la degradación de suelos, la erosión, entre otros. 
          .row.col-xl-11.m-auto(titulo="Necesidad de agregar materia orgánica ")
            p Es necesario agregar materia orgánica para enriquecer los nutrientes, mejorar la aireación y la capacidad de retener agua del suelo. 
          .row.col-xl-11.m-auto(titulo="Fuentes de materia orgánica ")
            p La materia orgánica se puede obtener de fuentes tales como el compostaje, el lombricompuesto y el estiércol de animales. 
          .row.col-xl-11.m-auto(titulo="Beneficios ")
            p A mayor cantidad de materia orgánica, mayor será la resistencia de las plantas a las plagas y enfermedades. 
    
    Separador 

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_2 3.2 Abonos verdes

    p(data-aos="fade-up") Los abonos verdes son especies vegetales, generalmente leguminosas, que se siembran para aportar nutrientes al suelo, ya sea porque se incorporan al mismo o por sus asociaciones nitrificantes. 

    .row.mt-4.justify-content-center
      .col-lg.d-none.d-lg-block(data-aos="flip-right")
        figure
          img(src="@/assets/curso/tema3/6.png")
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in-up")
        .h-100.text-center.p-4.p-lg-5.pt-lg-4.pb-lg-4.cont_2_1
          figure
            img(src="@/assets/curso/tema3/7.svg")
          h5.mb-0.bg-white.p-1.ps-3.pe-3.m-auto.mt-3 Rotación
          p.mt-3.mb-0 Se siembran en rotación con otros cultivos anuales. Se cortan antes de florecer y se pueden dejar sobre el suelo o incorporarlos.
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in-up")
        .h-100.text-center.p-4.p-lg-5.pt-lg-4.pb-lg-4.cont_2_1
          figure
            img(src="@/assets/curso/tema3/8.svg")
          h5.mb-0.bg-white.p-1.ps-3.pe-3.m-auto.mt-3 Simbiosis
          p.mt-3.mb-0 Las leguminosas presentan una simbiosis con bacterias nitrificantes, como la Rhizobium sp., que convierten el nitrógeno atmosférico en formas disponibles para la nutrición de las plantas.
    
    .row.mt-5
      .col-lg-8(data-aos="zoom-in")
        .h-100.p-4(style="background-color:#143701;border-radius:10px;")
          .row
            .col-lg-auto.md-4.mb-lg-0 
              figure.m-auto.col-7.col-md-5.col-lg-12
                img(src="@/assets/curso/tema2/18.svg")
            .col-lg
              h4(style="color:#F3D02C;") Podcast
              p.text-white Acompañen a Don Campos, Azusena y el ingeniero mientras explican cómo preparar abonos orgánicos poderosos como el biol básico. Aprendan técnicas sencillas y prácticas para enriquecer el suelo y asegurar el crecimiento saludable de sus cultivos.  
              TarjetaAudio.color-acento-contenido.mb-3(
                texto="Abonos orgánicos"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
                tiempo
              )
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure 
          img(src="@/assets/curso/tema3/9.svg")
    
    Separador 

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_3 3.3 Compostaje
    
    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure 
          img(src="@/assets/curso/tema1/10.svg")
      .col(data-aos="fade-up" style="place-self:center;")
        p.mb-0 El compostaje es la práctica agroecológica que consiste en la descomposición controlada de residuos vegetales y/o animales, para obtener un material fuente de nutrientes disponible para las plantas. 
    
    .row.mt-4 
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figur.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/10.png")
      .col-lg-7(data-aos="zoom-in" style="place-self:center;")
        .p-3.mb-4.ps-lg-4.pe-lg-4(style="border-radius:15px;background-color:#FEE1DE;")
          .row
            .col-auto(style="place-self:center;")
              figure 
                img(src="@/assets/curso/tema3/11.svg")
            .col(style="place-self:center;")
              p.mb-2.fw-bold.ps-2.pe-2(style="max-width:fit-content;background-color:#F3D02C;") Disponibilidad de nutrientes
              p.mb-0 La adición de materia orgánica fresca sin descomponer trae inconvenientes, ya que no sirve de abono inmediato. El compostaje convierte los nutrientes a formas químicamente disponibles.
        .p-3.ps-lg-4.pe-lg-4(style="border-radius:15px;background-color:#FEE1DE;")
          .row
            .col-auto(style="place-self:center;")
              figure 
                img(src="@/assets/curso/tema3/12.svg")
            .col(style="place-self:center;")
              p.mb-2.fw-bold.ps-2.pe-2(style="max-width:fit-content;background-color:#F3D02C;") Evita plagas y enfermedades
              p.mb-0 Los estiércoles animales sin descomponer pueden ser tóxicos para las plantas y propagar plagas y enfermedades.
    
    .cont_3_1.pt-4.pb-4
      p(data-aos="fade-up") No se debe utilizar en el compost:

      .col-xl-9.m-auto.mt-4
        .row.justify-content-center
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in")
            .h-100.p-3(style="background-color:#A8D549;border-radius:8px;")
              figure.m-auto
                img(src="@/assets/curso/tema3/14.png")
              .p-4.pb-3.text-center
                p.fw-bold Excremento de gatos o perros
                p.mb-0 Podrían tener enfermedades que afectan a las personas.
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in")
            .h-100.p-3(style="background-color:#A8D549;border-radius:8px;")
              figure.m-auto
                img(src="@/assets/curso/tema3/15.png")
              .p-4.pb-3.text-center
                p.fw-bold Excremento de caballo manipulado sin guantes
                p.mb-0 Podría transmitir la enfermedad del tétano.
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in")
            .h-100.p-3(style="background-color:#A8D549;border-radius:8px;")
              figure.m-auto
                img(src="@/assets/curso/tema3/16.png")
              .p-4.pb-3.text-center
                p.fw-bold Malezas con semillas
                p.mb-0 Propagan plantas nocivas a los cultivos.
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in")
            .h-100.p-3(style="background-color:#A8D549;border-radius:8px;")
              figure.m-auto
                img(src="@/assets/curso/tema3/17.png")
              .p-4.pb-3.text-center
                p.fw-bold Vidrio, metales y plásticos
                p.mb-0 No se descomponen y contaminan el compostaje.
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in")
            .h-100.p-3(style="background-color:#A8D549;border-radius:8px;")
              figure.m-auto
                img(src="@/assets/curso/tema3/18.png")
              .p-4.pb-3.text-center
                p.fw-bold Restos de grasas y carnes
                p.mb-0 Se descomponen muy lentamente y producen mal olor.
          .col-lg-4.mb-4.d-none.d-lg-block(data-aos="flip-left")
            figure.m-auto
              img(src="@/assets/curso/tema3/19.png")
      
      p(data-aos="fade-right") Los compostajes más conocidos son: bocashi, compost de pila y lombricompuesto.
    
    Separador 

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_4 3.4 Abonos líquidos
    
    .row
      .col-lg-auto.d-none.d-lg-block.pe-lg-0(data-aos="flip-right")
        figure 
          img(src="@/assets/curso/tema3/20.png")
      .col-lg.ps-lg-0(data-aos="fade-left")
        .h-100.p-4.p-lg-5.d-flex.align-content-center.flex-wrap(style="background-color:#EDF6DB;")
          p Como su nombre lo indica, son abonos cuya preparación se realiza en agua y su aplicación a los suelos se hace en forma líquida. Se obtienen de la combinación de materia orgánica y otros componentes aceleradores de su descomposición que se mezclan para proporcionar una fuente de nutrientes orgánicos para los cultivos.
          p.fw-bold.mb-0 Las preparaciones más conocidas son los bioles y purines.

              




</template>

<script>
export default {
  name: 'Tema3',
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
