import {Route, Redirect} from 'react-router-dom';
import React from 'react';
import {isLogin} from '../helper';
import DashboardComponent from '../auth/DashboardComponent';

export function AdminRoute({ props, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={
        props => isLogin() ? (
          <DashboardComponent {...props}>
            <Component {...props}/>
          </DashboardComponent>
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