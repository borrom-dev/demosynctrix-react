import React from 'react';
import {Menu, Container, Header, Visibility} from 'semantic-ui-react';

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

	stickTopMenu = () => this.setState({ menuFixed: true })

  unStickTopMenu = () => this.setState({ menuFixed: false })


	pushTo = (url) => {
		this.props.history.push(url);
	}

	render(){
		const { menuFixed } = this.state
	return(
			<div>
			   <Container style={{ marginTop: '2em' }}>
	          <Header as='h1'>@Demotrix</Header>
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
	            fixed={menuFixed ? 'top' : undefined}
	            style={menuFixed ? fixedMenuStyle : menuStyle}
	          >
	            <Container>
	              <Menu.Item onClick={()=> this.pushTo('/')}>
	                home
	              </Menu.Item>
	              <Menu.Item onClick={() => this.pushTo('/android')}>Android</Menu.Item>
	              <Menu.Item onClick={() => this.pushTo('/java')}>Java</Menu.Item>
	              <Menu.Item onClick={() => this.pushTo('/kotlin')}>Kotlin</Menu.Item>
	            </Container>
	          </Menu>
	        </Visibility>
			</div>
		)
	}
}