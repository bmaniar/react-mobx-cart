import React from 'react';
import { Switch, Route} from 'react-router-dom';
import DevTools from 'mobx-react-devtools';
import Home from './Home';

export default class App extends React.Component {
  render() {
      return (
        <div>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
          <DevTools />
        </div>
      );
  }
}
