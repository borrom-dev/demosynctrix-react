
import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';
import {Redirect} from 'react-router-dom';
import {isLogin} from '../helper';

@inject('authStore')
@observer
class RegisterPage extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	register = (e)=> {
		const {username, password} = this.state;
		this.props.authStore.register({username, password})
		.then(()=> this.props.history.replace('/'))
	}

	render(){
		const { username, password, confirmPassword} = this.state;
		if(isLogin()){
			return <Redirect to="/"/>
		}
		 return(
			  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
			    <Grid.Column style={{ maxWidth: 450 }}>
			      <Header as='h2' color='teal' textAlign='center'>
			        Create Account
			      </Header>
			      <Form size='large' onSubmit={this.register}>
			        <Segment stacked>
			          <Form.Input
									fluid icon='user'
									iconPosition='left'
									placeholder='E-mail address'
									name="username"
									value={username}
									onChange={this.handleChange} />
			          <Form.Input
			            fluid
			            icon='lock'
			            iconPosition='left'
			            placeholder='Password'
			            type='password'
									name="password"
									value={password}
									onChange={this.handleChange} />
								 <Form.Input
			            fluid
			            icon='lock'
			            iconPosition='left'
			            placeholder='Confirm Password'
			            type='password'
									name="confirmPassword"
									value={confirmPassword}
									onChange={this.handleChange} />
			          <Button color='teal' fluid size='large'>
			            Register
			          </Button>
			        </Segment>
			      </Form>
						<Message> Alreay have account? <a href='/login'>Login</a></Message>
			    </Grid.Column>
			  </Grid>
			 )}
}

export default RegisterPage;