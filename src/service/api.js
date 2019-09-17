import axios from 'axios';
import {authHeader} from '../helper';

const client = axios.create({
	baseURL: 'http://localhost:8080',
})

const api = {
	get,
	post,
	get_free,
	put
}

function get_free(url){
	return client.get(url, {})
}
function get(url) {
	return client.get(url, authHeader())
}

function post(url, data) {
	return client.post(url, data, authHeader())
}

function put(url, data) {
	return client.put(url, data, authHeader())
}

export default api;
