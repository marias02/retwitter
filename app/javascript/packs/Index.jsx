// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import { render } from "react-dom";
import App from '../components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from '../redux/reducers/root_reducer';
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  auth: {
    isLoggedIn: false,
    authUser: {
      name: '',
      phone: '',
      email: '',
      password_digest: '',
      username: '',
      profile_picture: '',
      biography: '',
      birthdate: ``
    }
  }, 
  login: {
    isLoggedIn: false,
    logginUser: {
      username: '',
      password_digest: ''
    }
  },
  latestTweetes: {
    tweetesDownloaded: false,
    tweetes: []
  }, 
  tweeteShow: {
    tweeteDownloaded: false,
    tweete: {}
  },
  tweeteNew: {
    newTweete: {
      text: ''
    },
    tweeteCreated: false
  },
  tweeteDel: {
    tweeteDeleted: false
  }
}

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App /> 
    </Provider>,
    document.body.appendChild(document.createElement('div'))
  );
});

