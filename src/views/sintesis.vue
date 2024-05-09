<template lang="pug">
.curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      p(data-aos="fade-down").mb-5 A continuación, se presenta el diagrama que representa el resumen de las temáticas que están desarrolladas en el componente formativo.
  
      .row.justify-content-center
        .col-lg-10.mb-5
          figure
            img(src="@/assets/curso/sintesis.svg", alt="La imagen muestra un diagrama de flujo relacionado con la confección de prendas de vestir, dividido en tres segmentos principales. Cada segmento está encabezado por una etiqueta en negrita. El segmento de la izquierda, con líneas conectadas vertical y diagonalmente, se titula “Revisión de procesos de calidad”. Se desglosa en “Cultura de calidad”, que a su vez conduce a “Puntos de control en producto terminado”. Simultáneamente, se conecta a “Control de calidad”, que también se dirige a “Control de calidad en terminados”.El segmento central, con líneas verticales y una diagonal, se etiqueta como “Confección Prendas de Vestir”. Se desglosa en “Maquinaria herramientas e insumos”, que se bifurca hacia “Ergonomía y condiciones de trabajo” y “Normas de seguridad”. Además, hay una línea que conduce a “Confección de Prendas de Vestir”, la cual se divide en “Confección de complementos” y “Orden operacional de la falda”.El segmento de la derecha, con líneas conectadas verticalmente, se titula “Desarrollo de Contenidos”. Se desglosa en “Procesos y lineamientos")
        .col-auto
          a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf-sintesis.svg")
            .anexo__texto
              p Anexo. Síntesis
  
</template>

<script>
export default {
  name: 'Sintesis',
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
