import axios from 'axios';
import {authHeader} from '../helper';

const client = axios.create({
	baseURL: 'http://localhost:8080',
})

const api = {
	get,
	post
}

function get(url) {
	return client.get(url, authHeader())
}

function post(url, data) {
	return client.post(url, data, authHeader())
}

export default api;
