<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Procedimiento para obtener abonos orgánicos 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Las plantas necesitan nutrientes en formas disponibles. La materia orgánica es una fuente de ello, siempre que previamente pase por procesos de descomposición y transformación, los cuales ocurren de forma natural pero lenta en los sistemas no intervenidos.
    
    p.mt-4(data-aos="fade-right") Es por esto que se hace necesario acelerar esta descomposición mediante procedimientos controlados. A continuación, se describen algunos de ellos:

    Separador 

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_1 4.1 Compost de pila

    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure 
          img(src="@/assets/curso/tema4/2.svg")
      .col(data-aos="fade-up" style="place-self:center;")
        p.mb-0 El compostaje es la técnica para transformar los restos de animales o plantas (materia orgánica) en abono natural (compost). La materia orgánica compostada aporta nutrientes a los cultivos, mientras que la fresca no lo hace y, a veces, puede llegar a quemarlas.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema2/7.svg")
        .col.ps-2.pt-lg-3(style="place-self:center;")
          h3.mb-0.pe-5 Insumos requeridos	
    
    p(data-aos="fade-up") Los insumos necesarios son:

    .cont_4_1.mt-4.p-4.pt-lg-5.pb-lg-5 
      .col-xl-8.m-auto
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="flip-right")
            .h-100.p-4.text-center(style="background-color:#A8D549;border-radius:10px;")
              figure
                img(src="@/assets/curso/tema4/4.svg" style="max-width:100px;display:inline;")
              p.mt-4.mb-0 Residuos vegetales.
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="flip-right")
            .h-100.p-4.text-center(style="background-color:#A8D549;border-radius:10px;")
              figure
                img(src="@/assets/curso/tema4/5.svg" style="max-width:100px;display:inline;")
              p.mt-4.mb-0 Cal y/o ceniza de fogón.
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="flip-right")
            .h-100.p-4.text-center(style="background-color:#A8D549;border-radius:10px;")
              figure
                img(src="@/assets/curso/tema4/6.svg" style="max-width:100px;display:inline;")
              p.mt-4.mb-0 Estiércol animal.
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="flip-right")
            .h-100.p-4.text-center(style="background-color:#A8D549;border-radius:10px;")
              figure
                img(src="@/assets/curso/tema4/7.svg" style="max-width:100px;display:inline;")
              p.mt-4.mb-0 Tierra.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema2/7.svg")
        .col.ps-2.pt-lg-3(style="place-self:center;")
          h3.mb-0.pe-5 Procedimiento
    
    p(data-aos="fade-up") El procedimiento descrito a continuación es esencial para la implementación exitosa de prácticas sostenibles y eficientes en la gestión agrícola.

    .cont_4_2.mt-5.pb-5
      .cont_4_3.pt-4.pb-4.pt-lg-5.pb-lg-5 
        .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
          SlyderA(tipo="b")
            .row
              .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
                ol.lista-ol--cuadro
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 1
                    span Elegir un lugar seco, parejo y que no se inunde.
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 2
                    span Aflojar el suelo sin voltearlo.
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 3
                    span Enterrar en el suelo un palo alto.
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 4
                    span Alrededor del palo, colocar la primera capa que sea de tallos secos o paja.
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 5
                    span Agregar una capa de restos de cocina y plantas verdes.
              .col-lg-4(style="place-self:center;")
                figure.m-auto.col-9.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema4/10.png')
            .row
              .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
                ol.lista-ol--cuadro
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 6
                    span Espolvorear cenizas o cal para evitar olores cuando empiece la descomposición.
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 7
                    span La siguiente capa es de estiércol.
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 8
                    span La capa que sigue es de tierra.
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 9
                    span Regar con agua la pila.
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 10
                    span Se pueden ir agregando capas hasta alcanzar mínimo 75 cm y máximo 1,5 m.
              .col-lg-4(style="place-self:center;")
                figure.m-auto.col-9.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema4/11.png')
            .row
              .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
                ol.lista-ol--cuadro
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 11
                    span Quitar el palo para que entre aire a la pila.
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 12
                    span Si hay muchos residuos, armar otra pila.
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 13
                    span A los 2 o 3 días, introducir la mano para notar si está caliente.
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 14
                    span Si está tibio o frío, regar para que se humedezca.
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 15
                    span Apretar un poco de compost en las manos. Si salen unas gotas de agua, la humedad es adecuada. No debe caer líquido porque entonces está muy húmedo y si no cae nada, está muy seco.
              .col-lg-4(style="place-self:center;")
                figure.m-auto.col-9.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema4/12.png')
            .row
              .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
                ol.lista-ol--cuadro
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 16
                    span Después de 2 semanas, revolver la pila con rastrillo o pala. Repetir esta operación cada 10 días.
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 17
                    span Aproximadamente a los 3 meses, el abono está listo.
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 18
                    span Se sabe porque su color es oscuro y parece tierra. No debe oler a nada.
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 19
                    span Más o menos de cada 100 kg de residuos orgánicos se obtienen 30 kg de materia orgánica.
                  li.d-flex
                    .lista-ol--cuadro__vineta(style="background-color:#F3D02C;")
                      span.fw-bold(style="color:initial;") 20
                    span Por cada 10 m2 de terreno se necesitan unos 30 kg de compost.
              .col-lg-4(style="place-self:center;")
                figure.m-auto.col-9.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema4/13.png')
      
      .col-xl-10.m-auto.mt-5
        .row(data-aos="zoom-in")
          .col-auto.d-none.d-md-block.pe-md-0
            .h-100.p-2.ps-5.pe-5(style="background-color:#87AB3A;")
              figure.m-auto.text-center
                img(src="@/assets/curso/tema4/14.svg")
          .col.ps-md-0
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#A8D549;")
              p.fw-bold.w-100.mb-0 Uso
              p.mb-0 Una pila de 1 m de alto proporciona aproximadamente 70 a 90 kg de abono.
    
    Separador 

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_2 4.2  Lombricompuesto
    
    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure 
          img(src="@/assets/curso/tema1/10.svg")
      .col(data-aos="fade-up" style="place-self:center;")
        p.mb-0 Las lombrices rojas californianas producen un excremento llamado lombricompuesto. Este lombricompuesto aporta nutrientes a las plantas, ayuda en la aireación del suelo y es alto en microorganismos descomponedores de materia orgánica.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema2/7.svg")
        .col.ps-2.pt-lg-3(style="place-self:center;")
          h3.mb-0.pe-5 Insumos requeridos	
    
    p(data-aos="fade-up") Los insumos necesarios son:

    .cont_4_4.mt-4.p-4.pt-lg-5.pb-lg-5.ps-lg-5
      .row
        .col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
          .h-100.p-3(style="background-color:#ECDB9F;border-radius:10px;")
            .row
              .col-auto(style="place-self:center;")
                figure 
                  img(src="@/assets/curso/tema4/16.svg")
              .col.ps-0(style="place-self:center;")
                p.mb-0 100 kg de sustrato compostado	
        .col-lg-3.mb-4.mb-lg-0(data-aos="fade-left")
          .h-100.p-3(style="background-color:#ECDB9F;border-radius:10px;")
            .row
              .col-auto(style="place-self:center;")
                figure 
                  img(src="@/assets/curso/tema4/17.svg")
              .col.ps-0(style="place-self:center;")
                p.mb-0 600 g de lombriz roja californiana
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema2/7.svg")
        .col.ps-2.pt-lg-3(style="place-self:center;")
          h3.mb-0.pe-5 Procedimiento
    
    p(data-aos="fade-up") El procedimiento descrito a continuación es esencial para la implementación exitosa de prácticas sostenibles y eficientes en la gestión agrícola.

    .cont_4_3.pt-4.pb-4.pt-lg-5.pb-lg-5 
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4.pt-lg-4
        PasosB.color-acento-contenido
          .row(titulo="Paso 1")
            .col-md-6.mb-4.mb-md-0(style="place-self:center;")
              p Las lombrices se alimentan con compostaje de al menos 60 días.
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/18.png')
          .row(titulo="Paso 2")
            .col-md-6.mb-4.mb-md-0(style="place-self:center;")
              p El primer paso es instalar un criadero de 1 m de ancho, 1 m de largo y 30 cm de alto o del largo que se quiera, siempre que el ancho se mantenga en 1 m. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/19.png')
          .row(titulo="Paso 3")
            .col-md-6.mb-4.mb-md-0(style="place-self:center;")
              p El acopio de compost al lombricero se hace de manera escalonada. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/20.png')
          .row(titulo="Paso 4")
            .col-md-6.mb-4.mb-md-0(style="place-self:center;")
              p La cantidad es de 100 kg x m2, cada 2 meses, de sustrato compostado. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/21.png')
          .row(titulo="Paso 5")
            .col-md-6.mb-4.mb-md-0(style="place-self:center;")
              p Una vez se tenga el sustrato, se distribuye en la lombricera de manera uniforme y se siembran 1000 lombrices x m2 (aproximadamente 600 g). 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/22.png')
          .row(titulo="Paso 6")
            .col-md-6.mb-4.mb-md-0(style="place-self:center;")
              p Mantener una humedad del 55 %, para lo cual se realizan riegos temprano en la mañana o pasada la tarde. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/23.png')
          .row(titulo="Paso 7")
            .col-md-6.mb-4.mb-md-0(style="place-self:center;")
              p La cosecha de lombrices se hace a los 45 días. No se riega por 3 o 4 días.
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/24.png')
          .row(titulo="Paso 8")
            .col-md-6.mb-4.mb-md-0(style="place-self:center;")
              p Colocar material fresco a un lado del montón que hayan venido procesando para que las lombrices se trasladen al nuevo alimento. Este traslado dura unos 15 días, momento en el cual se retira el lombricompuesto libre de lombrices y se completa el alimento fresco. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/25.png')
          .row(titulo="Paso 9")
            .col-md-6.mb-4.mb-md-0(style="place-self:center;")
              p El lombricompuesto terminado es de color oscuro, sin olor, suelto, esponjoso y húmedo. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/26.png')
          .row(titulo="Paso 10")
            .col-md-6.mb-4.mb-md-0(style="place-self:center;")
              p Una cama de 1 m2 provee cada 6 meses aproximadamente 150 kg de lombricompuesto. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/27.png')
    
    .row.mt-4
      .col-lg-7(data-aos="flip-right")
        .p-4.h-100(style="background-color:#F3D02C;")
          .row 
            .col-md-auto.md-4.mb-md-0(style="place-self:center;")
              figure.m-auto.col-6.col-md-12 
                img(src="@/assets/curso/tema4/28.svg")
            .col-md(style="place-self:center;")
              p.mb-0.fw-bold Uso
              p.mb-0 Esta cantidad sirve para abonar 150 m2.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        figure 
          img(src="@/assets/curso/tema4/29.png")
    
    Separador 

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_3 4.3 #[em Biol] básico
    
    .cont_4_5
      p(data-aos="fade-up") El #[em biol] es un abono líquido proveniente de la mezcla de materia orgánica, agua, acondicionadores y promotores de microorganismos. 

      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:start;")
            figure
              img(src="@/assets/curso/tema2/7.svg")
          .col.ps-2.pt-lg-3(style="place-self:center;")
            h3.mb-0.pe-5 Insumos requeridos
      
      p(data-aos="fade-left") Los insumos necesarios son: 

      .col-xl-9.m-auto.mt-4
        .row.justify-content-center
          .col-lg-4.col-md-8.mb-4(data-aos="zoom-in")
            .h-100.p-4.text-center(style="background-color:#A8D549;border-radius:10px;")
              figure
                img(src="@/assets/curso/tema4/31.svg" style="max-width:100px;display:inline;")
              p.mt-4.mb-0 Una caneca plástica, limpia, de 55 gal; preferiblemente azul, no roja ni amarilla.
          .col-lg-4.col-md-8.mb-4(data-aos="zoom-in")
            .h-100.p-4.text-center(style="background-color:#A8D549;border-radius:10px;")
              figure
                img(src="@/assets/curso/tema4/32.svg" style="max-width:100px;display:inline;")
              p.mt-4.mb-0 1 kg de melaza.
          .col-lg-4.col-md-8.mb-4(data-aos="zoom-in")
            .h-100.p-4.text-center(style="background-color:#A8D549;border-radius:10px;")
              figure
                img(src="@/assets/curso/tema4/33.svg" style="max-width:100px;display:inline;")
              p.mt-4.mb-0 1 kg de cal dolomita o 1 kg de ceniza.
          .col-lg-4.col-md-8.mb-4(data-aos="zoom-in")
            .h-100.p-4.text-center(style="background-color:#A8D549;border-radius:10px;")
              figure
                img(src="@/assets/curso/tema4/34.svg" style="max-width:100px;display:inline;")
              p.mt-4.mb-0 200 g de levadura.
          .col-lg-4.col-md-8.mb-4(data-aos="zoom-in")
            .h-100.p-4.text-center(style="background-color:#A8D549;border-radius:10px;")
              figure
                img(src="@/assets/curso/tema4/35.svg" style="max-width:100px;display:inline;")
              p.mt-4.mb-0 1 L de leche.
          .col-lg-4.d-none.d-lg-block.mb-4(data-aos="zoom-in")
            figure 
              img(src="@/assets/curso/tema4/36.png")
      
      .row.mt-2
        .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
          figure 
            img(src="@/assets/curso/tema4/37.svg")
        .col(data-aos="fade-up" style="place-self:center;")
          p.mb-0 Se puede reemplazar la levadura y la leche con EM, un producto natural elaborado con microorganismos eficientes que aceleran la descomposición natural de materias orgánicas. Son microorganismos naturales como levaduras y bacterias ácido-lácticas (Lactobacillus), que promueven un proceso de fermentación antioxidante benéfico, acelerando la descomposición de la materia orgánica. En este caso, utilizar el litro de EM para la caneca de 55 gal.
    
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:start;")
            figure
              img(src="@/assets/curso/tema2/7.svg")
          .col.ps-2.pt-lg-3(style="place-self:center;")
            h3.mb-0.pe-5 Procedimiento
      
    p(data-aos="fade-left") El procedimiento descrito a continuación es esencial para la implementación exitosa de prácticas sostenibles y eficientes en la gestión agrícola. 

    .cont_4_3.pt-4.pb-4.pt-lg-5.pb-lg-5 
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4.pt-lg-4
        PasosB.color-acento-contenido
          .row(titulo="Paso 1")
            .col-md-6.mb-4.mb-md-0(style="place-self:center;")
              p Llenar hasta la tercera parte de la caneca con estiércol y/o mantillo de bosque (mantillo es la capa más superficial de suelo que se encuentra en los bosques y vegetaciones naturales). 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/38.png')
          .row(titulo="Paso 2")
            .col-md-6.mb-4.mb-md-0(style="place-self:center;")
              p Agregar agua hasta completar dos terceras partes de la caneca. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/39.png')
          .row(titulo="Paso 3")
            .col-md-6.mb-4.mb-md-0(style="place-self:center;")
              p Agregar la melaza, cal y leche. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/40.png')
          .row(titulo="Paso 4")
            .col-md-6.mb-4.mb-md-0(style="place-self:center;")
              p Mezclar muy bien. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/41.png')
          .row(titulo="Paso 5")
            .col-md-6.mb-4.mb-md-0(style="place-self:center;")
              p Cada 8 días alimentar con 1 kg de melaza. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/42.png')
          .row(titulo="Paso 6")
            .col-md-6.mb-4.mb-md-0(style="place-self:center;")
              p Mezclar todos los días. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/43.png')
          .row(titulo="Paso 7")
            .col-md-6.mb-4.mb-md-0(style="place-self:center;")
              p El abono está listo después de 4 semanas. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4/44.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema2/7.svg")
        .col.ps-2.pt-lg-3(style="place-self:center;")
          h3.mb-0.pe-5 Uso
      
    p(data-aos="fade-left") El abono orgánico fermentado tipo bocashi puede aplicarse de manera foliar o edáfica, siguiendo estos procedimientos para asegurar su efectividad y evitar daños a las plantas. 

    .row.mt-4.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-10.pe-lg-0(data-aos="fade-right")
        .h-100.p-4.pe-lg-5.ps-lg-5(style="background-color:#ECDB9F;border-radius:25px 0px 0px 25px;")
          .row
            .col-auto
              figure
                img(src="@/assets/curso/tema4/45.svg" style="max-width:100px;display:inline;")
            .col(style="place-self:end;")
              h3.mb-2.ps-3.pe-3(style="max-width:fit-content;background-color:#F3D02C;") Foliar
          ul.lista-ul.mt-4
            li.d-flex
              i.fas.fa-check-circle(style="color:#65802C;")
              span Una vez listo, mezclar muy bien y sacar de la caneca un poco más de 2 L de la mezcla. 
            li.d-flex
              i.fas.fa-check-circle(style="color:#65802C;")
              span Colar muy bien y obtener 2 L de líquido. Debe quedar cristalino para que no se tape la boquilla de la fumigadora. 
            li.d-flex
              i.fas.fa-check-circle(style="color:#65802C;")
              span Agregar a la fumigadora de 20 L. 
            li.d-flex
              i.fas.fa-check-circle(style="color:#65802C;")
              span Completar con agua limpia. 
            li.d-flex
              i.fas.fa-check-circle(style="color:#65802C;")
              span Fumigar sobre el follaje de las plantas, en cultivos que se encuentren en la etapa de crecimiento. 
            li.d-flex
              i.fas.fa-check-circle(style="color:#65802C;")
              span Fumigar temprano en la mañana o pasada la tarde, para evitar quemazones en las hojas y evaporación del producto. 
      .col-lg.mb-4.mb-lg-0.col-md-10.ps-lg-0(data-aos="fade-left")
        .h-100.p-4.pe-lg-5.ps-lg-5(style="background-color:#DCEEB6;border-radius:0px 25px 25px 0px;")
          .row
            .col-auto
              figure
                img(src="@/assets/curso/tema4/46.svg" style="max-width:100px;display:inline;")
            .col(style="place-self:end;")
              h3.mb-2.ps-3.pe-3(style="max-width:fit-content;background-color:#F3D02C;") Edáfica 
          ul.lista-ul.mt-4
            li.d-flex
              i.fas.fa-check-circle(style="color:#65802C;")
              span En una caneca aparte, diluir en partes iguales agua y abono líquido. 
            li.d-flex
              i.fas.fa-check-circle(style="color:#65802C;")
              span Aplicar directamente al suelo. 
            li.d-flex
              i.fas.fa-check-circle(style="color:#65802C;")
              span Voltear muy bien para mezclar el líquido con el suelo. 
            li.d-flex
              i.fas.fa-check-circle(style="color:#65802C;")
              span Seguir las recomendaciones de aplicar temprano en la mañana o pasada la tarde, para evitar exceso de sol y evaporación del producto. 

    Separador 

    .titulo-segundo(data-aos="flip-up")
      h2#t_4_4 4.4 Abono orgánico fermentado tipo #[em “bocashi”]
    
    .cont_4_6
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema4/48.png')})`}"
        )
        .bloque-texto-g__texto.p-4.p-lg-5
          p.mb-0 El abono orgánico fermentado tipo #[em “bocashi”] es una enmienda natural que mejora significativamente la fertilidad y estructura del suelo. Este tipo de abono se elabora a través de un proceso de fermentación que descompone materiales orgánicos, convirtiéndolos en nutrientes fácilmente disponibles para las plantas. Además, #[em “bocashi”] contribuye a aumentar la actividad microbiana en el suelo, promoviendo un ecosistema saludable y equilibrado.
      
      .cont_decorativo.mb-4.mt-5.p-relative(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:start;")
            figure
              img(src="@/assets/curso/tema2/7.svg")
          .col.ps-2.pt-lg-3(style="place-self:center;")
            h3.mb-0.pe-5 Insumos requeridos
        
      p.p-relative(data-aos="fade-left") Los insumos necesarios son: 

      .col-xl-10.m-auto.mt-4.p-relative
        .p-4(style="background-color:#DCEEB6;border-radius:17px;")
          .row 
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-down")
              figure.m-auto.col-7.col-md-6.col-lg-12
                img(src="@/assets/curso/tema4/49.png")
            .col-lg-7(data-aos="fade-left" style="place-self:center;")
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span 2 bultos de rastrojo o de cualquier residuo de cosecha: tamo, bagazo de caña, pasto, entre otros. El material que se utilice debe estar bien seco y picado. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span 2 bultos de boñiga fresca de res. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span 2 bultos de tierra cernida. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span 1 bulto de carbón vegetal en partículas pequeñas. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span 5 kg de salvado. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span 5 kg de ceniza de fogón o de cal dolomita. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span 5 kg de tierra de bosque nativo. 
                li.d-flex
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span 4 kg de melaza. 
                li.d-flex.mb-0
                  i.fas.fa-check-circle(style="color:#65802C;")
                  span 200 g de levadura.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema2/7.svg")
        .col.ps-2.pt-lg-3(style="place-self:center;")
          h3.mb-0.pe-5 Procedimiento
      
    p(data-aos="fade-left") Los procedimientos descritos a continuación son esenciales para la implementación exitosa de prácticas sostenibles y eficientes en la gestión agrícola.

    .row.mt-4
      .col-lg
        .p-3(style="background-color:#F7F0D8;" data-aos="fade-up")
          .row 
            .col-auto(style="place-self:center;")
              figure 
                img(src="@/assets/curso/tema4/50.svg")
            .col(style="place-self:center;")
              p.mb-0  Mezclar muy bien el rastrojo con la boñiga y la tierra. 
        .p-3(style="background-color:#DCEEB6;" data-aos="fade-up")
          .row 
            .col-auto(style="place-self:center;")
              figure 
                img(src="@/assets/curso/tema4/51.svg")
            .col(style="place-self:center;")
              p.mb-0  La melaza se desata en agua, preferiblemente caliente, y se mezcla con la levadura. Esta mezcla se va regando sobre el montón a medida que se va mezclando. 
        .p-3(style="background-color:#F7F0D8;" data-aos="fade-up")
          .row 
            .col-auto(style="place-self:center;")
              figure 
                img(src="@/assets/curso/tema4/52.svg")
            .col(style="place-self:center;")
              p.mb-0  Tapar el montón con costales o con material vegetal que deje respirar. En este momento no se usa el plástico. 
        .p-3(style="background-color:#DCEEB6;" data-aos="fade-up")
          .row 
            .col-auto(style="place-self:center;")
              figure 
                img(src="@/assets/curso/tema4/53.svg")
            .col(style="place-self:center;")
              p.mb-0  Voltear 2 veces por día los primeros 3 a 4 días. 
        .p-3(style="background-color:#F7F0D8;" data-aos="fade-up")
          .row 
            .col-auto(style="place-self:center;")
              figure 
                img(src="@/assets/curso/tema4/54.svg")
            .col(style="place-self:center;")
              p.mb-0  Dejar quieto 11 días tapando con plástico. 
        .p-3(style="background-color:#DCEEB6;" data-aos="fade-up")
          .row 
            .col-auto(style="place-self:center;")
              figure 
                img(src="@/assets/curso/tema4/55.svg")
            .col(style="place-self:center;")
              p.mb-0  El montón con los días va disminuyendo de altura debido a la pérdida de humedad y la fermentación. 
        .p-3(style="background-color:#F7F0D8;" data-aos="fade-up")
          .row 
            .col-auto(style="place-self:center;")
              figure 
                img(src="@/assets/curso/tema4/56.svg")
            .col(style="place-self:center;")
              p.mb-0  El abono está listo cuando ya no se siente caliente, su color es similar al de la tierra, está seco y polvoso. 
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left" style="place-self:center;")
        figure 
          img(src="@/assets/curso/tema4/57.png")
  
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema2/7.svg")
        .col.ps-2.pt-lg-3(style="place-self:center;")
          h3.mb-0.pe-5 Uso y almacenamiento  
      
    p(data-aos="fade-left") A continuación se detallan las recomendaciones para el uso y almacenamiento del #[em bocashi]: 

    .row.mt-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema4/58.png")
      .col-lg-8(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Uso inmediato ")
            p Se puede utilizar inmediatamente, incorporándolo a las eras.
          .row.col-xl-11.m-auto(titulo="Almacenamiento ")
            p Se puede guardar siempre que no haya condiciones de humedad y no por un tiempo mayor a 2 meses. 
          .row.col-xl-11.m-auto(titulo="Calidad y reutilización ")
            p Si este montón quedó de buena calidad, se guarda una parte de él para utilizarlo de semilla en la próxima pila que se elabore. Así, se evita el uso de carbón y de tierra de bosque. 
          .row.col-xl-11.m-auto(titulo="Uso en semilleros ")
            p En los semilleros se puede usar el bocashi en proporción de 10 a 40 % en mezcla con el sustrato. 
          .row.col-xl-11.m-auto(titulo="Uso al momento de la siembra ")
            p Al momento de la siembra para hortalizas, se colocan de 30 a 100 g en el fondo del hoyo donde se va a trasplantar la planta. Se cubre con un poco de tierra para que la raíz de la planta trasplantada no tenga contacto directo con el bocashi y eventualmente se pueda quemar. 
          .row.col-xl-11.m-auto(titulo="Mantenimiento del cultivo ")
            p Este abono también se puede utilizar en el mantenimiento del cultivo, aplicándolo directamente en el plato de las plántulas sin que las toque. Sirve para la segunda y tercera abonada. 
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema2/7.svg")
        .col.ps-2.pt-lg-3(style="place-self:center;")
          h3.mb-0.pe-5 Precauciones  
      
    p(data-aos="fade-left") Al preparar el abono orgánico fermentado tipo bocashi, es importante seguir ciertas precauciones para asegurar su efectividad y calidad. 

    .row.mt-4
      .col-lg
        .row.justify-content-center
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in-up")
            .h-100.text-center.p-4.cont_2_1
              figure
                img(src="@/assets/curso/tema4/59.svg")
              p.mt-3.mb-0 No utilizar boñiga muy vieja.
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in-up")
            .h-100.text-center.p-4.cont_2_1
              figure
                img(src="@/assets/curso/tema4/60.svg")
              p.mt-3.mb-0 Evitar exceso de humedad.
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in-up")
            .h-100.text-center.p-4.cont_2_1
              figure
                img(src="@/assets/curso/tema4/61.svg")
              p.mt-3.mb-0 Si el abono no se tapa, la fermentación no se facilita.
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in-up")
            .h-100.text-center.p-4.cont_2_1
              figure
                img(src="@/assets/curso/tema4/62.svg")
              p.mt-3.mb-0 Preparar siguiendo las proporciones sugeridas de los insumos, ya que el exceso o deficiencia de alguno de ellos hace que el bocashi no funcione.
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in-up")
            .h-100.text-center.p-4.cont_2_1
              figure
                img(src="@/assets/curso/tema4/63.svg")
              p.mt-3.mb-0 Si el abono necesita acelerarse porque no se obtuvo la calidad esperada, se puede usar agua con melaza, suero o yogur.
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in-up")
            .h-100.text-center.p-4.cont_2_1
              figure
                img(src="@/assets/curso/tema4/64.svg")
              p.mt-3.mb-0 Si no se obtuvo la calidad esperada, el próximo bocashi se puede mejorar aumentando la cantidad de levadura, melaza y disminuyendo el tamaño de la tierra.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure 
          img(src="@/assets/curso/tema4/65.png")
              
            
          
          






</template>

<script>
export default {
  name: 'Tema4',
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
