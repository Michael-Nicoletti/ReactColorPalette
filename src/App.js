import React, {Component} from 'react';
import Palette from './Palette';
import {generatePalette} from './colorHelpers';
import seedColors from './seedColors';

class App extends Component {
  
  render() {
    console.log(generatePalette(seedColors[0]));
    return (
      <div>
        <Palette {...seedColors[5]}/>
      </div>
    );
  }
  
}

export default App;
