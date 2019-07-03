import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import advertisementListContainer from './components/advertisementListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <advertisementListContainer />
      </Provider>
    );
  }
}

export default App;