import React from 'react';
import {Segment, Header, Button, Icon, Container} from 'semantic-ui-react';

export default class FileComponent extends React.Component {

  render() {
    return (
			<Container>
				  <Segment placeholder>
					<Header icon> <Icon name='images'/>There are no image files!</Header>
					<Button primary>Add File</Button>
				</Segment>
		</Container>
    );
  }
}