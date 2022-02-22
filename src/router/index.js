import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/views/HomePage.vue'
import MoviesPage from '../components/views/MoviesPage.vue'
import SeriesPage from '../components/views/SeriesPage.vue'

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: HomePage
    },
    {
        name: "MoviesPage",
        path: "/movies",
        component: MoviesPage
    },
    {
        name: "SeriesPage",
        path: "/series",
        component: SeriesPage
    }
];

const router = createRouter( {
    history: createWebHistory(),
    routes
} );

export default router;