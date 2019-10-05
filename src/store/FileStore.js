import { observable, action } from "mobx";
import service from '../service/service';

class FileStore {

    @observable isLoading = false;
    @observable files = []
    @observable formData = new FormData();
   

    @action
    loadFiles(){
        this.isLoading = true;
        service.getFiles()
        .then(action((res) => {
            this.files = res.data;
        }))
        .finally(action(() => this.isLoading = false));
    }

    @action
    upload(){
        this.isLoading = true;
        service.upload(this.formData)
        .then(() => service.getFiles())
        .then(action((res) => {
            this.files = res.data;
        }))
        .finally(action(() => this.isLoading = false));
    }

}

export default new FileStore();