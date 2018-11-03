import React, { Component } from 'react';

import axios from 'axios';
// import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Max',
    submitted: false
  }

  postDataHandler = () => {
    const payload = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    }
    axios.post('/posts', payload)
      .then(r => {
        console.log(r);
        // a programatic alternative to the Redirect component
        this.props.history.push('/posts');
        // this.setState({submitted: true});
      })
      .catch(e => {
        console.log(e);
      });
  }

  render () {
    return (
      <div className="NewPost">
        {/* an alternative to this.props.history.push or replace */}
        {/* {this.state.submitted ? <Redirect to='/posts' /> : null} */}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
        <label>Content</label>
        <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
        <label>Author</label>
        <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
            <option value="Max">Max</option>
            <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
