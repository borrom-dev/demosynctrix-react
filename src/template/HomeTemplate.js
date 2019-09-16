import React from 'react';
import {Container} from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';

@inject('frontendStore')
@observer
class HomeTemplate extends React.Component {

	componentDidMount(){
		//  this.props.frontendStore.getArticles();
	}
	render(){
		// const {content} = this.props.frontendStore.response;
		return(
			<Container>
				{/* {content.map((article, id) => (<p key={id}>{article.title}</p>))} */}
			</Container>
			);
	}
}

export default HomeTemplate;