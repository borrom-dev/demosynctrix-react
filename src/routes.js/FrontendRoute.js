import {Route} from 'react-router-dom';
import React from 'react';
import {Container} from 'semantic-ui-react';
import FrontendHeader from '../component/FrontendHeader';

export default function FrontedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>  (
					<div>
						<FrontendHeader {...props}/>
						<Container text>
          		<Component {...props} />
						</Container>
					</div>
        )
      }
    />
  );
}