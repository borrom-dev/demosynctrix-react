import React from 'react';
import { inject, observer } from 'mobx-react';
import HomeTemplate from '../template/HomeTemplate';
import BlogPostTemplate from '../template/BlogPostTemplate';

@inject('pageStore')
@observer
class FrontendComponent extends React.Component {
  render() {
    const {topic} = this.props;
    if(topic.template === 'home'){
      return (<HomeTemplate />)
    }else{
      return (<BlogPostTemplate topic={topic}/>)
    }
  }
}

export default FrontendComponent;