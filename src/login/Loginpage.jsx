import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

@inject('authStore')
@observer
class LoginPage extends Component {

	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	onSubmit(e){
		e.preventDefault();
		const {username, password} = this.state;
		this.props.authStore.login({
			username:  username,
			password: password
		});
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	render(){
	const {authStore} = this.props;
	const { username, password} = this.state;
	console.log(authStore.token);
		return (
				<Router>
					<Route path="/login" render={()=>(
						authStore.token == null ? (
							<form onSubmit={this.onSubmit}>
								<input type="text" name="username" value={username} onChange={this.handleChange}/>
								<input type="password" name="password" value={password} onChange={this.handleChange}/>
								<input type="submit" value="submit"/>
							</form>
						) : (<Redirect to="/"/>)
					)}/>
				</Router>
		)
	}
}

export default LoginPage;