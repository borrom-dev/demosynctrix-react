import React from 'react';
import {List, Image, Header, Icon, Divider, Button} from 'semantic-ui-react';

export const ProfileComponent = ({title}) => (
<List>
  <Header as='h2' floated='left'>
    <Image style={{width: '2.5em', height: '2.5em', borderRadius: '500rem'}} src='https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
    <Header.Content>{title}<Header.Subheader>Borrom Sync</Header.Subheader>
    </Header.Content>
  </Header>
  <Header as='h2' floated='right' style={{paddingTop: '20px'}}>
      <Header.Content>
        <Button primary>More</Button>
      </Header.Content>
  </Header>
  <Divider clearing/>
</List>
);