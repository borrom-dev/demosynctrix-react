import {Route} from 'react-router-dom';
import React from 'react';
import {Container} from 'semantic-ui-react';
import FrontendHeader from '../component/FrontendHeader';

export function FrontendRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>  (
					<Container>
						<FrontendHeader {...props}/>
          	<Component {...props} />
					</Container>
        )
      }
    />
  );
}