import axios from 'axios'

const client = axios.create({
	baseURL: 'http://localhost:8080'
})

const Api = {
	login (user){
		return client.post("/login", user);
	}
};

export default Api;