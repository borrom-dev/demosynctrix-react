import axios from 'axios';
import {authHeader} from '../helper';

const client = axios.create({
	baseURL: 'https://api.demotrix.com',
})

const api = {
	get,
	post,
	get_free,
	put,
	destroy
}

const shouldLogout = (error) => {
	console.log(error);
	// const {status} = error.response;
	// if(status && status === 401){
		// localStorage.removeItem('token');	
	// }
	return Promise.reject(error);
}

function get_free(url){
	return client.get(url, {})
}
function get(url) {
	return client.get(url, authHeader())
	.catch(shouldLogout);
}

function post(url, data) {
	return client.post(url, data, authHeader())
	.catch(shouldLogout);
}

function put(url, data) {
	return client.put(url, data, authHeader())
	.catch(shouldLogout);
}

function destroy(url, data){
	const {headers} = authHeader();
	return client.delete(url, {headers, data})
	.catch(shouldLogout)
}

export default api;
