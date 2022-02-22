<template>
    <section>
        <h3>Filmer</h3>
        <movie-list></movie-list>
    </section>
</template>

<script>
import MovieList from '../movies/MovieList.vue'

export default {
    components: {
        MovieList
    
    }
}
</script>