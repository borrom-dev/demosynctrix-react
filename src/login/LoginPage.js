import React, { Component } from "react";
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Redirect, Link } from "react-router-dom";
import { isLogin } from '../helper';
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
		.then(() => this.props.history.replace('/'));
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	render(){
		const { username, password} = this.state;
		if(isLogin()){
			return <Redirect to="/"/>
		}
		return (
			<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
			  <Grid.Column style={{ maxWidth: 450 }}>
	      <Header as='h2' color='teal' textAlign='center'>
	       	Login to your account
	      </Header>
							<Form size='large' onSubmit={this.onSubmit}>
							<Segment stacked>
									<Form.Input
									fluid
									icon='user'
									iconPosition='left'
									placeholder='E-mail address'
									name="username"
									value={username}
									onChange={this.handleChange}/>
									<Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name="password" value={password} onChange={this.handleChange}/>
								 <Button type="submit" color='teal' fluid size='large'>Login</Button>
							 </Segment>
							</Form>
						<Message> New to user?<Link to='/register'> Sign Up</Link></Message>
				</Grid.Column>
			</Grid>
		)
	}
}

export default LoginPage;