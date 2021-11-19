<template lang="html">
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <div>
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="movie.Poster" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="movie.Title">
                  <b-card-text>
                    <h5>Actores: {{movie.Actors}}</h5> <br/>
                    <h5>Country: {{movie.Country}}</h5> <br/>
                    <h5>Director: {{movie.Director}}</h5> <br/>
                    <h5>Genero: {{movie.Genre}}</h5> <br/>
                    <h5>Lenguaje: {{movie.Language}}</h5> <br/>
                    <h5 v-if="movie.imdbRating >= 8.0" style="color: green">Score: {{movie.imdbRating}}</h5>
                    <h5 v-else-if="movie.imdbRating >= 5.0 && movie.imdbRating < 8.0" style="color: yellow">Score: {{movie.imdbRating}}</h5>
                    <h5 v-else style="color: red">Score: {{movie.imdbRating}}</h5>
                    <h5>Sitio web: {{movie.Website}}</h5> <br/>
                    <h5>Año: {{movie.Year}}</h5> <br/>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Detail',
  computed: {
    ...mapState(['movie'])
  },
  methods: {
    ...mapActions(['getMovie'])
  },
  created () {
    this.getMovie(this.$route.params.id)
  }
}
</script>
