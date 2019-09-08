import React from 'react';
import { inject, observer } from 'mobx-react';
import HomeTemplate from '../template/HomeTemplate';
import BlogPostTemplate from '../template/BlogPostTemplate';

@inject('pageStore')
@observer
class PageComponent extends React.Component {
  render() {
    const {match} = this.props;
    if(match.path === '/'){
      return (<HomeTemplate />)
    }else{
      return (<BlogPostTemplate page={match.url}/>)
    }
  }
}

export default PageComponent;