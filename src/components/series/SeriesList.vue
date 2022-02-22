<template>
    <section>
        <input @click="showAllSeries" type="button" value="Vis alle serier">
        <section class="row" v-if="show">
        <h2>Serier</h2>
            <content-item class="col-12 text-center col-sm-12 col-md-6 col-lg-4 col-xxl-3 " v-for="(serie, i) in series" :key="i" 
            :title="serie.title" :image="serie.image" :release="serie.release"></content-item>
        </section>
    </section>
</template>

<script>
import seriesService from '../../services/seriesService.js'
import ContentItem from '../ContentItem.vue'
import { ref } from 'vue'
export default {
    setup(){
        const show = ref(false);

        const showAllSeries = () =>{
          show.value = !show.value;
        }

        const series = seriesService.getAllSeries();
        return { series, show, showAllSeries }
    },
    components: {
        ContentItem
    }
    
}
</script>