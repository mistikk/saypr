import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faQuestionCircle as fasQuestionCircle,
  faChevronCircleLeft,
  faPlus,
  faTimes,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle as farQuestionCircle } from '@fortawesome/free-regular-svg-icons';

import store from './redux/store/store';

// Component
import Header from './components/header/header';
import About from './routes/about/about';
import Objectives from './routes/objectives/objectives';

import './App.scss';

library.add(
  farQuestionCircle,
  fasQuestionCircle,
  faChevronCircleLeft,
  faPlus,
  faTimes,
  faCheckCircle,
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div className="content">
              <Switch>
                <Route path="/" exact component={About} />
                <Route path="/objectives" exact component={Objectives} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
