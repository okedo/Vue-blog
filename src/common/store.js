export let store = {
    debug: true,
    state: {
        mainPage: {},
        articles: [],
        sessionDate: new Date(),
        userToken: ''
    },
    loadMainPageData(page = 1) {
        fetch('/main/' + page)
            .then(function (response) {
                this.state.MainPage.text = response.text;
                this.state.MainPage.title = response.title;
            })
    },
    getMainPageData(){
        return this.state.mainPage;
    }
};