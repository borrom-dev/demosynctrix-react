import React from 'react';
import { inject, observer } from 'mobx-react';
import HomeTemplate from '../template/HomeTemplate';
import BlogPostTemplate from '../template/BlogPostTemplate';

@inject('articleStore')
@observer
class FrontendComponent extends React.Component {

  render() {
    const {topic} = this.props;
    if(topic.template === 'home'){
      return (<HomeTemplate {...this.props} />)
    }else{
      return (<BlogPostTemplate {...this.props}/>)
    }
  }
}

export default FrontendComponent;