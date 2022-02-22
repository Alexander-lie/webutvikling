<template>
    <section>
    <article>
        <h3>{{ title }}</h3>
        <img :src="getImage()">
        <p>Utgivelsesår: {{ release }}</p>
    </article>
    </section>
</template>

<script>
export default {
    props: {
        title: String,
        image: String,
        release: Number
    },
    setup(props){
        const getImage = () => {
            let image= require( `@/assets/images/${props.image}`);
            
            return image;
        }

        return { getImage }
    }
}
</script>

<style scoped>
    img{
        height: 400px;
    }
</style>
