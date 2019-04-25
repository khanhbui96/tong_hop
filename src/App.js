import React, { Component } from 'react';
import { BrowserRouter,  Route, Link } from 'react-router-dom';
import './App.css';
import routes from './routers/routers'

class App extends Component {
  showRoutes(routes) {
    return routes.map((route, index) => {
      return <Route path={route.path} exact={route.exact} component={route.component} />
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {this.showRoutes(routes)}
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
