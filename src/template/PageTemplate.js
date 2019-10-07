import React from 'react';
import {Helmet} from "react-helmet";
import { Container } from 'semantic-ui-react';

class PageTemplate extends React.Component {

    render(){
        return(<>
        <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
        </Helmet>
        <Container>
            <p>hello</p>
        </Container>
        </>)
    }
}

export default PageTemplate;