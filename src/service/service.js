import api from './api';

const Service = {
	getCars: () =>  api.get('/cars'),
	getPosts: () => api.get('/posts'),
	getUsers: () => api.get('/users'),
	getPages: () => api.get_free('/topics'),
	getRecentArticle: () => api.get('/articles/recent'),
	saveArticle: (article) => api.post(`/articles/${article.topic_id}`, article),
	getAllPostByTopic: (id) => api.get_free(`/articles/${id}?page=0&size=20`),
	getAllArticles: (currentPage) => api.get_free(`/articles?page=${currentPage}&size=10`),
	updateArticle: (article) => api.put(`/articles/${article.topic_id}`, article),
	deleteArticle: (article) => api.destroy('/articles', article),
	getArticleById: (id) => api.get(`/articles/id/${id}`)
}

export default Service;