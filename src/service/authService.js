import client from './api';

const authService = {

	login (user){
			return client.post("/login", user)
	}
}

export default authService;