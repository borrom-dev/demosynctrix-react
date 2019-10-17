import { types, getEnv } from "mobx-state-tree";
import {ArticleStore} from './ArticleStore';
import { ViewStore } from "./ViewStore";
import {TopicStore} from './TopicStore';

export const Store = types
.model("store", {
	articleStore: types.optional(ArticleStore, {
		articles: {}
	}),

	topicStore: types.optional(TopicStore, {
		topics: []
	}),

	view: types.optional(ViewStore, {})
})
.views(self => ({
	get fetch() {
		return getEnv(self).fetch
	},
	get alert() {

	},
	get isLoading() {

	},
	get articles() {
		return self.articleStore.articles;
	},

	get topics() {
		return self.topicStore.getTopics;
	}
}))
.actions(self => ({
	afterCreate(){
		self.topicStore.loadTopics();
	}
}))