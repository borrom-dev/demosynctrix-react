import React from 'react';
import { inject, observer } from 'mobx-react';


class BlogPostTemplate extends React.Component {

	componentDidMount(){
		console.log(this.props);
	}

	render(){
		return(<p>hello blog post template</p>);
	}
}

export default BlogPostTemplate;