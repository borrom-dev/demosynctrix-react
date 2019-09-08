import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

@inject('backendStore')
@observer
class DashboardPage extends React.Component {

	componentDidMount(){
		this.props.backendStore.getRecentPosts();
	}
	render(){
		const {posts} = this.props.backendStore;
		return(
			<Container>
			<Grid columns='three' divided>
				{posts.map((post, id) => (
					<Grid.Column>
        		<Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      		</Grid.Column>
				))
				}
				</Grid>
			</Container>
		)
	}
}

export default DashboardPage;