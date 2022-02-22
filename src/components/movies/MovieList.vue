<template>
    <section>
        <input @click="showAllMovies" type="button" value="Vis alle filmer">
        <section class="row" v-if="show">
            <h2>Filmer</h2>
            <content-item class="col-12 text-center col-sm-12 col-md-6 col-lg-4 col-xxl-3" v-for="(movie, i) in movies" :key="i" 
            :title="movie.title" :image="movie.image" :release="movie.release"></content-item>
        </section>
    </section>
</template>

<script>
import movieService from "../../services/movieService"
import ContentItem from '../ContentItem.vue'
import { ref } from 'vue'
export default {
    setup(){
        const show = ref(false);

        const showAllMovies = () =>{
          show.value = !show.value;
        }

        const movies = movieService.getAllMovies();
        return { movies, show, showAllMovies}
        
    },
    components: {
        ContentItem
    }
    
}
</script>

