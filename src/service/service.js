import api from './api';

const Service = {
	getCars: () =>  api.get('/cars'),
	getPosts: () => api.get('/posts'),
	getUsers: () => api.get('/users'),
	getPages: () => api.get_free('/pages'),
	getRecentPosts: () => api.get('/posts/recents')
}

export default Service;