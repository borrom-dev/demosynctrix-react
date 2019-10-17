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
    }
}))
.actions(self => {

    const loadArticles = flow(function* loadArticles(){
        try{
            const json = yield self.store.fetch('articles');
        }catch(error){
            console.log(error)
        }
    })

    return {
        loadArticles
    }
})
