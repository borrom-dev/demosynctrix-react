import React from 'react';
import {Menu, Container, Header, Visibility} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import './style.css'

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}


const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

@inject('pageStore')
@observer
class  FrontendHeader extends React.Component {

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
			   <Container style={{margin: '2em'}}>
				<h1>Demotrix</h1>   
				<blockquote>
				Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.
					<span>Steve Jobs</span>
				</blockquote>
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
	              {this.props.pageStore.topics.map((topic, id) => (
					<Menu.Item><Link to={topic.url}>{topic.name}</Link></Menu.Item>
				  ))}
	            </Container>
	          </Menu>
	        </Visibility>
			</div>
		)
	}
}

export default FrontendHeader;