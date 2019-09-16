import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';

export const ArticlePreview = () => {

    return (
		<Card>
			<Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
			<Card.Content>
				<Card.Header>Daniel</Card.Header>
					<Card.Meta>Joined in 2016</Card.Meta>
					<Card.Description>
						Daniel is a comedian living in Nashville.
					</Card.Description>
				</Card.Content>
			<Card.Content extra> <Icon name='user' /> 10 Friends </Card.Content>
		</Card>
    );
}