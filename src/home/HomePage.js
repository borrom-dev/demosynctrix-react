import React from 'react';
import PostList from '../component/PostList';
import { inject, observer } from 'mobx-react';

@inject('postStore')
@observer
class HomePage extends React.Component {
  render() {
    const {posts, isLoading } = this.props.postStore;
    return (
      <PostList
       posts={posts}
       loading = {isLoading}
       />
    )
  }
}

export default HomePage;