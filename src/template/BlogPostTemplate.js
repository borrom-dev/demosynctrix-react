import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('templateStore')
@observer
class BlogPostTemplate extends React.Component {
	render(){
		return(<p>hello blog post template</p>);
	}
}

export default BlogPostTemplate;