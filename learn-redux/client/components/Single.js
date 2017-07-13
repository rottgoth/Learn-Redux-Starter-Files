import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { posts, params } = this.props;
    const { postId } = params;
    const index = posts.findIndex((post) => post.code === postId);
    const post = posts[index];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={index} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props}/>
      </div>
    );
  }
});

export default Single;
