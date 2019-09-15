import React from 'react';
import { inject, observer } from 'mobx-react';

class BlogTemplate extends React.Component {

	componentDidMount(){
		// console.log(this.props);
	}
	render(){
		return(<p>hello blog template</p>);
	}
}

export default BlogTemplate;