import React, { Component } from 'react'
import MasterCTA from '../cta/MasterCTA'
import dispatchChangedArraySize from "../../../redux/dispatchs/Size"
import "../../../ui-kit/custom/flex.css"
import dispatchSortStopped from '../../../redux/dispatchs/Stop'


export default class Sliders extends Component {
    render() {
        return (
            <div className="flex">
             
                    <MasterCTA type="slider" id="size" className="slider" onChange={() => {dispatchSortStopped(); dispatchChangedArraySize(); }}></MasterCTA>
                {/* </div>
                <div> */}
                    <MasterCTA type="slider" id="speed" className="slider" onChange={() => { }}></MasterCTA>
            </div>
        )
    }
}
