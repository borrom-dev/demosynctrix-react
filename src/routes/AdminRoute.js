import {Route, Redirect} from 'react-router-dom';
import React from 'react';
import {isLogin} from '../helper';
import {AdminHeader} from '../component/AdminHeader';

export function AdminRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => isLogin() ? (
					<div>
						<AdminHeader {...props}/>
          	<Component {...props} />
					</div>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}