import React, { Component } from 'react'
import { getValueByElementId } from '../../../helpers/functions/GetValue'
import MasterCTA from '../cta/MasterCTA'
import dispatchChangedArraySize from "../../../redux/dispatchs/Size"
import "../../../ui-kit/custom/flex.css"


export default class Sliders extends Component {
    render() {
        return (
            <div class="flex vertical center">
             
                    <MasterCTA type="slider" id="size" className="slider" onChange={() => { dispatchChangedArraySize() }}></MasterCTA>
                {/* </div>
                <div> */}
                    <MasterCTA type="slider" id="speed" className="slider" onChange={() => { console.log(getValueByElementId("speed")) }}></MasterCTA>
            </div>
        )
    }
}
