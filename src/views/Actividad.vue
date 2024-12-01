<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Manejo del cultivo de aguacate, cosecha y poscosecha.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Desarrollar habilidades en el manejo integral del cultivo de aguacate, abarcando técnicas de siembra, cuidados agronómicos, métodos de cosecha y prácticas de poscosecha. Se busca fomentar el conocimiento sobre la optimización de recursos, la prevención de plagas y enfermedades, y asegurar la calidad del producto, contribuyendo así a una producción sostenible y rentable.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuánto tiempo tarda un aguacate en producir frutos después de la siembra?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '1-2 años', esCorrecta: false },
            { id: 'b', texto: '3-4 años', esCorrecta: true },
            { id: 'c', texto: '5-7 años', esCorrecta: false },
            { id: 'd', texto: '8-10 años', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Respuesta incorrecta. Inténtalo de nuevo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una de las principales plagas que afecta al aguacate?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mosca de la fruta', esCorrecta: false },
            { id: 'b', texto: 'Pulgón', esCorrecta: false },
            { id: 'c', texto: 'Escama', esCorrecta: false },
            { id: 'd', texto: 'Todos los anteriores', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'No es correcto. Revisa la respuesta adecuada.',
        },
        {
          id: 3,
          texto:
            '¿Qué técnica se utiliza para asegurar la polinización del aguacate?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Polinización manual', esCorrecta: false },
            { id: 'b', texto: 'Uso de insectos', esCorrecta: false },
            { id: 'c', texto: 'Riego por goteo', esCorrecta: false },
            { id: 'd', texto: 'Todas las anteriores', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Respuesta incorrecta. Inténtalo de nuevo.',
        },
        {
          id: 4,
          texto: '¿Cuándo es el mejor momento para cosechar aguacates?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando están completamente verdes',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuando comienzan a cambiar de color',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cuando están maduros en el árbol',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Cuando caen al suelo', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Eso no es correcto. Inténtalo nuevamente.',
        },
        {
          id: 5,
          texto: '¿Qué método se utiliza para almacenar aguacates frescos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Refrigeración', esCorrecta: true },
            { id: 'b', texto: 'Deshidratación', esCorrecta: false },
            { id: 'c', texto: 'Congelación', esCorrecta: false },
            { id: 'd', texto: 'Fermentación', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Respuesta incorrecta. Vuelve a intentarlo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la principal característica de la madurez del aguacate?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Color uniforme', esCorrecta: false },
            { id: 'b', texto: 'Textura suave', esCorrecta: true },
            { id: 'c', texto: 'Tamaño grande', esCorrecta: false },
            { id: 'd', texto: 'Presencia de manchas', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Eso no es correcto. Revisa la respuesta.',
        },
        {
          id: 7,
          texto:
            '¿Qué sustancia se libera al madurar el aguacate que afecta a otros frutos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Etileno', esCorrecta: true },
            { id: 'b', texto: 'Oxígeno', esCorrecta: false },
            { id: 'c', texto: 'Dióxido de carbono', esCorrecta: false },
            { id: 'd', texto: 'Ácido cítrico', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Respuesta incorrecta. Inténtalo de nuevo.',
        },
        {
          id: 8,
          texto: '¿Qué tipo de aguacate es el más común en el mercado?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aguacate Bacon', esCorrecta: false },
            { id: 'b', texto: 'Aguacate Fuerte', esCorrecta: false },
            { id: 'c', texto: 'Aguacate Hass', esCorrecta: true },
            { id: 'd', texto: 'Aguacate Pinkerton', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Eso no es correcto. Revisa tu respuesta.',
        },
        {
          id: 9,
          texto: '¿Qué práctica se recomienda para el riego del aguacate?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Riego diario', esCorrecta: false },
            { id: 'b', texto: 'Riego excesivo', esCorrecta: false },
            { id: 'c', texto: 'Riego por goteo controlado', esCorrecta: true },
            { id: 'd', texto: 'No regar en absoluto', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Respuesta incorrecta. Inténtalo nuevamente.',
        },
        {
          id: 10,
          texto: '¿Cuál es un indicador de que un aguacate está maduro?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Color verde intenso', esCorrecta: false },
            { id: 'b', texto: 'Textura dura', esCorrecta: false },
            { id: 'c', texto: 'Color morado', esCorrecta: false },
            { id: 'd', texto: 'Ceder ligeramente al tacto', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Eso no es correcto. Inténtalo de nuevo.',
        },
        {
          id: 11,
          texto: '¿Qué se debe hacer para prolongar la vida útil del aguacate?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantenerlo a temperatura ambiente',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Guardarlo en un lugar oscuro',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Refrigerarlo', esCorrecta: true },
            { id: 'd', texto: 'Exponerlo al sol', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'No es correcto. Revisa la respuesta adecuada.',
        },
        {
          id: 12,
          texto: '¿Qué sucede si se cosechan aguacates demasiado pronto?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mejora su sabor', esCorrecta: false },
            { id: 'b', texto: 'No maduran adecuadamente', esCorrecta: true },
            { id: 'c', texto: 'Crecen más rápido', esCorrecta: false },
            { id: 'd', texto: 'Son más grandes', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Eso no es correcto. Inténtalo nuevamente.',
        },
        {
          id: 13,
          texto: '¿Qué tipo de fertilización es recomendable para el aguacate?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo fertilizantes químicos',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Solo orgánicos', esCorrecta: false },
            { id: 'c', texto: 'Un balance de ambos', esCorrecta: true },
            {
              id: 'd',
              texto: 'Ninguna fertilización es necesaria',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'No es correcto. Revisa la respuesta.',
        },
        {
          id: 14,
          texto: '¿Cuál es el principal productor de aguacate en el mundo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Estados Unidos', esCorrecta: false },
            { id: 'b', texto: 'México', esCorrecta: true },
            { id: 'c', texto: 'Chile', esCorrecta: false },
            { id: 'd', texto: 'Perú', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Eso no es correcto. Inténtalo nuevamente.',
        },
        {
          id: 15,
          texto: '¿Qué nutrientes son esenciales para el cultivo de aguacate?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Solo nitrógeno', esCorrecta: false },
            {
              id: 'b',
              texto: 'Nitrógeno, fósforo y potasio',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Calcio y magnesio', esCorrecta: false },
            { id: 'd', texto: 'Solo agua', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'No es correcto. Revisa la respuesta adecuada.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la temperatura óptima para el crecimiento del aguacate?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '10-15 °C', esCorrecta: false },
            { id: 'b', texto: '15-25 °C', esCorrecta: false },
            { id: 'c', texto: '20-30 °C', esCorrecta: true },
            { id: 'd', texto: '30-35 °C', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Eso no es correcto. Inténtalo nuevamente.',
        },
        {
          id: 17,
          texto: '¿Cuál es una técnica recomendada para la poda del aguacate?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Poda drástica', esCorrecta: false },
            { id: 'b', texto: 'Poda de formación', esCorrecta: true },
            { id: 'c', texto: 'No se recomienda podar', esCorrecta: false },
            {
              id: 'd',
              texto: 'Poda en cualquier época del año',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Eso no es correcto. Inténtalo nuevamente.',
        },
        {
          id: 18,
          texto:
            '¿Qué problema puede causar el exceso de agua en el cultivo de aguacate?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mejora el crecimiento', esCorrecta: false },
            { id: 'b', texto: 'Enraizamiento más profundo', esCorrecta: false },
            { id: 'c', texto: 'Pudrición de raíces', esCorrecta: true },
            { id: 'd', texto: 'Mayor producción de frutos', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'No es correcto. Inténtalo nuevamente.',
        },
        {
          id: 19,
          texto: '¿Qué color adquiere un aguacate Hass cuando está maduro?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verde brillante', esCorrecta: false },
            { id: 'b', texto: 'Amarillo', esCorrecta: false },
            { id: 'c', texto: 'Verde oscuro a casi negro', esCorrecta: true },
            { id: 'd', texto: 'Marrón', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Eso no es correcto. Inténtalo nuevamente.',
        },
        {
          id: 20,
          texto: '¿Cuál es el principal beneficio del aguacate para la salud?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Alto en azúcares', esCorrecta: false },
            { id: 'b', texto: 'Rico en grasas saludables', esCorrecta: true },
            { id: 'c', texto: 'Alto en proteínas', esCorrecta: false },
            { id: 'd', texto: 'Bajo en calorías', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'No es correcto. Revisa la respuesta adecuada.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
