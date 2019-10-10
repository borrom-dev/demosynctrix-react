import { observable, action } from "mobx";
import service from '../service/service';

class EditTopicStore {

    @observable isLoading = false;

    @observable formData = {
        topic: {},
        tab: 'write'
    }

    @action
    handleSelectedTabChange(value){
        this.formData.tab = value;
    }

    @action
    handleValueChange(name, value){
        this.formData.topic[name] = value;
    }

    @action
    getTopicById(id){
        this.isLoading = true;
       service.getTopicById(id)
        .then(action((res) => {
            this.formData.topic = res.data;
        }))
        .finally(action(() => this.isLoading = false));
    }

    @action
    updateTopic(){
        this.isLoading = true;
        const {topic} = this.formData;
        return service.updateTopic(topic)
        .finally(action(() => this.isLoading = false));
    }

    @action
    deleteTopic(){
        this.isLoading = true;
        const {topic} = this.formData;
        return service.deleteTopic(topic.id)
        .finally(action(() => this.isLoading = false));
    }

    @action
	updateTopicStatus(topic){
		this.isLoading = true;
		topic['status'] = !topic.status;
		return service.updateTopic(topic)
		.finally(action(() => this.isLoading = false));
	}
}

export default new EditTopicStore();