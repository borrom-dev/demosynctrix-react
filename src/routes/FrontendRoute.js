import {Route} from 'react-router-dom';
import React from 'react';
import {Container} from 'semantic-ui-react';
import FrontendHeader from '../component/FrontendHeader';
import FrontendFooter from '../component/FrontendFooter';

export function FrontendRoute({ component: Component, topic,  ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>  (
            <Container text> 
              <FrontendHeader {...props}/>
              <Component {...props} topic={topic} />
              <FrontendFooter/>
            </Container>
        )
      }
    />
  );
}