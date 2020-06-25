import React, { Component } from 'react'
import MasterCTA from '../cta/MasterCTA';
import dispatchArrayShuffle from "../../../redux/dispatchs/Shuffle"
import "../../../ui-kit/custom/flexbox.css"


export default class select extends Component {
    render() {
        return (
            <div>
                <MasterCTA type="select" id="sort" onChange={() => { dispatchArrayShuffle(); }}></MasterCTA>
            </div>
        )
    }
}
