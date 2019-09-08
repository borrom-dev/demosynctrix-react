import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Container, Image, Dropdown} from 'semantic-ui-react';

export default class  DashboardHeader extends React.Component {

	navigateTo = (url) => {
		this.props.history.push(url)
	}

	user(){
		return (<p>User</p>)
	}

	render(){
		return(
				<Menu borderless>
				<Container>
					<Menu.Item>
						<Link to='/dashboard'>
							<Image size='mini' src='/logo.png' />
						</Link>
					</Menu.Item>
					<Menu.Item onClick={() => this.navigateTo('/users')}>Users</Menu.Item>
					<Menu.Item onClick={() => this.navigateTo('/pages')}>Pages</Menu.Item>
					<Menu.Item onClick={() => this.navigateTo('/articles')}>Artcles</Menu.Item>
					<Menu.Item onClick={() => this.navigateTo('/files')}>Files</Menu.Item>
						<Menu.Menu position='right'>
							<Dropdown text='Setting' pointing className='link item'>
								<Dropdown.Menu>
									<Dropdown.Item><Link to='/profile'>Profile</Link></Dropdown.Item>
									<Dropdown.Item onClick={()=> {
										localStorage.removeItem('token');
										this.props.history.replace('/')
									}}>Logout</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Menu.Menu>
					</Container>
				</Menu>
		)
	}
}