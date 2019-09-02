import client from './api';

const authService = {

	login (user){
		return new Promise((resolve, reject) => {
			 client.post("/login", user)
			 .then((res)=> {
					localStorage.setItem("token", res.data.token);
					resolve(res);
			 })
			 .catch((error)=> {
					reject(error);
			 })
		})
	}
}

export default authService;