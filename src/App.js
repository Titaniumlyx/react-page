import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import News from './views/news';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Route component={News} exact path="/"></Route>
            </div>
        </Router>
    );
  }
}

export default App;
