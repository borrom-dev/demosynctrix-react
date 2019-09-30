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
	getArticleById: (id) => api.get(`/articles/id/${id}`),
	getTopicById: (id) => api.get(`topics/${id}`),
	updateTopic: (topic) => api.put(`/topics/${topic.id}`, topic),
	deleteTopic: (id) => api.destroy(`/topics/${id}`, {}),
	saveTopic: (topic) => api.post('/topics', topic)
}

export default Service;