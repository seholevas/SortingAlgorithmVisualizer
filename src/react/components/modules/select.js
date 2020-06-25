import React, { Component } from 'react'
import MasterCTA from '../cta/MasterCTA';
import dispatchArrayShuffle from "../../../redux/dispatchs/Shuffle"
import "../../../ui-kit/custom/flex.css"
import dispatchSortStopped from '../../../redux/dispatchs/Stop';


export default class select extends Component {
    render() {
        return (
            <div className="flex">
                <MasterCTA type="select" id="sort" onChange={() => { dispatchSortStopped(); dispatchArrayShuffle(); }}></MasterCTA>
            </div>
        )
    }
}
