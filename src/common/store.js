import Vue from "vue";
import Vuex from "vuex";
import { router } from "./../common/routerModule.js";
import {
  setCookie,
  getCookie,
  deleteCookie
} from "./../common/cookie.service.js";

Vue.use(Vuex);

export const commonHeaders = new Headers({
  "Content-Type": "application/json",
  userToken: getCookie("userToken") ? getCookie("userToken") : ""
});

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
    userId: "",
    login: "",
    errorMessage: "",
    userToken: ""
  },
  mutations: {
    LOG_ON(state, credentials) {
      fetch("http://localhost:3000/logon", {
        method: "post",
        mode: "cors",
        body: JSON.stringify(credentials),
        headers: commonHeaders
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          state.isLogged = !!data;
          state.userId = data.id;
          state.login = data.login;
          state.userToken = data.userToken;
          setCookie("userToken", data.userToken);
        })
        .catch(error => {
          state.isLogged = false;
          state.errorMessage = error.message;
        });
    },
    LOG_OUT(state) {
      state.isLogged = false;
      state.userId = "";
      state.login = "";
      state.errorMessage = "";
      deleteCookie("userToken");
    },
    SET_STORE_TOKEN(state) {
      state.userToken = getCookie("userToken");
    }
  },
  actions: {
    setStoreToken({ commit }) {
      commit("SET_STORE_TOKEN");
    },
    logOn({ commit }, credentials) {
      commit("LOG_ON", credentials);
    },
    logOut({ commit }) {
      commit("LOG_OUT");
    }
  },
  getters: {
    isLogged(state) {
      return state.isLogged;
    },
    userData(state) {
      return {
        userName: state.login,
        userId: state.userId
      };
    },
    authError(state) {
      return state.errorMessage;
    }
  }
};

const registration = {
  state: {
    registrationData: {
      newLogin: "",
      newPassword: "",
      newPasswordConfirmation: "",
      registrationError: false,
      registrationOk: false
    }
  },
  mutations: {
    REGISTER_NEW_USER(state, userData) {
      fetch("http://localhost:3000/register", {
        method: "post",
        mode: "cors",
        body: JSON.stringify(userData),
        headers: commonHeaders
      })
        .then(response => {
          return response.json();
        })
        .then(() => {
          state.registrationData.registrationOk = true;
          state.registrationData.registrationError = false;
        })
        .then(() => {
          router.push("/");
        });
    }
  },
  actions: {
    registerNewUser({ commit }, userData) {
      commit("REGISTER_NEW_USER", userData);
    }
  },
  getters: {
    registrationData(state) {
      return state.registrationData.registrationData;
    },
    registrationOk(state) {
      return state.registrationData.registrationOk;
    },
    registrationError(state) {
      return state.registrationData.registrationError;
    }
  }
};

const separateArticle = {
  state: {
    article: {},
    loadError: false
  },
  mutations: {
    LOAD_ARTICLE(state, id) {
      fetch(`http://localhost:3000/articles/${id}`, {
        mode: "cors",
        headers: commonHeaders
      })
        .then(resp => resp.json())
        .then(response => {
          state.article = response;
        });
    },
    CLEAR_CURRENT_ARTICLE(state) {
      state.article = {};
    },
    UPDATE_ARTICLE_DATA_FROM_FORM(state, data) {
      state.article = data;
    }
  },
  actions: {
    loadSeparateArticle({ commit }, id) {
      commit("LOAD_ARTICLE", id);
    },
    clearCurrentArticle({ commit }) {
      commit("CLEAR_CURRENT_ARTICLE");
    },
    updateArticleDataFromForm({ commit }, data) {
      commit("UPDATE_ARTICLE_DATA_FROM_FORM", data);
    }
  },
  getters: {
    articleData(state) {
      return state.article;
    },
    articleLoadError(state) {
      return state.loadError;
    }
  }
};

const articles = {
  state: {
    articles: [],
    loadError: false
  },
  mutations: {
    ADD_ARTICLE(state, article) {
      fetch("http://localhost:3000/articles/new", {
        method: "post",
        mode: "cors",
        headers: commonHeaders,
        body: JSON.stringify(article)
      })
        .then(response => {
          return response.json();
        })
        .then(id => {
          router.push(`/article/${id}`);
        });
    },
    UPDATE_ARTICLE(state, article) {
      fetch("http://localhost:3000/articles/update", {
        method: "post",
        mode: "cors",
        headers: commonHeaders,
        body: JSON.stringify(article)
      })
        .then(response => {
          return response.json();
        })
        .then(id => {
          router.push(`/article/${id}`);
        });
    },
    LOAD_ARTICLES(state) {
      fetch("http://localhost:3000/articles", {
        mode: "cors",
        headers: commonHeaders
      })
        .then(resp => resp.json())
        .then(response => {
          state.articles = response;
        })
        .catch();
    },
    REMOVE_ARTICLE(state, id) {
      fetch("http://localhost:3000/articles/remove/", {
        method: "post",
        mode: "cors",
        headers: commonHeaders,
        body: JSON.stringify({ id: id })
      })
        .then(resp => resp.json())
        .then(response => {
          state.articles = response;
          state.article = {};
        })
        .catch();
    }
  },
  actions: {
    addArticle({ commit }, article) {
      commit("ADD_ARTICLE", article);
    },
    updateArticle({ commit }, article) {
      commit("UPDATE_ARTICLE", article);
    },
    loadArticles({ commit }) {
      commit("LOAD_ARTICLES");
    },
    removeArticle({ commit }, id) {
      commit("REMOVE_ARTICLE", id);
    }
  },
  getters: {
    articles(state) {
      return state.articles;
    },
    articlesLoadError(state) {
      return state.articlesLoadError;
    }
  }
};

export const store = new Vuex.Store({
  modules: {
    articles,
    mainPage,
    authentification,
    registration,
    separateArticle
  }
});
