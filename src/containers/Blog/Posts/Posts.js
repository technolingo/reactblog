import React, { Component } from 'react';

import axios from '../../../axios';
import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
    currentPostID: null
  }

  postClickedHandler = (id) => {
    // a programatic alternative to <Link> component
    this.props.history.push('/posts/' + id);
    // this.props.history.push({pathname: '/posts/' + id});
  }

  componentDidMount = () => {
    axios.get('posts')
      .then(r => {
          const posts = r.data.slice(0, 4);
          const updatedPosts = posts.map(
            p => ({...p, author: 'Zil'})
          );
          this.setState({posts: updatedPosts});
      })
      .catch(e => {
        console.log(e);
      });
  }

  render () {

    const posts = this.state.posts.map(p => (
      // <Link to={'/posts/' + p.id} key={p.id}>
        <Post
          key={p.id}
          ckey={p.id}
          title={p.title}
          author={p.author}
          clicked={this.postClickedHandler.bind(this, p.id)}
        />
      // </Link>
    ));

    return (
      <div>
        <section className='Posts'>
          {posts}
        </section>

        <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
      </div>

    );
  }
}

export default Posts;
