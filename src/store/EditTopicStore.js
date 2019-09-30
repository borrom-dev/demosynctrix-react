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
    getTopicById(id){
        this.isLoading = true;
        service.getTopicById(id)
        .then(action((res) => {
            this.formData.topic = res.data;
        }))
        .finally(action(() => this.isLoading = false));
        
    }
}

export default new EditTopicStore();