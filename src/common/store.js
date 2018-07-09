import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const mainPage = {
    state: {
        mainPage: {
            title: "",
            text: ""
        }
    },
    mutations: {
        LOAD_MAIN_PAGE(state) {
            fetch("http://localhost:3000/main", { mode: "cors" })
                .then(response => response.json())
                .then(data => {
                    state.mainPage.title = data.title;
                    state.mainPage.text = data.text;
                })
                .catch();
        }
    },
    actions: {
        loadMainPage({ commit }) {
            commit("LOAD_MAIN_PAGE");
        }
    },
    getters: {
        mainPageData(state) {
            return state.mainPage;
        }
    }
};

const authentification = {
    state: {
        isLogged: false,
        userId: '',
        username: ''
    },
    mutations: {
        LOG_ON(state, credentials) {
            fetch("http://localhost:3000/logon", {
                method: "post",
                mode: "cors",
                body: JSON.stringify(credentials),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    state.isLogged = !!data;
                    state.id = data.id;
                    state.userName = data.userName;
                });
        }
    },
    actions: {
        logOn({ commit }, credentials) {
            commit("LOG_ON", credentials);
        }
    },
    getters: {
        isLogged(state) {
            return state.isLogged;
        },
        userData(state) {
            return {
                userName: state.userName,
                userId: state.userId
            };
        }
    }
};

const articles = {
    state: {
        articles: []
    },
    mutations: {
        ADD_ARTICLE(state, article) {
            fetch("http://localhost:3000/article/new", {
                method: "post",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify(article)
            })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    state.articles.push(data);
                });
        },
        LOAD_ARTICLES(state) {
            fetch("http://localhost:3000/articles", { mode: "cors" })
                .then(resp => resp.json())
                .then(response => {
                    state.articles = response;
                })
                .catch();
        }
    },
    actions: {
        addArticle({ commit }, article) {
            commit("ADD_ARTICLE", article);
        },
        loadArticles({ commit }) {
            commit("LOAD_ARTICLES");
        }
    },
    getters: {
        articles(state) {
            return state.articles;
        }
    }
};

export const store = new Vuex.Store({
    modules: { articles, mainPage, authentification }
});
