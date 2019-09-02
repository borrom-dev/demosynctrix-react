import axios from 'axios';
const client = axios.create({
	baseURL: 'http://localhost:8080'
})

const Api = {
	get: (url)=>  client.get(url, {
			headers: {
				'Authorization': localStorage.getItem('token')
			}
		}),
	post: (url, data) =>
			client.post(url, data, {
				headers: {
					'Authorization': localStorage.getItem('token')
				}
		})
}

export default Api;
