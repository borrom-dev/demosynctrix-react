import React from 'react';
import {Menu, Container, Image, Header, Visibility} from 'semantic-ui-react';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

export default class  FrontendHeader extends React.Component {

	state = {
    menuFixed: false,
    overlayFixed: false,
	}

	navigatTo = (url) => {
		this.props.history.replace(url);
	}

	render(){
		const { menuFixed } = this.state
	return(
			<div>
			   <Container text style={{ marginTop: '2em' }}>
	          <Header as='h1'>Sticky Example</Header>
	          <p>
	            This example shows how to use lazy loaded images, a sticky menu, and a simple text
	            container
	          </p>
	        </Container>
					<Visibility
	          onBottomPassed={this.stickTopMenu}
	          onBottomVisible={this.unStickTopMenu}
	          once={false}
	        >
	          <Menu
	            borderless
	            fixed={menuFixed ? 'top' : undefined}
	            style={menuFixed ? fixedMenuStyle : menuStyle}
	          >
	            <Container text>
	              <Menu.Item onClick={()=> this.navigatTo('/')}>
	                <Image size='mini' src='/logo.png' />
	              </Menu.Item>
	              <Menu.Item onClick={() => this.navigatTo('/android')}>Android</Menu.Item>
	              <Menu.Item onClick={() => this.navigatTo('/java')}>Java</Menu.Item>
	              <Menu.Item onClick={() => this.navigatTo('/kotlin')}>Kotlin</Menu.Item>
	            </Container>
	          </Menu>
	        </Visibility>
			</div>
		)
	}
}