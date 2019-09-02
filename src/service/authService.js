import Api from './api';

const authService = {

	login (user){
			return Api.post("/login", user)
	}
}

export default authService;