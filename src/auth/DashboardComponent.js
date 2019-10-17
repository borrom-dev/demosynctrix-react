import React from 'react';
import { Menu, Icon, Item, List, Image, Responsive, Button, Input } from 'semantic-ui-react';
import './index.css'
import { AdminSidebar, AdminTopbar } from '../component';

class DashboardComponent extends React.Component {

    handelLgout = () => {
        
    }
    render(){
        const {location} = this.props.history;
        const {pathname} = location;
        return (
            <div className='dashboard-container'>
             <AdminSidebar pathname={pathname}/>
             <AdminTopbar />   
            <Responsive style={{ margin: '2rem', paddingTop: '40px', paddingLeft: '18%'}}>{this.props.children}</Responsive>
            </div>
        )
    }
}

export default DashboardComponent;