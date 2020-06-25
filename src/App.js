import React, { Component } from 'react';
import './ui-kit/custom/app.css';
import Canvas from './react/components/modules/canvas/Canvas';
import Buttons from './react/components/modules/buttons';
import Sliders from './react/components/modules/sliders';
import Select from './react/components/modules/select';




class App extends Component {


  render() {

    return (

      <div className="app">
        <Canvas></Canvas>
        <Select/>
        <Buttons/>
        <Sliders/>
      </div>
    );
  }
}

export default App;
