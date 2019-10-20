import {types, flow, getParent } from 'mobx-state-tree';

const Article = types.model("Article", {
    id: types.identifierNumber,
    title: types.string,
    slug: types.string,
    description: types.string,
    body: types.string,
    published: types.boolean,
    create_at: types.string,
    topic_id: types.number
})

export const ArticleStore = types
.model("ArticleStore", {
    isLoading: false,
    articles: types.array(Article),
    selectedIndex: 0,
    isFocus: false
}).views(self => ({

    get store(){
        return getParent(self)
    },

    get selected(){
        return {}
    },

    get focus() {
        return self.isFocus;
    },
    
    get selectedArticle(){
        return self.articles.length > 0 ? self.articles[self.selectedIndex] : {}
    }
}))
.actions(self => {


    function setSelectedIndex(index){
        self.selectedIndex = index;
    }

    function setFocus(value){
        self.isFocus = value;
    }

    const loadArticles = flow(function* loadArticles(){
        self.isLoading = true;
        try {
            const {data} = yield self.store.fetch('/articles');
            self.articles.push(...data);
            self.selectedArticle = 1
            self.isLoading = false;
        }catch(error){
            console.log(error)
            self.isLoading = false;
        }
    })

    return {
        afterCreate(){
            loadArticles()
        },
        setSelectedIndex,
        setFocus
    }
})
