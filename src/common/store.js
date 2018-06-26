import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const mainPage = {
    state: {
        mainPage: {
            title: 'title',
            text: '',
            id:0
        }
    },
    actions: {},
    mutations: {},
    getters: {
        mainPageData(state) {
            return state.mainPage;
        }
    },
}

const articles = {
    state: {
        articles: [
            {
                title: 'title',
                text: 'text'
            }
        ]
    }
    ,
    mutations: {
        ADD_ARTICLE(state, article) {
            state.articles.push(article)
        }
    },
    actions: {
        addArticle({ commit }, article) {
            commit('ADD_ARTICLE', article)
        }
    },
    getters: {
        articles(state) {
            return state.articles;
        }
    }
}

export const store = new Vuex.Store({
    modules: { articles, mainPage }
});

