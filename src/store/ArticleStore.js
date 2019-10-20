import {types, flow, getParent } from 'mobx-state-tree';

const Article = types.model("Article", {
    id: types.number,
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
    isLoading: true,
    articles: types.array(Article)
}).views(self => ({

    get store(){
        return getParent(self)
    },

    get selected(){
        return {}
    }
}))
.actions(self => {

    const loadArticles = flow(function* loadArticles(){
        try {
            const {data} = yield self.store.fetch('/articles');
            self.articles.push(...data);
        }catch(error){
            console.log(error)
        }
    })

    return {
        afterCreate(){
            loadArticles()
        }
    }
})
