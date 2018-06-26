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
    mutations: {
        LOAD_MAIN_PAGE(state) {
            fetch('/main').then(response => response.json())
                .then(data => {
                    state.mainPage.title = data.title;
                    state.mainPage.text = data.text;
                })
                .catch();
        }
    },
    actions: {
        loadMainPage({ commit }) {
            commit('LOAD_MAIN_PAGE');
        }
    },
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
    },
    mutations: {
        ADD_ARTICLE(state, article) {
            state.articles.push(article)
        },
        LOAD_ARTICLES(state) {
            fetch('/article').then((resp) => resp.json())
                .then((response) => {
                    state.articles.push(response);
                })
                .catch();
        }
    },
    actions: {
        addArticle({ commit }, article) {
            commit('ADD_ARTICLE', article);
        },
        loadArticles({ commit }) {
            commit('LOAD_ARTICLES');
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

