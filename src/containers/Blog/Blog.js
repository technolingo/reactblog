import React, { Component } from 'react';

import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    currentPostID: null
  }

  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      r => {
        const posts = r.data.slice(0, 4);
        const updatedPosts = posts.map(
          p => ({...p, author: 'Zil'})
        );
        this.setState({posts: updatedPosts});
        console.log(r);
      }
    );
  }

  postClickedHandler = (id) => {
    this.setState({currentPostID: id});
  }

  render = () => {
    const posts = this.state.posts.map(p => (
      <Post
        key={p.id}
        ckey={p.id}
        title={p.title}
        author={p.author}
        clicked={this.postClickedHandler.bind(this, p.id)}
      />
    ));

    return (
      <div>
        <section className='Posts'>
          {posts}
        </section>
        <section>
          <FullPost id={this.state.currentPostID} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
