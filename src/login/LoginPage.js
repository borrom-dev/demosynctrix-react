import React, { Component } from "react";
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Redirect, Link } from "react-router-dom";
import { isLogin } from '../helper';
import { inject, observer } from "mobx-react";

// @inject('store')
// @observer()
// class LoginPage extends Component {
	
// 	onSubmit =(e) => {
// 		// e.preventDefault();
// 		// const {username, password} = loginForm;
// 		// this.props.authStore.login({username, password})
// 		// .then(() => this.props.history.replace('/dashboard'));
// 	}

// 	handleChange = (e)=> {
// 		// const { name, value } = e.target;
// 		// loginForm.setField(name, value);
// 	}

// 	render(){
// 		if(isLogin()){
// 			return <Redirect to="/dashboard"/>
// 		}
// 		return (
// 			<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
// 			  {/* <Grid.Column style={{ maxWidth: 450 }}>
// 				<Header as='h2' color='teal' textAlign='center'>
// 				Login to your account
// 				</Header>
// 				<Form size='large' onSubmit={this.onSubmit}>
// 				<Segment stacked>
// 					<Form.Input
// 						fluid
// 						icon='user'
// 						iconPosition='left'
// 						placeholder='E-mail address'
// 						name="username"
// 						value={loginForm.username}
// 						onChange={this.handleChange}/>
// 					<Form.Input
// 						fluid
// 						icon='lock'
// 						iconPosition='left' 
// 						placeholder='Password' 
// 						type='password' name="password" 
// 						value={loginForm.password} onChange={this.handleChange}/>
// 					<Button type="submit" color='teal' fluid size='large'>Login</Button>
// 					</Segment>
// 				</Form>
// 			</Grid.Column> */}
// 		</Grid>
// 		)
// 	}
// }


const LoginPage = inject('store')(
	observer(({store: {authStore}}) => {

		return(
			<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450 }}>
						<Header as='h2' color='teal' textAlign='center'>
						Login to your account
						</Header>
						<Form size='large' onSubmit={authStore.login}>
						 <Segment stacked>
							<Form.Input
							fluid
								icon='user'
								iconPosition='left'
								placeholder='E-mail address'
								name="username"
								onChange={(e, targt) => authStore.updateUserField(targt)}
								value={authStore.currentUser.username}/>
							<Form.Input
								fluid
								icon='lock'
								iconPosition='left' 
								placeholder='Password'
								onChange={(e, target) => authStore.updateUserField(target)} 
								type='password' name="password" 
								value={authStore.currentUser.password}/>
							<Button type="submit" color='teal' fluid size='large'>Login</Button>
							</Segment>
						</Form>
				</Grid.Column> 
			</Grid>
		)
	})
)

export default LoginPage;