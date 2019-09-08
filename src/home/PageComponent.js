import React from 'react';
import { inject, observer } from 'mobx-react';
import HomeTemplate from '../template/HomeTemplate';
import BlogPostTemplate from '../template/BlogPostTemplate';

@inject('pageStore')
@observer
class PageComponent extends React.Component {

  render() {
    const {match} = this.props;
    console.log(match);
    const page = {
      template: 'home'
    }
    if(match.path === '/'){
      return (<HomeTemplate page={page}/>)
    }else{
      return (<BlogPostTemplate/>)
    }
  }
}

export default PageComponent;