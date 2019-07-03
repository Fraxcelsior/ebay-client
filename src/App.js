import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      </Provider>
    );
  }
}

export default App;