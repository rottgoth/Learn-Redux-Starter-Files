import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { posts, params } = this.props;
    const index = posts.findIndex((post) => post.code === params.postId);
    const post = posts[index];

    return (
      <div className="single-photo">
        <Photo i={index} post={post} {...this.props} />
        <Comments />
      </div>
    );
  }
});

export default Single;
