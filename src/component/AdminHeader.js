import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Container, Image, Dropdown} from 'semantic-ui-react';

function Child({ match }) {
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
}

export function DashboardHeader() {
	return(
			<Menu borderless>
			<Container text>
				<Menu.Item>
					<Link to='/'>
						<Image size='mini' src='/logo.png' />
					</Link>
				</Menu.Item>
				<Menu.Item><Link to='/dashboard/users'>Users</Link></Menu.Item>
				<Menu.Item><Link to='/dashboard/page'>Pages</Link></Menu.Item>
				<Menu.Item><Link to='/dashboard/files'>Files</Link></Menu.Item>
					<Menu.Menu position='right'>
						<Dropdown text='Setting' pointing className='link item'>
							<Dropdown.Menu>
								<Dropdown.Item><Link to='/dashboard/profile'>Profile</Link></Dropdown.Item>
								<Dropdown.Item onClick={(props)=> {
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