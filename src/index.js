import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'Auth Token';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const reqInterceptor = axios.interceptors.request.use(request => {
  // edit reuqest config
  // console.log(request);
  // always return request config, otherwise it would block requests
  return request;
}, error => {
  // do something with the error globally, e.g. logging
  // console.log(error); // error related to sending the request
  // forward the error to the specific component so it can be handled locally
  return Promise.reject(error);
});

const resInterceptor = axios.interceptors.response.use(response => {
  // console.log(response);
}, error => {
  // console.log(error);
  return Promise.reject(error);
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
