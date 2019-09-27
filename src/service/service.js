import api from './api';

const Service = {
	getCars: () =>  api.get('/cars'),
	getPosts: () => api.get('/posts'),
	getUsers: () => api.get('/users'),
	getPages: () => api.get_free('/pages'),
	getRecentPosts: () => api.get('/posts/recent'),
	addArticle: (pageId, article) => api.post(`/posts/${pageId}`, article),
	getAllPostByTopic: (id) => api.get_free(`/posts?topic=${id}&page=0&size=20`),
	getAllArticles: (currentPage) => api.get_free(`/posts?page=${currentPage}&size=5`),
	updateArticle: (article) => api.put('/posts', article),
	deleteArticle: (article) => api.destroy('/posts', article)
}

export default Service;