<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Maquinaria, herramientas e insumos para la confección

    .row.justify-content-center(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img.bgimg01
          .bloque-texto-g__texto.p-4.d-flex.flex-column
            p El oficio de la costura y la confección de prendas implica varios procesos, desde la manipulación del textil cortado hasta la ejecución utilizando maquinaria específica para cada etapa. Estos procesos requieren la manipulación de sujetadores y mecanismos de arranque, donde el operario es el principal actor, asegurando el correcto funcionamiento de cada parte. Dado que la persona está involucrada en cada uno de estos procesos, es fundamental tener en cuenta las normas de seguridad y el conocimiento sobre ergonomía en el trabajo del costurero.
            p.mb-0 La ergonomía se distingue entre la industrial y la biomecánica. Esta última, más enfocada en el ámbito ocupacional, se centra en aspectos físicos relacionados con el trabajo, tales como capacidades de fuerza y postura, teniendo en cuenta tareas repetitivas durante periodos de tiempo prolongados.
    Separador  
    #t_1_1.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 1.1 Normas generales de seguridad para la labor en la confección de prendas

    p.mb-5(data-aos="zoom-in-left") Antes de iniciar cualquier actividad comprendida en la confección es importante que la persona se disponga físicamente para la labor, por ello se recomiendan algunos estiramientos y seguir algunos lineamientos.


    figure.mb-5(data-aos="zoom-in-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/OOzo1mwUnG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: SENA 2024

    Separador  
    #t_1_2.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 1.2 Condiciones y espacios en el trabajo
    
    p.mb-5(data-aos="zoom-in-left") Las condiciones bajo las cuales un trabajador desempeña su labor deben permitir que haya una sinergia entre el espacio y la labor, teniendo presente que su integridad física y psicológica es lo primero, dado que cuando estas condiciones de trabajo no son adecuadas o no cuentan con los elementos de protección, pueden acarrear algunas consecuencias como se observa en la figura 1. 

    .row(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8.mx-auto.mb-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span
            | Condiciones laborales
        img.img-a(src='@/assets/curso/tema_1/img_2.svg', alt='La imagen presenta un gráfico compuesto por seis bloques de texto con fondo de distintos tonos de verde. Cada bloque señala una consecuencia negativa de malas condiciones laborales: “Aumento de la fatiga”, “Aumento en accidentes laborales en los espacios de trabajo”, “Enfermedades profesionales”, “Tensión nerviosa”, “Disminución en la producción y resultados”, e “Insatisfacción, desinterés etc.”')
       
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .cajon.color-acento-contenido.p-4
          p.mb-0.fw-bold Estos factores pueden incidir directamente en la disminución de la producción y afectar a la empresa en general. Si bien la producción es importante, se debe recordar que el recurso más valioso es el humano, por lo que es fundamental priorizar su bienestar.
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-6
          p A continuación, se relacionan algunos elementos importantes para tener en cuenta:

    
    TabsC.TabsC.color-primario.mb-5(data-aos="zoom-in-left")
      .tarjeta.bg02.p-4(titulo="Temperatura")
        .row.align-items-center
          .col-sm-12.col-lg-4.d-none.d-lg-block
              img.img-a(src='@/assets/curso/tema_1/img_3.svg', alt='Temperatura')
          .col-sm-12.col-lg-8
            p Influye directamente en el bienestar del trabajador, en su rendimiento y seguridad, una excesiva temperatura ya sea de frío o calor puede producir fatiga, requiriendo tiempos extendidos de recuperación o descanso, en este caso se vigila la humedad del ambiente. En el caso de los talleres en los que la maquinaria por lo general suele ser industrial se genera una mayor temperatura. La condición recomendada para una buena zona de #[i confort] es 18 °C.
          
      .tarjeta.bg02.p-4(titulo="Ruido")
        .row.align-items-center
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img.img-a(src='@/assets/curso/tema_1/img_4.png', alt='Iluminación')
          .col-sm-12.col-lg-8
            p Las operaciones mecanizadas y el ruido de las máquinas, junto con el espacio de trabajo, pueden generar molestias debido a las vibraciones constantes. Esto, a nivel auditivo, requiere el uso de protectores auditivos, como audífonos especiales para esta labor, especialmente en fábricas con un gran número de máquinas. Si el nivel de ruido en el lugar de trabajo excede los decibeles mínimos recomendados (50-80), es aconsejable utilizarlos. Algunas de las molestias que pueden presentarse incluyen efectos patológicos, fatiga, confusión y pérdida de audición.

      .tarjeta.bg02.p-4(titulo="Iluminación")
        .row.align-items-center
          .col-12
            p Es indispensable que los espacios tengan una iluminación adecuada ya que es un factor importante, pero este debe ser la adecuada ya que el exceso, así como la carencia afectan demasiado. Esto porque toda la actividad es guiada por la vista y en este ejercicio el ojo se contrae y se dilata constantemente.  Algunos de los efectos si no hay atención a este aspecto son la irritación visual, inseguridad en los movimientos, ardor y resequedad en la retina. A continuación, en la tabla 1 se presentan los mínimos de intensidad recomendados.


        p.BorTit #[b Tabla 1.] Intensidad de la iluminación
        .tabla-a.color-acento-botones.mb-5 
          table(alt='La tabla presenta las intensidades de iluminación recomendadas para diferentes clases de actividades, desde estancias de orientación con 60 lux, trabajos con grandes detalles y altos contrastes (120-150 lux), hasta actividades que requieren reconocimiento de detalles con bajos contrastes (500-700 lux). Además, se especifican intensidades mayores para trabajos de precisión con reconocimiento de detalles muy precisos, con contrastes reducidos, variando entre 1000-5100 lux y 2000-3000 lux según la exigencia de precisión. La fuente citada es Huaman (2003) sobre iluminación interior con luz artificial.')
            caption Nota. Iluminación de interior con luz artificial. Huaman (2003).
            thead
              tr
                th.text-left Clase de actividad
                th.text-left Intensidad de iluminación recomendada
            tbody.td_color_3
              tr
                td Recinto destinado solo a estancia orientación.
                td 60 lux
              tr
                td Trabajos en los que el ojo debe percibir grandes detalles con elevados contrastes.
                td 120 - 150 lux
              tr
                td Actividades que conllevan la necesidad de reconocer detalles con reducidos contrastes.
                td 500 - 700 lux
              tr
                td Trabajos de precisión que requieren un reconocimiento de detalles muy  precisos con unos contrastes muy reducidos.
                td 1000 - 5100 lux
              tr
                td Trabajos de precisión que requieren un reconocimiento de detalles muy precisos con unos contrastes muy reducidos.
                td 2000 - 3000 lux

      .tarjeta.bg02.p-4(titulo="Ventilación")
        .row.align-items-center
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img.img-a(src='@/assets/curso/tema_1/img_6.png', alt='Iluminación')
            .col-sm-12.col-lg-8
              p La ventilación debe ser proporcional al espacio de trabajo. No se debe confundir ventilación con circulación de aire, dado que la ventilación sustituye el aire vaciado por aire fresco y la circulación de aire lo mueve, pero sin renovarlo. Por ello es importante que los espacios no estén completamente cerrados. Algunos de los objetivos de cuidar este factor son: 

              ul.lista-ul--color
                li 
                  i.fas.fa-bullseye
                  | Dispersar el calor producido por la maquinaria y los trabajadores.
                li 
                  i.fas.fa-bullseye
                  | Disminuir la contaminación atmosférica.
                li 
                  i.fas.fa-bullseye
                  |Mantener un espacio fresco.


      .tarjeta.bg02.p-4(titulo="Descripción del puesto de trabajo")
        .row.align-items-center
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img.img-a(src='@/assets/curso/tema_1/img_7.png', alt='Ruido')
          .col-sm-12.col-lg-8
            p El espacio de trabajo contribuye a un buen desarrollo de las actividades en la labor de la confección, por ello es importante tener en cuenta: 

            .row.justify-content-center
              .col-lg-11
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-bullseye
                    span #[strong El trabajador:] sobre la persona que desarrolla la actividad debe considerarse la estatura, peso, fuerza, rangos de movimiento y características físicas generales, estableciendo el espacio que ocupará en cuanto a mesas, sillas, etc.
                  li.d-flex 
                    i.fas.fa-bullseye 
                    span #[strong El puesto de trabajo:] comprende la maquinaria, herramientas, mobiliario, controladores, puntos de luz, ambientación y objetos de trabajo.
                  li.d-flex 
                    i.fas.fa-bullseye 
                    span #[strong Ambiente de trabajo:] tiene en cuenta la temperatura, iluminación, ruido, vibraciones y demás características implícitas en el bienestar del trabajador.

        p.mt-1 Para prevenir las lesiones se debe considerar:
        ul.lista-ul--color
          li 
            i.fas.fa-bullseye
            | #[strong Sillas adecuadas:] ajustables y ergonómicas.
          li 
            i.fas.fa-bullseye
            | #[strong Soporte para pies:] es importante cuando se trabaja por jornadas extendidas sentado. Esto permite ayudar a que el nivel de 90º se cumpla. 
          li 
            i.fas.fa-bullseye
            | #[strong Ajuste de equipo:] altura de mesas y máquinas de confección.
          li 
            i.fas.fa-bullseye
            | #[strong Iluminación:] suficiente acorde al espacio de trabajo, que no genere esfuerzo en el sentido de la vista.

    Separador  
    #t_1_3.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 1.3 Maquinaria, herramientas e insumos 

    p.mb-5 Conocer la maquinaria, sus partes y su funcionamiento contribuye a una ejecución óptima de las actividades dentro de la confección. Por ello, es fundamental entender estos aspectos en detalle, para lo cual se recomienda explorar el siguiente archivo para su apropiación.
    .row.justify-content-center.mb-5(data-aos="zoom-in-left") 
      .col-sm-12.col-lg-6
        img.img-a(src='@/assets/curso/tema_1/img_8.svg', alt='Ruido')

   
  
        
    .row.justify-content-center(data-aos="zoom-in-left")
      .col-sm-12.col-lg-6
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src="@/assets/template/icono-video.svg")
            .col-sm-12.col-lg-10
              
              .row.justify-content-between.align-items-center.bb-steps.my-1
                .col
                  p.py-0 Paso 1
                .col-sm-auto.pb-1
                  a.boton.color-boton.py-0(href="https://youtu.be/flBQ_7Rpd6c" target="_blank")
                    span Ir al video
                    i.fas.fa-video        
              .row.justify-content-between.align-items-center.bb-steps.my-1
                .col
                  p.py-0 Paso 2
                .col-sm-auto.pb-1
                  a.boton.color-boton.py-0(href="https://youtu.be/Irek1OJp0Fo" target="_blank").mb-0
                    span Ir al video
                    i.fas.fa-video
              .row.justify-content-between.align-items-center.bb-steps.my-1
                .col
                  p.py-0 Paso 3
                .col-sm-auto.pb-1
                  a.boton.color-boton.py-0(href="https://youtu.be/0kYGQjMeHLs" target="_blank").mb-0
                    span Ir al video
                    i.fas.fa-video
              .row.justify-content-between.align-items-center.bb-steps.my-1
                .col
                  p.py-0 Paso 4
                .col-sm-auto.pb-1
                  a.boton.color-boton.py-0(href="https://youtu.be/DOG6D5bEt-Y" target="_blank").mb-0
                    span Ir al video
                    i.fas.fa-video
              .row.justify-content-between.align-items-center.bb-steps.my-1
                .col
                  p.py-0 Paso 5
                .col-sm-auto.pb-1
                  a.boton.color-boton.py-0(href="https://youtu.be/j5Jh83__Pa0" target="_blank").mb-0
                    span Ir al video
                    i.fas.fa-video
              .row.justify-content-between.align-items-center.bb-steps.my-1
                .col
                  p.py-0 Paso 6
                .col-sm-auto.pb-1
                  a.boton.color-boton.py-0(href="https://youtu.be/212I54SfmfA" target="_blank").mb-0
                    span Ir al video
                    i.fas.fa-video
              .row.justify-content-between.align-items-center.bb-steps.my-1
                .col
                  p.py-0 Paso 7
                .col-sm-auto.pb-1
                  a.boton.color-boton.py-0(href="https://youtu.be/EReJD8K1U9I" target="_blank").mb-0
                    span Ir al video
                    i.fas.fa-video
              .row.justify-content-between.align-items-center.bb-steps.my-1
                .col
                  p.py-0 Paso 8
                .col-sm-auto.pb-1
                  a.boton.color-boton.py-0(href="https://youtu.be/ZdBQABGg05s" target="_blank").mb-0
                    span Ir al video
                    i.fas.fa-video


              .row.justify-content-between.align-items-center.bb-steps.my-1
                .col
                  p.py-0 Paso 9
                .col-sm-auto.pb-1
                  a.boton.color-boton.py-0(href="https://youtu.be/SB4c0ln0SQw" target="_blank").mb-0
                    span Ir al video
                    i.fas.fa-video


              .row.justify-content-between.align-items-center.bb-steps.my-1
                .col
                  p.py-0 Paso 10
                .col-sm-auto.pb-1
                  a.boton.color-boton.py-0(href="https://youtu.be/Vmqb8gsw8Ys" target="_blank").mb-0
                    span Ir al video
                    i.fas.fa-video


              .row.justify-content-between.align-items-center.bb-steps.my-1
                .col
                  p.py-0 Paso 11
                .col-sm-auto.pb-1
                  a.boton.color-boton.py-0(href="https://youtu.be/vcBrLLazbgA" target="_blank").mb-0
                    span Ir al video
                    i.fas.fa-video


              .row.justify-content-between.align-items-center.bb-steps.my-1
                .col
                  p.py-0 Paso 12
                .col-sm-auto.pb-1
                  a.boton.color-boton.py-0(href="https://youtu.be/18A8TeBJ9Vs" target="_blank").mb-0
                    span Ir al video
                    i.fas.fa-video


              .row.justify-content-between.align-items-center.my-1
                .col
                  p.py-0 Paso 13
                .col-sm-auto.pb-1
                  a.boton.color-boton.py-0(href="https://youtu.be/Qvr_FtX7kfk" target="_blank").mb-0
                    span Ir al video
                    i.fas.fa-video

  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
