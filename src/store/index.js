import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    movie: {}
  },
  mutations: {
    setMovies (state, data) {
      state.movies = data
    },
    setMovie (state, data) {
      state.movie = data
    }
  },
  actions: {
    getMovies ({ commit }, palabra) {
      axios.get(`http://www.omdbapi.com/?apikey=51298010&s=${palabra}`).then((response) => {
        commit('setMovies', response.data.Search)
        console.log(this.state.movies)
      })
    },
    getMovie ({ commit }, id) {
      axios.get(`http://www.omdbapi.com/?apikey=51298010&i=${id}`).then((response) => {
        commit('setMovie', response.data)
        console.log(this.state.movie)
      })
    }
  },
  modules: {
  }
})
