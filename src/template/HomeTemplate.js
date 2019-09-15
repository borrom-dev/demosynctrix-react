import React from 'react';
import {Container} from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';
@inject('frontendStore')
@observer
class HomeTemplate extends React.Component {

	componentDidMount(){
		 this.props.frontendStore.getPosts();
	}
	render(){
		const {articles} = this.props.frontendStore;
		return(
			<Container>
			{articles.map((post, id) => (<p key={id}>{post.title}</p>))}
			</Container>
			);
	}
}

export default HomeTemplate;