import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import {generatePalette} from './colorHelpers';
import seedColors from './seedColors';

class App extends Component {
  
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Palette Goes here</h1>} />
        <Route exact path='/palette/:id' render={routeProps => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>} />
      </Switch>
    );
  }
  
}

export default App;
