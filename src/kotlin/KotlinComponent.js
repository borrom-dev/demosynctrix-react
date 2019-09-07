import React from 'react';
import {inject, observer} from 'mobx-react';
import PostList from '../component/PostList';

@inject('kotlinStore')
@observer
class KotlinComponent extends React.Component {

	render() {
    const {posts, isLoading } = this.props.kotlinStore;
    return (
      <div>
        <PostList
         posts={posts}
         loading = {isLoading}
         />
      </div>
    )
  }
}

export default KotlinComponent;