import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import {Form, Button, Container} from 'semantic-ui-react';
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
	const token = authStore.token;
	const { username, password} = this.state;
		return (
						token == null ? (
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
						) : (<Redirect to="/"/>)
		)
	}
}

export default LoginPage;