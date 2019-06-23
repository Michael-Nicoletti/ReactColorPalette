import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';
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
        <Route exact path='/palette/new' render={() => <NewPaletteForm />} />
        <Route exact path='/' render={routeProps => <PaletteList palettes={seedColors} {...routeProps} />} />
        <Route exact path='/palette/:id' render={routeProps => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>} />
        <Route 
          exact 
          path='/palette/:paletteId/:colorId' 
          render={routeProps => 
          <SingleColorPalette 
            palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
            colorId={routeProps.match.params.colorId}
          />}
        />
      </Switch>
    );
  }
  
}

export default App;
