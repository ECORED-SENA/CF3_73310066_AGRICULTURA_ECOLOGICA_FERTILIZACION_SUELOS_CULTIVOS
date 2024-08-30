<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Fertilización agroecológica.',
      titulo: 'Cuestionario',
      introduccion:
        'Evaluar los conocimientos adquiridos sobre los conceptos, prácticas y beneficios de la fertilización agroecológica, facilitando la comprensión y aplicación de técnicas sostenibles en el manejo de suelos.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal objetivo de la fertilización agroecológica? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar la estructura del suelo. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Satisfacer las necesidades nutricionales de los cultivos. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar el uso de fertilizantes químicos. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Promover la erosión del suelo. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué componente del suelo está compuesto por minerales y materia orgánica? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Fracción líquida. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fracción gaseosa. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fracción sólida. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fracción fotónica. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué técnica agroecológica implica la descomposición controlada de residuos orgánicos? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Abonos verdes. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Bioles. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compostaje. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Lombricompuesto. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál de los siguientes no es un macronutriente? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Nitrógeno. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fósforo. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Potasio. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Zinc.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es un síntoma de deficiencia de nitrógeno en las plantas? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Hojas rojizas. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hojas cloróticas. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Necrosis en los bordes de las hojas. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nervaduras verdes y clorosis en el resto de la hoja. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es el propósito de usar abonos verdes? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Proveer nutrientes sintéticos. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar el uso de pesticidas. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aportar nutrientes al suelo. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir la retención de agua. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué tipo de abono se obtiene mediante la descomposición de materia orgánica por lombrices? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Abonos verdes. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Bioles. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compost. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lombricompuesto. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes es un beneficio de la fertilización agroecológica? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Promover la compactación del suelo. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar el uso de químicos. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar la estructura del suelo. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir la biodiversidad del suelo. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué abono líquido se obtiene de la fermentación de residuos orgánicos y otros componentes? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Abonos verdes. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Compost. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bioles. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Lombricompuesto. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de los siguientes elementos no se debe utilizar en el compost? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Estiércol de vacas. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Restos de cosecha. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Excremento de gatos o perros. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cal y/o ceniza de fogón. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
