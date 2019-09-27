import api from './api';

const authService = {
	login: (user) => api.post("/auth/sign_in", user).then((res) => {
		const {token} = res.data;
		localStorage.setItem('token', token)
	}),
	register: (user) => api.post('/auth/sign_up', user).then((res) => localStorage.setItem('token', res.data.token))
}
export default authService;