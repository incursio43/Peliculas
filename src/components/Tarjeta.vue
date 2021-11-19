<template lang="html">
  <b-card
    v-bind:title="titulo"
    v-bind:img-src="poster"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      <h3>Tipo: {{tipo}}</h3>
      <h3>Año: {{anio}}</h3>
      <h3>id: {{id}}</h3>
    </b-card-text>
  </b-card>
</template>
<script>
export default {
  name: 'Tarjeta',
  props: ['id', 'titulo', 'tipo', 'anio', 'poster']
}
</script>

<style scoped>

</style>
