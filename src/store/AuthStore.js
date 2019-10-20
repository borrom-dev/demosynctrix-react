import {User} from './UserStore';
import { types, flow, getParent } from 'mobx-state-tree';

export const AuthStore = types.model("AuthStore", {
	currentUser:  types.optional(User, {
		id: 0,
		username: '',
		password: ''
	})
})
.views(self => ({
	
	get store(){
		return getParent(self)
	},
}))
.actions(self => {
	const login = flow(function * login(){
		try {
		self.isLoading = true;
		const {token} =  yield self.store.post('/auth/sign_in', self.currentUser);
		localStorage.setItem('token', token)
		self.currentUser.password = ''
		self.store.view.openDashboard();
		console.log(token);
		} catch(error){
			console.log(error);
		}
	})

	function updateUserField(target){
		const {name, value} = target;
		self.currentUser[name] = value;
	}

	return {
		login,
		updateUserField
	}
})