// import React from 'react';
// import {Loader} from 'semantic-ui-react';
// import PostPreview from './PostPreview';

// const PostList = props => {
//   if (props.loading && props.articles.length === 0) {
//     return (
// 			<Loader active inverted />
//     );
//   }
//   if (props.posts.length === 0) {
//     return (
//       <p>
//         No articles are here... yet.
//       </p>
//     );
//   }

//   return (
//     <div>
//       {
//         props.posts.map(post => {
//           return (
//             <PostPreview post={post} key={post.slug} />
//           );
//         })
//       }
//     </div>
//   );
// };

// export default PostList;