import React from 'react';
import ReactDOM from 'react-dom';
import preloadedStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = preloadedStore(preloadedState);
    delete window.currentUser;
  } else {
    store = preloadedStore();
  }

  ReactDOM.render(<Root store={store} />, root);
});
