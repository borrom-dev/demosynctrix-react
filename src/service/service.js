import api from './api';

const Service = {
	getCars: () =>  api.get('/cars'),
	getPosts: () => api.get('/posts'),
	getUsers: () => api.get('/users')
}

export default Service;