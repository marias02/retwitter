// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import { render } from "react-dom";
import App from '../components/App';
import { Provider } from 'react-redux';
import rootReducer from '../redux/reducers/root_reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TweetAuthor } from '../functions/AllTweets';
import { fetchUsers } from '../slices/usersSlice';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({
    serializableCheck: false
  })
});

store.dispatch(fetchUsers())

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App /> 
    </Provider>,
    document.body.appendChild(document.createElement('div'))
  );
});

