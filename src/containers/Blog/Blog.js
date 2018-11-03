import React, { Component } from 'react';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  state = {
    auth: true
  }

  render = () => {
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li><NavLink exact to='/posts/'>Posts</NavLink></li>
              <li><NavLink exact to='/new-post'>New Post</NavLink></li>
            </ul>
          </nav>
        </header>

        <Switch>
          {/* Guard: no rendering NewPost unless user is authenticated */}
          {this.state.auth ? <Route path='/new-post' exact component={NewPost} /> : null}
          <Route path='/posts/' component={Posts} />
          <Redirect from='/' exact to='/posts/' />
          <Route render={() => <h1>404: Page Not Found</h1>} />
          {/* <Redirect from='/' to='/posts/' /> */}
        </Switch>

      </div>
    );
  }
}

export default Blog;
