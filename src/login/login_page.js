import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject('authStore')
@observer
class LoginPage extends Component {

	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(event){
		this.props.authStore.login({
			username: 'admins',
			password: 'admin'
		});
		event.preventDefault();
	}

	render(){
	const {authStore} = this.props;
		return (
			<div>
			<p>{authStore.user.token}</p>
					<form onSubmit={this.onSubmit}>
						<input type="text" name="username"/>
						<input type="password" name="password"/>
						<input type="submit" value="submit"/>
					</form>
			</div>
		)
	}
}

export default LoginPage;