import api from './api';

const authService = {
	login: (user) => api.post("/login", user).then((res) => localStorage.setItem('token', res.data.token))
}
export default authService;