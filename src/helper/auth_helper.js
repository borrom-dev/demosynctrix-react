export function authHeader() {
	let token = localStorage.getItem('token');
	if(token){
		return  {
			headers: {
				'Authorization': `Bearer ${token}`
			}
	}
	}else {
		return {};
	}
}

export function isLogin() {
	 return localStorage.getItem('token') != null
}

export function clearToken() {
	localStorage.removeItem('token');
}
