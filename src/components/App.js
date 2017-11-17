import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Home from './Home';

export default class App extends React.Component {
  render() {
      return (
        <div>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      );
  }
}
