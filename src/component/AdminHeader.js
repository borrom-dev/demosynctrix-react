import React from 'react';
import {Link, Route} from 'react-router-dom';
import {Menu, Container, Image, Dropdown} from 'semantic-ui-react';
import UsersPage from '../dashboard/UsersPage';
import PostPage from '../dashboard/PostPage';

export default class  DashboardHeader extends React.Component {

	navigateTo = (url) => {
		this.props.history.replace(`/dashboard${url}`)
	}

	user(){
		return (<p>User</p>)
	}

	render(){
		return(
			<div>
				<Menu borderless>
				<Container text>
					<Menu.Item>
						<Link to='/'>
							<Image size='mini' src='/logo.png' />
						</Link>
					</Menu.Item>
					<Menu.Item onClick={()=> this.navigateTo('/users')}>Users</Menu.Item>
					<Menu.Item onClick={()=>this.navigateTo('/pages')}>Pages</Menu.Item>
					<Menu.Item onClick={()=> this.navigateTo('/files')}>Files</Menu.Item>
						<Menu.Menu position='right'>
							<Dropdown text='Setting' pointing className='link item'>
								<Dropdown.Menu>
									<Dropdown.Item><Link to='/dashboard/profile'>Profile</Link></Dropdown.Item>
									<Dropdown.Item onClick={()=> {
										localStorage.removeItem('token');
										this.props.history.replace('/')
									}}>Logout</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Menu.Menu>
					</Container>
				</Menu>
					<Route path='/dashboard/users' component={UsersPage}/>
					<Route path='/dashboard/pages' component={PostPage}/>
					<Route path='/dashboard/files' render={()=> {
					return (<p>Files</p>)
				}}/>
				</div>
		)
	}
}