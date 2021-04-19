import React from 'react';
import '../css/Post.css'

const Post = (props) => {
    return (
        <div className="parent-post">
           <div>UserID: {props.userId}</div>
           <div>PostID: {props.id}</div>
           <div>Title: {props.title}</div>
           <div>Content: {props.body}</div>
        </div>
    )
}

export default Post;

