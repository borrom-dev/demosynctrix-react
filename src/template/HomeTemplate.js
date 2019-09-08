import React from 'react';
import {Container} from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';

@inject('templateStore')
@observer
class HomeTemplate extends React.Component {

	componentDidMount(){
		this.props.templateStore.getRecentPosts();
	}
	render(){
		const {posts} = this.props.templateStore;
		return(
			<Container>
			{posts.map((post, id) => (<p key={id}>{post.title}</p>))}
			</Container>
			);
	}
}

export default HomeTemplate;