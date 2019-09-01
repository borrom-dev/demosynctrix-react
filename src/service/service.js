import axios from 'axios'

const client = axios.create({
	baseURL: 'http://localhost:8080'
})

const Api = {
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

export default Api;