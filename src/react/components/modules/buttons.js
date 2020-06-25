import React, { Component } from 'react';
import MasterCTA from '../cta/MasterCTA';
import {Sorting} from "../../../idk/Sorting";
import dispatchArrayShuffle from "../../../redux/dispatchs/Shuffle"
import "../../../ui-kit/custom/flexbox.css"


export default class Buttons extends Component {
    render() {
        return (
            <div>
                <MasterCTA type="button" className="test" onClick={() => { console.log("change") }}>
                    Stop
        </MasterCTA>
                <MasterCTA type="button" id="sort" className="test" onClick={async () => {
                    Sorting([30,20,14,33,13,12,11,44,55,30,22,23,25]);
                }}>
                    Start
        </MasterCTA>
                <MasterCTA type="button" className="test" onClick={() => { dispatchArrayShuffle(); }}>
                    Shuffle
        </MasterCTA>
            </div>
        )
    }
}
