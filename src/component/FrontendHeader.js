import React from 'react';
import {Menu, Container, Header, Visibility} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { inject, observer } from 'mobx-react';

const quote = "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things."

const FrontendHeader = inject("store")(
	observer(({store}) => (
		<>
			<Link to='/'><h1 id='fronted-header'>Demotrix</h1></Link>
			<blockquote>{quote}<span>Steve Jobs</span></blockquote>
			<Menu>
				{store.topics.map((topic, id) => (
					<Menu.Item key={id}><Link to={topic.url}>{topic.name}</Link></Menu.Item>
				))}
			</Menu> 
		</>
	))
)

export default FrontendHeader;