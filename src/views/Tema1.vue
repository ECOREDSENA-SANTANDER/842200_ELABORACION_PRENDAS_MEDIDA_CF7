<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Maquinaria, herramientas e insumos para la confección

    .row.justify-content-center.mb-5
      .col-lg-7
        p El oficio de la costura y la confección de prendas implica varios procesos, desde la manipulación del textil cortado hasta la ejecución, usando maquinaria de acuerdo con cada proceso. Estos procesos implican la manipulación de sujetadores y de arranques en los que el operario es su principal actor, ya que asegura el funcionamiento correcto de cada una de estas partes. Al tener presente que la persona está implícita dentro de cada uno de estos procesos es importante tener presente las normas de seguridad, así como conocer sobre ergonomía dentro de la labor del costurero.

        p La ergonomía se distingue entre la industrial y la biomecánica, está última más encaminada hacia lo ocupacional, dado que se centra en aspectos físicos relacionados con el trabajo, capacidades de fuerza y postura, teniendo presente tareas repetitivas por periodos de tiempos determinados. 

      .col-lg-5
        figure
          img(src='@/assets/curso/tema_1/img_1.png', alt='Maquinaria, herramientas e insumos para la confección')

    .titulo-segundo
      #t_1_1.h2 1.1 Normas generales de seguridad para la labor en la confección de prendas

    p.mb-5 Antes de iniciar cualquier actividad comprendida en la confección es importante que la persona se disponga físicamente para la labor, por ello se recomiendan algunos estiramientos y seguir algunos lineamientos.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    .titulo-segundo
      #t_1_2.h2 1.2 Condiciones y espacios en el trabajo
    
    p.mb-5 Las condiciones bajo las cuales un trabajador desempeña su labor deben permitir que haya una sinergia entre el espacio y la labor, teniendo presente que su integridad física y psicológica es lo primero, dado que cuando estas condiciones de trabajo no son adecuadas o no cuentan con los elementos de protección, pueden acarrear algunas consecuencias como se observa en la figura 1. 

    p.BorTit Figura 1. Condiciones laborales
    .row.p-5.bg01.rounded.mb-4
      .col-lg-4
        p.rounded.w-100.jum_img.p-4.text-center Aumento de la fatiga
        p.rounded.w-100.jum_img.p-4.text-center Aumento en accidentes laborales en los espacios de trabajo
        p.rounded.w-100.jum_img.p-4.text-center Enfermedades profesionales
        p.rounded.w-100.jum_img.p-4.text-center Tensión nerviosa
        p.rounded.w-100.jum_img.p-4.text-center Disminución en la producción y resultados
        p.rounded.w-100.jum_img.p-4.text-center Insatisfacción, desinterés etc.
      .col-lg-8
        
        

      

       
    
    p.mb-5 Estos factores pueden incidir directamente en la baja de la producción y afectar a la empresa a nivel general, si bien la producción es importante, se debe tener presente que el principal recurso y más importante, es el humano por lo que se debe priorizar su bienestar. A continuación, se relacionan algunos elementos importantes para tener en cuenta: 

    .row.justify-content-center.mb-5
      .col-lg-11
        LineaTiempoD.color-secundario
          .row.d-flex.p-4(numero="1" titulo="Temperatura")
            .col-lg-8
              p Influye directamente en el bienestar del trabajador, en su rendimiento y seguridad, una excesiva temperatura ya sea de frío o calor puede producir fatiga, requiriendo tiempos extendidos de recuperación o descanso, en este caso se vigila la humedad del ambiente. En el caso de los talleres en los que la maquinaria por lo general suele ser industrial se genera una mayor temperatura. La condición recomendada para una buena zona de confort es 18°C. 

            .col-lg-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_3.png', alt='Temperatura')
          .row.d-flex.p-4(numero="2" titulo="Ruido")
            .col-lg-8
              p Las operaciones mecanizadas, el ruido de las máquinas y el espacio en el lugar o puesto de trabajo, también pueden llegar a generar molestias dado que se pueden producir sonidos de media vibración constante, esto a nivel auditivo conlleva el uso de protectores auditivos como audífonos, especiales para esta labor, sobre todo en fábricas que suelen tener un gran número de máquinas. Si el lugar de trabajo excede el número de decibeles mínimo (50 – 80) es sugerible emplearlos. Algunas de las molestias presentadas son: efectos patológicos, fatiga, confusión, pérdida de audición.

            .col-lg-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_4.png', alt='Iluminación')

          .row.d-flex.p-4(numero="3" titulo="Iluminación")
            .col-lg-8
              p Es indispensable que los espacios tengan una iluminación adecuada ya que es un factor importante, pero este debe ser la adecuada ya que el exceso, así como la carencia afectan demasiado. Esto porque toda la actividad es guiada por la vista y en este ejercicio el ojo se contrae y se dilata constantemente.  Algunos de los efectos si no hay atención a este aspecto son la irritación visual, inseguridad en los movimientos, ardor y resequedad en la retina. A continuación, en la tabla 1 se presentan los mínimos de intensidad recomendados.

            .col-lg-4.mb-5
              figure
                img.img-a(src='@/assets/curso/tema_1/img_5.png', alt='Ruido')

            p.BorTit Tabla 1. Intensidad de la iluminación
            .tabla-a.color-acento-botones.mb-5 
              table
                caption Nota. Iluminación de interior con luz artificial. Huaman (2003).
                thead
                  tr
                    th Clase de actividad
                    th Intensidad de iluminación recomendada
                tbody.td_color_3
                  tr
                    td Recinto destinado solo a estancia orientación
                    td 60 lux
                  tr
                    td Trabajos en los que el ojo debe percibir grandes detalles con elevados contrastes
                    td 120 - 150 lux
                  tr
                    td Actividades que conllevan la necesidad de reconocer detalles con reducidos contrastes
                    td 500 - 700 lux
                  tr
                    td Trabajos de precisión que requieren un reconocimiento de detalles muy  precisos con unos contrastes muy reducidos
                    td 1000 - 5100 lux
                  tr
                    td Trabajos de precisión que requieren un reconocimiento de detalles muy precisos con unos contrastes muy reducidos
                    td 2000 - 3000 lux

          .row.d-flex.p-4(numero="4" titulo="Ventilación")
            .col-lg-8
              p La ventilación debe ser proporcional al espacio de trabajo. No se debe confundir ventilación con circulación de aire, dado que la ventilación sustituye el aire vaciado por aire fresco y la circulación de aire lo mueve, pero sin renovarlo. Por ello es importante que los espacios no estén completamente cerrados. Algunos de los objetivos de cuidar este factor son: 

              .row.justify-content-center
                .col-lg-11
                  ul.lista-ul--color
                    li 
                      i.far.fa-dot-circle
                      | Dispersar el calor producido por la maquinaria y los trabajadores.
                    li 
                      i.far.fa-dot-circle
                      | Disminuir la contaminación atmosférica.
                    li 
                      i.far.fa-dot-circle
                      |Mantener un espacio fresco.

            .col-lg-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_6.png', alt='Ruido')

          .row.d-flex.p-4(numero="5" titulo="Descripción del puesto de trabajo")
            .col-lg-8
              p El espacio de trabajo contribuye a un buen desarrollo de las actividades en la labor de la confección, por ello es importante tener en cuenta: 

              .row.justify-content-center
                .col-lg-11
                  ul.lista-ul--color
                    li 
                      i.far.fa-dot-circle
                      p #[strong El trabajador:] sobre la persona que desarrolla la actividad debe considerarse la estatura, peso, fuerza, rangos de movimiento y características físicas generales, estableciendo el espacio que ocupará en cuanto a mesas, sillas, etc.
                    li 
                      i.far.fa-dot-circle 
                      p #[strong El puesto de trabajo:] comprende la maquinaria, herramientas, mobiliario, controladores, puntos de luz, ambientación y objetos de trabajo.
                    li 
                      i.far.fa-dot-circle 
                      p #[strong Ambiente de trabajo:] tiene en cuenta la temperatura, iluminación, ruido, vibraciones y demás características implícitas en el bienestar del trabajador.

              p Para prevenir las lesiones se debe considerar:

               

            .col-lg-4
              figure
                img.img-a(src='@/assets/curso/tema_1/img_7.png', alt='Ruido')

            .row.justify-content-center
              .col-lg-11
                ul.lista-ul--color
                  li 
                    i.far.fa-dot-circle
                    p #[strong Sillas adecuadas:] ajustables y ergonómicas.
                  li 
                    i.far.fa-dot-circle
                    p #[strong Soporte para pies:] es importante cuando se trabaja por jornadas extendidas sentado. Esto permite ayudar a que el nivel de 90º se cumpla. 
                  li 
                    i.far.fa-dot-circle
                    p #[strong Ajuste de equipo:] altura de mesas y máquinas de confección.
                  li 
                    i.far.fa-dot-circle
                    p #[strong Iluminación:] suficiente acorde al espacio de trabajo, que no genere esfuerzo en el sentido de la vista.

    .titulo-segundo
      #t_1_3.h2 1.3 Maquinaria, herramientas e insumos 

    p.mb-5 Conocer sobre la maquinaria, sus partes y funcionamiento contribuye a una orientación óptima de las actividades dentro de la confección, por ello es importante conocerlas al detalle, siguiendo el siguiente archivo para su lectura y apropiación.

    .row.justify-content-center
      .col-lg-9
        a.mb-5.anexo(:href="obtenerLink('/downloads/maquinaria_herramientas_insumos_vf_compressed.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.my-0 #[strong Anexo]. Maquinaria, herramientas e insumos.
            p.my-0 Conoce los tipos de máquina (plana 1 con aguja, sobrehiladora y recubridora) y sus partes. 
        a.mb-5.anexo(href=('https://www.youtube.com/playlist?list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C') target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.my-0 #[strong Anexo]. Puesta a punto de máquina fileteadora con puntada de seguridad. 
            p.mb-0 Conoce el manejo de la fileteadora. Desde el alistamiento de herramienta, limpieza, enhebrado, tensión, calibración, entre otros. Visualizar del paso 1 al 13.
        a.mb-5.anexo(href=('https://www.youtube.com/playlist?list=PLkc5n6npRWkhq9z8eUd2qXfN43M08IM-3') target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.my-0 #[strong Anexo]. Operaciones básicas para el manejo de maquina fileteadora
            p.mb-0 Conoce sobre las operaciones que permiten unir piezas, hacer y rematar filetes. Visualizar del paso 1 al 3.
        a.mb-5.anexo(href=('https://www.youtube.com/playlist?list=PLkc5n6npRWkhTb-ZxfTMyvaAsWux7sGRt') target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.my-0 #[strong Anexo]. 
            p.mb-0 Puesta a punto máquina plana de una aguja
            p.m-0 Conoce sobre la puesta a punto de las máquinas planas donde se realiza el enhebrado, prueba de costura, calificación, nivel de arrastre, entre otros. Visualizar del paso 1 al 3.

        a.mb-5.anexo(href=('https://www.youtube.com/playlist?list=PLkc5n6npRWkgqtV0Y7c6L22_Gaf3nizKB') target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.my-0 #[strong Anexo]. Operaciones básicas para el manejo en máquina plana una aguja.
            p.mb-0 Conoce las operaciones básicas para realizar costuras rectas a ¼ pulgada , costuras alforzas de ¼ , costuras a alforzas de 16” , pegar bolsillo , bolsillo de ribete sencillo , bolsillo de ribete doble  y coser pechera sencilla.

        

    
      

  
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
