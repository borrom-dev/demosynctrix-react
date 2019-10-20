import { types, getEnv } from "mobx-state-tree";
import {ArticleStore} from './ArticleStore';
import { ViewStore } from "./ViewStore";
import {TopicStore} from './TopicStore';
import { UserStore } from "./UserStore";
import { AuthStore } from "./AuthStore";
import {FileStore} from './FileStore';

export const Store = types
.model("store", {

	articleStore: types.optional(ArticleStore, {
		articles: []
	}),

	topicStore: types.optional(TopicStore, {
		topics: []
	}),

	userStore: types.optional(UserStore, {
		users: []
	}),

	authStore: types.optional(AuthStore, {
		
	}),

	fileStore: types.optional(FileStore, {
		files: []
	}),

	view: types.optional(ViewStore, {})
})
.views(self => ({

	get history(){
		return getEnv(self).history
	},

	get post(){

		return getEnv(self).post
	},

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

	get users(){
		return self.userStore.users;
	},

	get selectedUser(){
		return self.userStore.selectedUser;
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