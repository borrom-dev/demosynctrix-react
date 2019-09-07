import {Route} from 'react-router-dom';
import React from 'react';
import FrontendHeader from '../component/FrontendHeader';

export default function FrontedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>  (
					<div>
						<FrontendHeader {...props}/>
          	<Component {...props} />
					</div>
        )
      }
    />
  );
}