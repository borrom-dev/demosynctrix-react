import React from 'react';
import {inject, observer} from 'mobx-react';
import PostList from '../component/PostList';

@inject('javaStore')
@observer
class JavaComponent extends React.Component {

	render() {
    const {posts, isLoading } = this.props.javaStore;
    return (
      <PostList
       posts={posts}
       loading = {isLoading}
       />
    )
  }
}

export default JavaComponent;