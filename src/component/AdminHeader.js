import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Container, Image, Dropdown} from 'semantic-ui-react';

export const  AdminHeader = (props) =>{

	const navigateTo = (url) => {
		props.history.push(url)
	}
	
	return(
		<Menu borderless>
			<Container>
				<Menu.Item>
					<Link to='/dashboard'> <Image size='mini' src='/logo.png' /> </Link>
				</Menu.Item>
				<Menu.Item onClick={() => navigateTo('/dashboard/users')}>Users</Menu.Item>
				<Menu.Item onClick={() => navigateTo('/dashboard/topics')}>Topics</Menu.Item>
				<Menu.Item onClick={() => navigateTo('/dashboard/articles')}>Artcles</Menu.Item>
				<Menu.Item onClick={() => navigateTo('/dashboard/files')}>Files</Menu.Item>
					<Menu.Menu position='right'>
						<Dropdown text='Setting' pointing className='link item'>
							<Dropdown.Menu>
								<Dropdown.Item><Link to='/profile'>Profile</Link></Dropdown.Item>
								<Dropdown.Item onClick={()=> {
									localStorage.removeItem('token');
									props.history.replace('/')
								}}>Logout</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Menu.Menu>
			</Container>
		</Menu>
	)
	
}