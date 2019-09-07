import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Container, Image, Dropdown} from 'semantic-ui-react';
export function DashboardHeader() {
	return(
		<Menu borderless>
		<Container text>
			<Menu.Item as='a'>
				<Image size='mini' src='/logo.png' />
			</Menu.Item>
			<Menu.Item as='a'><Link to='/dashboard/users'>Users</Link></Menu.Item>
			<Menu.Item as='a'><Link to='/dashboard/pages'>Pages</Link></Menu.Item>
			<Menu.Item as='a'><Link to='dashboard/files'>Files</Link></Menu.Item>
				<Menu.Menu position='right'>
					<Dropdown text='Setting' pointing className='link item'>
						<Dropdown.Menu>
							<Dropdown.Item><Link to='/dashboard/profile'>Profile</Link></Dropdown.Item>
							<Dropdown.Item><Link to='/dashboard/logout'>Logout</Link></Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Menu.Menu>
		</Container>
	</Menu>
	)
}