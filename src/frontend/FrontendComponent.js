import React from 'react';
import { inject, observer } from 'mobx-react';
import HomeTemplate from '../template/HomeTemplate';
import BlogPostTemplate from '../template/BlogPostTemplate';
import PageTemplate from '../template/PageTemplate';

@observer
class FrontendComponent extends React.Component {

  render() {
    const {topic} = this.props;
    if(topic.template === 'home.template'){
      return (<HomeTemplate {...this.props} />)
    } else if(topic.template === 'page.template'){
      return (<PageTemplate {...this.props}/>)
    } else {
      return (<BlogPostTemplate {...this.props}/>)
    }
  }
}

export default FrontendComponent;