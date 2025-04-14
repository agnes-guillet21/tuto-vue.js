<template>
<p> Compteur {{count}}</p>
<div v-show="count > 5 "> Bravo vous avez clique plus de 5 fois</div>
<button @click="increment">Incrementer</button>
<button @click="decrement">decrementer</button>
<hr>

<form action ="" @submit="addMovie">
  <input type="text" placeholder="Nouveau film" v-model="newMovie"> 
  {{ newMovie }}
  <button>Ajouter</button>
</form>

<hr>
<button @click="sortMovies()"> Reorganiser </button>
<ul>  
  <li v-for="movie in movies"
 :key="movie"  
  >
    {{ movie }} <button @click="deleteMovie(movie)"> Supprimer</button>
  </li>
</ul>
</template>



<script setup>
import { ref } from "vue";
const  count = ref(0)
const movies = ref([
  'matrix',
  'le seigneurs des anneaux',
  'le hobbit'
]) 

const newMovie = ref('')

const deleteMovie = (movie) => {
  movies.value = movies.value.filter(m => m !== movie)
}

const addMovie = (event)=> { 
  event.preventDefault();
  movies.value.push(newMovie.value);
  newMovie.value = '';
}

const sortMovies = () => {
  movies.value.sort((a, b) => a >b ? 1 : -1)
}
const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>
