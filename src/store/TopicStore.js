import {types, getParent, flow } from 'mobx-state-tree';
import {values} from 'mobx';

export const Topic = types.model("Topic", {
    id: types.number,
    name: types.string,
    url: types.string,
    template: types.string,
    content: types.string,
    status: types.boolean,
    createdAt: types.string,
    position: types.number
})

export const TopicStore = types
.model("TopicStore", {
    isLoading: false,
    topics: types.array(Topic)
})
.views(self => ({

    get store(){
        return getParent(self);
    },

    get getTopics(){
       return values(self.topics);
    }
}))
.actions(self => {

    const loadTopics = flow(function* loadTopics(){
        self.isLoading = true;
        const topics = yield self.store.fetch('/topics')
        self.topics.push(...topics);
    })

    return {
        loadTopics
    }
})
