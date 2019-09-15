import api from './api';

const Service = {
	getCars: () =>  api.get('/cars'),
	getPosts: () => api.get('/posts'),
	getUsers: () => api.get('/users'),
	getPages: () => api.get_free('/pages'),
	getRecentPosts: () => api.get('/posts/recent'),
	addArticle: (pageId, article) => api.post(`/posts/${pageId}`, article),
	getArticles: () => api.get('/posts'),
	getAllPostByTopic: (id) => api.get_free(`/posts/${id}/articles?page=0`),
	getAllArticles: () => api.get_free('/posts?page=1&size=2')
}

export default Service;