import { observable, action } from "mobx";
import service from '../service/service';

class NewTopicStore {

    @observable isLoading = false;

    @observable formData = {
        topic: {},
        tab: 'write'
    }

    @action
    reset(){
        this.isLoading = false;
        this.formData = {
            topic: {},
            tab: 'write'
        }
    }

    @action
    handleValueChange(name, value){
        this.formData.topic[name] = value;
    }

    @action
    handleSelectedTabChange(value){
        this.formData.tab = value;
    }

    @action
    saveTopic(){
        this.isLoading = true;
        const {topic} = this.formData;
        return service.saveTopic(topic)
        .finally(action(() => this.reset()));
    }
}

export default new NewTopicStore();