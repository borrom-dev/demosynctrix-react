import React from 'react';
import { Menu, Icon, Item, List, Image, Responsive, Button, Input } from 'semantic-ui-react';
import './index.css'
import { MenuTo } from '../component/MenuTo';
import {Link} from 'react-router-dom';
// import ArticlesComponent from './article/ArticleComponent';
// import TopicComponent from './topic/TopicComponent';
// import UserComponent from './user/UsersComponent';
// import DashboardPage from './DashboardPage';
// import FileComponent from '../auth/file/FileComponent';

class DashboardComponent extends React.Component {



    handelLgout = () => {
        
    }

    render(){
        const {location} = this.props.history;
        const {pathname} = location;
        return (
            <div className='dashboard-container'>
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
            <Menu fixed='top' borderless>
                <Menu.Item style={{width: '16%'}}>
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
            <Responsive style={{ margin: '2rem', paddingTop: '100px', paddingLeft: '18%'}}>{this.props.children}</Responsive>
            </div>
        )
    }
}

export default DashboardComponent;