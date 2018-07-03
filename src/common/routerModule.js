import Vue from "vue";
import VueRouter from 'vue-router';
import MainPage from '../components/MainPage.vue';
import ArticleForm from '../components/ArticleForm.vue';
import ArticleDetail from '../components/ArticleDetail.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainPage
        },
        {
            path: '/article/new',
            name: 'add-article',
            component: ArticleForm
        },
        {
            path: '/article/:id',
            name: 'article-detail',
            component: ArticleDetail
        }
    ]
})