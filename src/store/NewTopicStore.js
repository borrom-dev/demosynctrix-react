import { observable, action } from "mobx";
import service from '../service/service';

class NewTopicStore {

    @observable isLoading = false;

    @observable formData = {
        topic: {},
        tab: 'write'
    }

    @action
    handleSelectedTabChange(value){
        this.formData.tab = value;
    }
}

export default new NewTopicStore();