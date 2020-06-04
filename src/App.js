import React, { Component } from 'react';
import './App.css';
import MasterCTA from './react/components/CallsToAction/MasterCTA';
import { generateArray } from './helpers/functions/GenerateArray';
import { getValue } from './helpers/functions/GetValue';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MasterCTA type="select" id="sort" onChange={()=>{console.log(getValue("sort"))}}></MasterCTA>
        <MasterCTA type="button" className="test" onClick={()=>{console.log("change")}}>
        <h1>Stop</h1>
        </MasterCTA>
        <MasterCTA type="button" className="test" onClick={() => { console.log("clicked") }}>
        <h1>Start</h1>
        </MasterCTA>
        <MasterCTA type="button" className="test" onClick={() => {console.log(generateArray(getValue()))}}>
        <h1>Shuffle</h1>
        </MasterCTA>
        
        <MasterCTA type="slider" id="size" className="slider" onChange={()=> {console.log(generateArray(getValue()))}}></MasterCTA>
        <MasterCTA type="slider" id="speed" className="slider" onChange={()=> {console.log(getValue("speed"))}}></MasterCTA>
      </div>
    );
  }
}

export default App;
