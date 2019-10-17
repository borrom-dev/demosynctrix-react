import React from 'react';
import {Menu, Input, List, Image, Item} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export const AdminTopbar = () => (
    <Menu fixed='top' borderless> 
        <Menu.Item>
            <Item.Header as='h3'>
                <Link to='/'>Demotrix</Link>
            </Item.Header>
        </Menu.Item>

        <Menu.Item>
            <Input icon={{name: 'search', link: true}} placeholder='Search...'/>
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item onClick={() => {}}>
                <List.Content style={{marginRight: '10px'}} verticalAlign='bottom'>Borrom Sync</List.Content>      
                <Image
                    avatar
                    src='https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
            </Menu.Item>
        </Menu.Menu>
    </Menu>
)