import React, { Component } from "react";
import {Form, Button, Container} from 'semantic-ui-react';
import { Redirect } from "react-router-dom";
import authHelper from '../helper/login_helper';
import { inject, observer } from "mobx-react";

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
		const user = {username, password};
		this.props.authStore.login(user)
		.then(() => this.props.history.push('/'));
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}
	render(){
		const { username, password} = this.state;

		if(authHelper.isLoggedIn()){
			return <Redirect to="/"/>
		}
		return (
						<Container text>
							<Form onSubmit={this.onSubmit}>
							 <Form.Field>
							 		<label>Username:</label>
									 <input placeholder="Username" name="username" value={username} onChange={this.handleChange}/>
							 </Form.Field>
							 <Form.Field>
								 <label>Password:</label>
								 <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange}/>
							 </Form.Field>
							 <Button type="submit">Login</Button>
							</Form>
						</Container>
		)
	}
}

export default LoginPage;