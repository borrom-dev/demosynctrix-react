import { types, flow, getParent } from "mobx-state-tree";

export const User = types.model("User", {
	id: types.number,
	username: types.string,
	password: types.optional(types.string, ""),
})

export const UserStore = types.model("UserStore", {
	isLoading: false,
	users: types.array(User)
})
.views(self => ({
	
	get store(){
		return getParent(self)
	},
	
	get selectedUser(){
		return self.users.length > 0 ? self.users[0] : {};
	}
}))
.actions(self => {
	
	const loadUsers = flow(function* loadUsers(){
		self.isLoading = true;
		try{
        	const users = yield self.store.fetch('/users')
			self.users.push(...users);
			self.isLoading = false;
		} catch(error){
			self.isLoading = false;
		}
	})

	return {
		afterCreate(){
			loadUsers()
		}
	}

})