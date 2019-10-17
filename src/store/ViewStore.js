import { types, getParent } from "mobx-state-tree"

export const ViewStore = types
.model({
    page: 'articles',
    "selectedId": ''
})
.views(self => ({
    get store(){
        return getParent(self)
    }
}))
.actions(self => ({
    openHomePage(){
        self.page = "/";
        self.selectedId = "";
    }
}))