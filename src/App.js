import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';
import {generatePalette} from './colorHelpers';
import seedColors from './seedColors';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         palettes: seedColors
      }
   }

   findPalette = (id) => {
      return this.state.palettes.find(function(palette) {
         return palette.id === id;
      });
   }

   savePalette = (newPalette) => {
      this.setState({palettes: [...this.state.palettes, newPalette]});
   }

   render() {
      return (
         <Switch>
            <Route exact path='/palette/new' render={routeProps => <NewPaletteForm savePalette={this.savePalette} palettes={this.state.palettes} {...routeProps} />} />
            <Route exact path='/' render={routeProps => <PaletteList palettes={this.state.palettes} {...routeProps} />} />
            <Route exact path='/palette/:id' render={routeProps => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>} />
            <Route exact path='/palette/:paletteId/:colorId' 
               render={routeProps =>  <SingleColorPalette palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} colorId={routeProps.match.params.colorId} />}
            />
         </Switch>
      );
   }
}

export default App;
