const authHelper = {
	isLoggedIn() {
		return localStorage.getItem("token") != null;
	}
}

export default authHelper;