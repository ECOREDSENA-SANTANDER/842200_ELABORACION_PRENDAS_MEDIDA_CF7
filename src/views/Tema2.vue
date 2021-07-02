<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Confección de prendas femeninas

    .row.d-flex.p-3.justify-content-center.mb-5
      .col-lg-6.d-flex
        figure
          img(src='@/assets/curso/tema_2/img_1.png', alt='Confección de prendas femeninas')
      .col-lg-6.d-flex
        .jumbo_1.p-3
          .jumbo_2.p-2
            p.mb-0 En el proceso de confección o ensamble de prendas masculinas y femeninas desde el que hacer de un modisto o sastre, se requiere el manejo y dominio básico de las máquinas de coser y sus aditamentos en el momento de elaborar cualquier tipo de prenda, si bien la destreza en el manejo es importante, se debe tener claro que todo molde, patrón, plano o desarrollo de diseño se acompaña de una ruta u orden operacional como especificaciones para el ensamble, las cuales van de la mano con el área de prototipado o muestreo.

    .titulo-segundo
      #t_2_1.h2 2.1 Trazo básico blusa

    p.mb-5 Es necesario que para la confección de la falda clásica se tengan los elementos que fueron previamente trazados y patronados, así como el material textil, cierre e insumos necesarios para generar los acabados. 

     .row.justify-content-center.mb-5
      .col-lg-11
        LineaTiempoD.color-secundario
          .row.d-flex.p-4(numero="1" titulo="Ruta operacional de la falda")
            .col-lg-8
              p La elaboración de una falda cuenta con lo siguientes pasos:  

              .row.justify-content-center
                .col-lg-11
                  ol.lista-ol
                    li 
                      span.text-bold 1. 
                      | Unir los costados de la falda con maquina plana y posteriormente pasarla por la fileteadora.

                    li 
                      span.text-bold 2. 
                      | Dejar abierto el centro de espalda para colocar el cierre con la pretina.
                    li 
                      span.text-bold 3. 
                      | Unir la pretina, en este caso es una pretina recta con corte a los costados y corte centro espalda, las cuales deberán estar previamente fusionadas con el interlon.
                    li 
                      span.text-bold 4. 
                      | Pegar la pretina a la falda.
                    li 
                      span.text-bold 5. 
                      | Colocar el cierre (invisible o normal).
                    li 
                      span.text-bold 6. 
                      | Cerrar el centro de la espalda.
                    li 
                      span.text-bold 7. 
                      | Realizar el dobladillo.
              

            .col-lg-4
              figure
                img.img-a(src='@/assets/curso/tema_2/img_2.png', alt='falda')
            p A continuación se presentarán algunos videos de apoyo para el alistamiento de recursos para la elaboración de la falda.
          .row.d-flex.p-4(numero="2" titulo="Introducción trazo, corte y confección de la falda clásica")
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/liB1zqJfBqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

          .row.d-flex.p-4(numero="3" titulo="Elaboración del patrón frente de la falda clásica")
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/IPd6XzOf504" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

          .row.d-flex.p-4(numero="4" titulo="Elaboración del patrón posterior de la falda clásica")
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/lFwR6RcFwIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

          .row.d-flex.p-4(numero="5" titulo="Introducción: marcaciones sobre la tela y corte de la falda clásica")
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/typAdUPaeSE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

          .row.d-flex.p-4(numero="6" titulo="Despiece de la falda y marcaciones")
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/QVhz-5uv97o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

          .row.d-flex.p-4(numero="7" titulo="Alistamiento de maquinaria cumpliendo normas de seguridad")
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/AZAY9W7RLwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

          .row.d-flex.p-4(numero="8" titulo="Introducción: confección de la falda clásica según normas de calidad")
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/aRcvWsb5mUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-segundo
      #t_2_2.h2 2.2 Confección de complementos     

    p.mb-5 En la confección de complementos se encuentran diversos insumos que aportan a la prenda, soportes, ajustes, volumen, estructura, entre otros, por ello, se realizará un recorrido sobre la confección de prendas de vestir. 

    .row.justify-content-center
      .col-lg-8
        a.mb-5.anexo(:href="obtenerLink('/downloads/PDF2_Cremalleras.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.my-0 #[strong Anexo]. Las cremalleras
            p.mb-0 Conoce el proceso de confección de las cremalleras. 
        a.mb-5.anexo(:href="obtenerLink('/downloads/PDF3_Punos.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.my-0 #[strong Anexo]. Los puños
            p.mb-0 Conoce el proceso de confección de los puños.
        a.mb-5.anexo(:href="obtenerLink('/downloads/PDF4_Cuellos.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.my-0 #[strong Anexo]. Los cuellos
            p.mb-0 Conoce el proceso de confección de los cuellos.

    



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
