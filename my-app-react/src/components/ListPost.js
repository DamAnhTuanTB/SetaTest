import React from "react";

import Post from "./Post";

const ListPost = (props) => {
  return (
    <div>
      {props.posts.map((post, index) => {
        return (
          <Post
            key={index}
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        );
      })}
    </div>
  );
};

export default ListPost;
