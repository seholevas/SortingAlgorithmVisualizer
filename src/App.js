import React, { Component } from 'react';
import './App.css';
import MasterCTA from './react/components/CallsToAction/MasterCTA';
import { getValue, getValueByElementId } from './helpers/functions/GetValue';
import dispatchArrayShuffle from './redux/dispatchs/Shuffle';
import dispatchChangedArraySize from './redux/dispatchs/Size';
import Canvas from './react/components/Canvas/Canvas';
import {Sorting} from "./idk/Sorting"




class App extends Component {


  render() {

    return (

      <div className="App">
        <Canvas></Canvas>
        <MasterCTA type="select" id="sort" onChange={() => { dispatchArrayShuffle(); }}></MasterCTA>
        <MasterCTA type="button" className="test" onClick={() => { console.log("change") }}>
          <h1>Stop</h1>
        </MasterCTA>
        <MasterCTA type="button" className="test" onClick={async () => {
          if (getValueByElementId("sort") === 'bubblesort') {
            await Sorting([200,50, 40,10,5]);
          }
          else if (getValueByElementId("sort") === 'mergesort') {
            // [10, 101, 120, 100, 30, 20, 10, 400]
            Sorting([200,100,50,40,5]); }
        }}>
          <h1>Start</h1>
        </MasterCTA>
        <MasterCTA type="button" className="test" onClick={() => { dispatchArrayShuffle(); }}>
          <h1>Shuffle</h1>
        </MasterCTA>

        <MasterCTA type="slider" id="size" className="slider" onChange={() => { dispatchChangedArraySize() }}></MasterCTA>
        <MasterCTA type="slider" id="speed" className="slider" onChange={() => { console.log(getValue("speed")) }}></MasterCTA>
      </div>
    );
  }
}

export default App;
