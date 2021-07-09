<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .cajon.color-primario.p-4.mb-5
      p La confección de prendas de vestir es fundamental en la formación técnica en el aprendiz, por ello es importante tener la trazabilidad en herramientas, maquinarias e insumos, así mismo es importante establecer cómo se utilizan de acuerdo con los procesos operacionales según la prenda. En este sentido, será importante abordar la confección de prendas en la línea masculina y femenina, comprendiendo cómo los procesos se pueden combinar en respuesta a la interpretación de patrones que generen la materialización de productos que son dispuestos en la confección industrial y en prendas de vestir sobre medidas, a su vez se abordarán procesos importantes en la labor como es la supervisión de acabados y terminados teniendo en cuenta criterios técnicos y de calidad.

    p.mb-5 La confección de prendas es un proceso en que se logra observar con mucha precisión la técnica empleada, pues esta se evidencia desde la prenda final, hasta en el patronaje y los trazos aplicados para que sea posible su materialización. Dentro de la confección es importante establecer y conocer bajo qué rutas operacionales se hará posible el paso a paso para el ensamble de las partes de una prenda, cuellos, mangas, botoneras, dobladillos, sistemas de cierre, entre otros.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p Este componente abordará la identificación de las máquinas e insumos necesarios para la confección de prendas y la implementación de acuerdo a los procesos específicos, comprendiéndola como la construcción secuencial de cada una de las partes de las prendas de vestir, permitiendo que las rutas operacionales en la construcción de los apartados de una prenda sean entendidas en la interpretación de diseños que independientemente de las diferencias, permitan establecer procesos y lineamientos generales en la confección.  

    p Dentro todos estos procesos y lineamientos es indispensable entender que la confección de una prenda no es el proceso final, ya que esto se logrará una vez se aprueben los procesos de revisión de acuerdo con criterios técnicos y de calidad para llegar a la entrega del producto.

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
