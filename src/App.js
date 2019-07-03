import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import {Route} from 'react-router-dom'
import AdvertisementListContainer from './components/AdvertisementListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Route path="/" exact component={AdvertisementListContainer} />
      </Provider>
    );
  }
}

export default App;