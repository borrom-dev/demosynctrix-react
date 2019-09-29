import { observable, action } from "mobx";
import service from "../service/service";

class ArticleStore {

	@observable topicsOptions = []

	@observable articles = {
        data: []
	};
	
	@observable isLoading = false;

	@observable currentArticle = {
		topic_id: undefined,
	}

	@observable form = {
		tab: 'Write'
	}

	@action
	getArticleById(id){
		this.isLoading = true;
		service.getPages()
		.then(action((res) => {
			this.topicsOptions = [];
			res.data.map((topic, id) => {
				if(topic.url !== '/'){
					this.topicsOptions.push({key: id, text: topic.name, value: topic.id})
				}
			})
			return service.getArticleById(id)
		}))
		.then(action((res)=> {
			this.currentArticle = res.data;
		}))
		.finally(action(()=> this.isLoading = false))
	}

}

export default new ArticleStore();

