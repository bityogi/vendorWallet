import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import reducers from './reducers'
import Router from './router';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDWyl0Vm0MS-pax58xdQzhoFZaM0nR6LA8",
      authDomain: "couplingwallet.firebaseapp.com",
      databaseURL: "https://couplingwallet.firebaseio.com",
      storageBucket: "couplingwallet.appspot.com",
      messagingSenderId: "619873442598"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, ReduxPromise));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
