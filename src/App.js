import React, { Component } from 'react';
import './App.css';
import MasterCTA from './react/components/CallsToAction/MasterCTA';
import { getValue } from './helpers/functions/GetValue';
import dispatchArrayShuffle from './redux/dispatchs/Shuffle';
import dispatchChangedArraySize from './redux/dispatchs/Size';
import Canvas from './react/components/Canvas/Canvas';
import { BubbleSort } from './sorts/BubbleSort';
import { SelectionSort } from './sorts/SelectionSort';
import { Merge } from './sorts/MergeSort';



class App extends Component {
  render() {
    const arr = [20000,330,1,20,4,22,0,-1,30,29]
    console.log("merge sort: " + Merge(arr))
    
    return (
      
      <div className="App">
        <Canvas></Canvas>
        <MasterCTA type="select" id="sort" onChange={()=>{dispatchArrayShuffle();}}></MasterCTA>
        <MasterCTA type="button" className="test" onClick={()=>{console.log("change")}}>
        <h1>Stop</h1>
        </MasterCTA>
        <MasterCTA type="button" className="test" onClick={() => { console.log("clicked") }}>
        <h1>Start</h1>
        </MasterCTA>
        <MasterCTA type="button" className="test" onClick={() => {dispatchArrayShuffle();}}>
        <h1>Shuffle</h1>
        </MasterCTA>
        
        <MasterCTA type="slider" id="size" className="slider" onChange={()=> {dispatchChangedArraySize()}}></MasterCTA>
        <MasterCTA type="slider" id="speed" className="slider" onChange={()=> {console.log(getValue("speed"))}}></MasterCTA>
      </div>
    );
  }
}

export default App;
