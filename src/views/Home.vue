<template lang="html">
  <b-container class="bv-example-row">
    <b-row>
      <b-col></b-col>
      <b-col>
        <div>
          <img alt="Vue logo" src="../assets/logo.png">
          <h3> Movies & tv</h3>
          <h3> Search movie by word</h3>
          <b-form-input v-model="text" placeholder="Buscar" @keyup.enter="validate"></b-form-input>
          <b-button variant="outline-primary" @click="validate">Buscar</b-button>
            <div v-for="movie in movies" :key="movie.imdbID">
              <router-link :to="`/pelicula/${movie.imdbID}`">
                <Tarjeta :id="movie.imdbID" :titulo="movie.Title" :tipo="movie.Type" :anio="movie.Year" :poster="movie.Poster"/>
              </router-link>
            </div>
            <div v-if="movies === undefined">
              No se encontraron registros
            </div>
        </div>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Tarjeta from '../components/Tarjeta.vue'

export default {
  name: 'Home',
  components: {
    Tarjeta
  },
  computed: {
    ...mapState(['movies'])
  },
  methods: {
    ...mapActions(['getMovies']),
    validate () {
      if (this.text.length === 0) {
        alert('No se ha escrito nada el campo de texto')
        return
      }
      this.getMovies(this.text)
    }
  },
  data () {
    return {
      text: ''
    }
  }
}
</script>
