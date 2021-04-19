import React from "react";
import axios from "axios";
import ListPost from "./components/ListPost";
import Form from "./components/Form";
import "./App.css";
export default class App extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      posts: []
    };
    this.addPost = this.addPost.bind(this);
  }

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        const posts = res.data;
        this.setState({ posts });
      })
      .catch((error) => console.log(error));
  }

  addPost(post){
    this.setState((preState) => {
      return {
        posts: [post, ...preState.posts]
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Thêm bài đăng</h2>
        <Form addPost={this.addPost} />
        
        <h2>Danh sách bài đăng</h2>
        <ListPost posts={this.state.posts} />
      </div>
    );
  }
}
