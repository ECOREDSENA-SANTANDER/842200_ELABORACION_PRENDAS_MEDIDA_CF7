<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="zoom-in-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/XdfGKUfkcYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.mb-5 Video: Confección de prendas de vestir - SENA 2024

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-4.col-sm-12.col-lg-
        img(src='@/assets/curso/introduccion/img_1.svg', alt='Maquinaria, herramientas e insumos para la confección')
      .col-sm-12.col-lg-4
        p.mb-0 Este componente abordará la identificación de las máquinas e insumos necesarios para la confección de prendas y la implementación de acuerdo a los procesos específicos, comprendiéndola como la construcción secuencial de cada una de las partes de las prendas de vestir, permitiendo que las rutas operacionales en la construcción de los apartados de una prenda sean, entendidas en la interpretación de diseños que independientemente de las diferencias, permitan establecer procesos y lineamientos generales en la confección.
    .row.mb-5.justify-content-center(data-aos="zoom-in-left")
      .col-sm-12.col-lg-10
        .bg01.px-5.py-4
          p.mb-0 Dentro de todos estos procesos y lineamientos es indispensable entender que la confección de una prenda no es el proceso final, ya que esto se logrará una vez se aprueben los procesos de revisión de acuerdo con criterios técnicos y de calidad para llegar a la entrega del producto.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
