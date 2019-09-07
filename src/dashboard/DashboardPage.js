import React from 'react';
import AdminHeader from '../component/AdminHeader'

export default class DashboardPage extends React.Component {
	render(){
		const props = this.props;
		return(
			<AdminHeader {...props}/>
		)
	}
}