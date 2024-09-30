<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Confección de prendas femeninas

    .row.justify-content-center(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img.bgimg02
          .bloque-texto-g__texto.p-4
            p.mb-0 En el proceso de confección o ensamble de prendas masculinas y femeninas, el modisto o sastre debe manejar y dominar las máquinas de coser y sus aditamentos básicos. Aunque la destreza en el manejo de estas máquinas es importante, es fundamental comprender que cada molde, patrón, plano o diseño incluye una ruta u orden operacional con especificaciones para el ensamble. Estas especificaciones están estrechamente relacionadas con el área de prototipado o muestreo.
    Separador  
    #t_2_1.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 2.1 Orden operacional de la falda

    p.mb-5(data-aos="zoom-in-left") Es necesario que para la confección de la falda clásica se tengan los elementos que fueron previamente trazados y patronados, así como el material textil, cierre e insumos necesarios para generar los acabados. 

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-2.d-none.d-lg-block
        img.img-a(src='@/assets/curso/tema_2/img_2.png', alt='falda')
      .col-sm-12.col-lg-6
        .fw-bold.mb-5 Ruta operacional de la falda
        p.mb-4 La elaboración de una falda cuenta con los siguientes pasos:
        ol.lista-ol
          li.d-flex
            .lista-ol--cuadro__vineta.color-primario
              span.text-bold.txt-sistema 1
            span Unir los costados de la falda con máquina plana y posteriormente pasarla por la fileteadora.

          li.d-flex
            .lista-ol--cuadro__vineta.color-primario 
              span.text-bold.txt-sistema 2
            span Dejar abierto el centro de espalda para colocar el cierre con la pretina.
          li.d-flex
            .lista-ol--cuadro__vineta.color-primario 
              span.text-bold.txt-sistema 3
            span Unir la pretina, en este caso es una pretina recta con corte a los costados y corte centro espalda, las cuales deberán estar previamente fusionadas con el interlon.
          li.d-flex
            .lista-ol--cuadro__vineta.color-primario 
              span.text-bold.txt-sistema 4
            span Pegar la pretina a la falda.
          li.d-flex
            .lista-ol--cuadro__vineta.color-primario 
              span.text-bold.txt-sistema 5
            span Colocar el cierre (invisible o normal).
          li.d-flex
            .lista-ol--cuadro__vineta.color-primario 
              span.text-bold.txt-sistema 6
            span Cerrar el centro de la espalda.
          li.d-flex
            .lista-ol--cuadro__vineta.color-primario 
              span.text-bold.txt-sistema 7
            span Realizar el dobladillo.
              

    .row.justify-content-center(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8        
        p.mb-5 A continuación, se presentarán algunos videos de apoyo para el alistamiento de recursos para la elaboración de la falda.


    .row.justify-content-center(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8
        .tarjeta.color-acento-contenido.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src="@/assets/template/icono-video.svg")
            .col-sm-12.col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Introducción trazo, corte y confección de la falda clásica.
                .col-sm-auto
                  a.boton.color-boton.py-1(href="https://www.youtube.com/watch?v=2E4MDaqa0yE" target="_blank").mb-1
                    span Ir al video
                    i.fas.fa-video  
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Elaboración del patrón frente de la falda clásica.
                .col-sm-auto
                  a.boton.color-boton.py-1(href="https://www.youtube.com/watch?v=TJ1FqRKHHfo" target="_blank").mb-1
                    span Ir al video
                    i.fas.fa-video
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Elaboración del patrón posterior de la falda clásica.
                .col-sm-auto
                  a.boton.color-boton.py-1(href="https://www.youtube.com/watch?v=fXJH92sboQI" target="_blank").mb-1
                    span Ir al video
                    i.fas.fa-video
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Introducción marcaciones sobre la tela y corte de la falda clásica.
                .col-sm-auto
                  a.boton.color-boton.py-1(href="https://www.youtube.com/watch?v=GMDaXiXAAVw" target="_blank").mb-1
                    span Ir al video
                    i.fas.fa-video
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Despiece de la falda y marcaciones.
                .col-sm-auto
                  a.boton.color-boton.py-1(href="https://www.youtube.com/watch?v=L0rXZDNjSEI" target="_blank").mb-1
                    span Ir al video
                    i.fas.fa-video
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Alistamiento de maquinaria cumpliendo normas de seguridad.
                .col-sm-auto
                  a.boton.color-boton.py-1(href="https://www.youtube.com/watch?v=LNtFzSgX-BY" target="_blank").mb-1
                    span Ir al video
                    i.fas.fa-video     
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Introducción confección de la falda clásica según normas de calidad.
                .col-sm-auto
                  a.boton.color-boton.py-1(href="https://www.youtube.com/watch?v=VdHSXq3uSSs" target="_blank").mb-1
                    span Ir al video
                    i.fas.fa-video 
    Separador  
    #t_2_2.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 2.2 Confección de complementos     

    p.mb-3(data-aos="zoom-in-left") En la confección de complementos se utilizan diversos insumos que aportan a la prenda soporte, ajustes, volumen, estructura, entre otros aspectos. Por ello, se realizará un recorrido detallado sobre la confección de prendas de vestir.
    p.mb-5(data-aos="zoom-in-left") Para ello debe visitar los siguientes enlaces. 
    .row.justify-content-center(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src="@/assets/template/icono-video.svg")
            .col-sm-12.col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p 1. Video:  Pegado de cremallera
                .col-sm-auto
                  a.boton.color-boton.py-1(href="https://www.youtube.com/watch?v=4LA6ndcPWaA" target="_blank").mb-1
                    span Ir al video
                    i.fas.fa-video 
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p 2. Video: Montaje de cremallera aletilla y aletillón
                .col-sm-auto
                  a.boton.color-boton.py-1(href="https://www.youtube.com/watch?v=Nas9w764oLQ" target="_blank").mb-1
                    span Ir al video
                    i.fas.fa-video 

              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p 3. Video: Trazo de manga, puño y cuello – camisa clásica y #[i slim fit ]
                .col-sm-auto
                  a.boton.color-boton.py-1(href="https://www.youtube.com/watch?v=QgP2D57n8SU" target="_blank").mb-1
                    span Ir al video
                    i.fas.fa-video 

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
