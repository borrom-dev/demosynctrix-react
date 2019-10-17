import React from 'react';
import {MenuTo} from './index';
import {List, Menu, Image, Icon, Button} from 'semantic-ui-react';

export const AdminSidebar = ({pathname}) => (
    <Menu borderless fixed='left' vertical>
        <List horizontal>
            <List.Item style={{marginBottom: '2em'}}>
                <Image avatar src='https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
                <List.Content>
                    <List.Header>Borrom Sync</List.Header>Developer
                </List.Content>
            </List.Item>
        </List> 
        <MenuTo active={pathname === '/dashboard' ? true: false} to='/dashboard'>
            Dashboard
            <Icon name='dashboard'/>
        </MenuTo>
        <MenuTo active={pathname === '/dashboard/users' ? true: false} to='/dashboard/users'>
            Users
            <Icon name='user'/>
        </MenuTo>
        <MenuTo active={pathname === '/dashboard/pages' ? true: false} to='/dashboard/pages'>
            Pages
            <Icon name='edit'/>
        </MenuTo>
        <MenuTo active={pathname === '/dashboard/articles' ? true: false} to='/dashboard/articles'>
            Articles
            <Icon name='file text'/>
        </MenuTo>
        <MenuTo active={pathname === '/dashboard/files' ? true: false} to='/dashboard/files'>
            Files
            <Icon name='folder open'/>
        </MenuTo>
        <Menu.Item>
            <Button primary fluid>Create</Button>
        </Menu.Item>
        </Menu>
)