import api from './api';

const Service = {
	getCars: () =>  api.get('/cars'),
	getPosts: () => api.get('/posts'),
	getUsers: () => api.get('/users'),
	getPages: () => api.get_free('/topics'),
	getRecentPosts: () => api.get('/articles/recent'),
	addArticle: (pageId, article) => api.post(`/articles/${pageId}`, article),
	getAllPostByTopic: (id) => api.get_free(`/articles?topic=${id}&page=0&size=20`),
	getAllArticles: (currentPage) => api.get_free(`/articles?page=${currentPage}&size=5`),
	updateArticle: (article) => api.put(`/articles/${1}`, article),
	deleteArticle: (article) => api.destroy('/articles', article),
	getArticleById: (id) => api.get(`/articles/id/${id}`)
}

export default Service;