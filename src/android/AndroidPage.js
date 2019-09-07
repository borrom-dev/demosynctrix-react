import React from 'react';
import {inject, observer} from 'mobx-react';
import PostList from '../component/PostList';

@inject('androidStore')
@observer
class AndroidPage extends React.Component {

	render() {
    const {posts, isLoading } = this.props.androidStore;
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

export default AndroidPage;