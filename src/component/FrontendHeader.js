import React from 'react';
import {Menu, Container, Header, Visibility} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { inject, observer } from 'mobx-react';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

@inject('pageStore')
@observer
class  FrontendHeader extends React.Component {

	state = {
    menuFixed: false,
    overlayFixed: false,
	}


  	unStickTopMenu = () => this.setState({ menuFixed: false })


	pushTo = (url) => {
		this.props.history.push(url);
	}

	render(){
		const { menuFixed } = this.state
	return(
			<div>
			   <Container style={{margin: '2em'}}>
				<Link to='/'><h1>Demotrix</h1></Link>
				<blockquote>
				Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.
					<span>Steve Jobs</span>
				</blockquote>
	        </Container>
		
	          <Menu style={ menuStyle} >
	            <Container>
	              {this.props.pageStore.topics.map((topic, id) => (
					<Menu.Item key={id}><Link to={topic.url}>{topic.name}</Link></Menu.Item>
				  ))}
	            </Container>
	          </Menu>
			</div>
		)
	}
}

export default FrontendHeader;