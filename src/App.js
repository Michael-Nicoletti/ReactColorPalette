import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import {generatePalette} from './colorHelpers';
import seedColors from './seedColors';

class App extends Component {
  
  render() {
    //console.log(generatePalette(seedColors[0]));
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Palette Goes here</h1>} />
        <Route exact path='/palette/:id' render={() => <h1>Individual Palette Goes Here</h1>} />
      </Switch>
      
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])}/>
      // </div>
    );
  }
  
}

export default App;
