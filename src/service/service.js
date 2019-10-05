import api from './api';

const Service = {
	getPosts: () => api.get_free('/posts'),
	getUsers: () => api.get('/users'),
	getPages: () => api.get_free('/topics'),
	getActivePages: () => api.get_free('/topics/active'),
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
	saveTopic: (topic) => api.post('/topics', topic),
	upload: (formData) => api.upload('/upload_file', formData),
	getFiles: () => api.get('/files')
}

export default Service;