import React from 'react';
import { Container, Grid, Image, Item, Segment, Label } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

class DashboardPage extends React.Component {

	componentDidMount(){
		console.log(this.props);
	}
	render(){
	
		return(
			<Grid columns={2}>
				{/* {recents.data.map((article, id) => (
					<Grid.Column>
						<Item style={{marginTop: '15px'}} key={id}>
						<Item.Content>
							<Item.Header as='h1'>
								<Link to={`/articles/${article.id}${article.slug}`}>{article.title}</Link>
							</Item.Header>
							<Item.Meta><span style={{fontSize: 14}}>{article.create_at}</span></Item.Meta>
							<Item.Description><p style={{fontSize: 18}}>{article.title}</p> </Item.Description>
						</Item.Content>
					</Item>
      				</Grid.Column>
				))} */}
			</Grid>
		)
	}
}


export default inject('store') (observer(DashboardPage));