import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const mainPage = {
    state: {
        mainPage: {
            title: 'Main title',
            text: 'Main text',
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
                id: 1,
                title: 'Article title',
                text: 'Article text'
            },
            {
                id: 2,
                title: 'Article title2',
                text: 'Article text2'
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

