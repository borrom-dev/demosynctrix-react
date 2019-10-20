import {types} from 'mobx-state-tree';


export const File = types.model("Files", {

})

export const FileStore = types.model("FileStore", {
    files: types.array(File)
})