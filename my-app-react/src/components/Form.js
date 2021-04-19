import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      formid: "",
      title: "",
      body: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  }

  handleSubmit() {
    if (
      this.state.userid !== "" &&
      this.state.formid !== "" &&
      this.state.title !== "" &&
      this.state.body !== ""
    ) {
      alert("Thêm bài viết thành công!");
      this.props.addPost({
        userId: this.state.userid,
        id: this.state.formid,
        title: this.state.title,
        body: this.state.body,
      });
      this.setState({
        userid: "",
        formid: "",
        title: "",
        body: "",
      });
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!");
    }
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>UserID</th>
            <td>
              <input
                value={this.state.userid}
                name="userid"
                type="text"
                onChange={this.handleChange}
                autoFocus
              ></input>
            </td>
          </tr>
          <tr>
            <th>FormID</th>
            <td>
              <input
                value={this.state.formid}
                name="formid"
                type="text"
                onChange={this.handleChange}
              ></input>
            </td>
          </tr>
          <tr>
            <th>Title</th>
            <td>
              <input
                value={this.state.title}
                name="title"
                type="text"
                onChange={this.handleChange}
              ></input>
            </td>
          </tr>
          <tr>
            <th>Content</th>
            <td>
              <textarea
                value={this.state.body}
                name="body"
                cols="50"
                rows="5"
                onChange={this.handleChange}
              ></textarea>
            </td>
          </tr>
          <tr>
            <th colSpan="2" align="left">
              <button onClick={this.handleSubmit}>Thêm bài đăng</button>
            </th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Form;
