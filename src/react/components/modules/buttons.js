import React, { Component } from 'react';
import MasterCTA from '../cta/MasterCTA';
import { Sorting } from "../../../idk/Sorting";
import dispatchArrayShuffle from "../../../redux/dispatchs/Shuffle"
import "../../../ui-kit/custom/flex.css"


export default class Buttons extends Component {
    render() {
        return (
            <div class="flex">
                <MasterCTA type="button" className="btn-stop" onClick={() => { console.log("change") }}>
                    Stop
        </MasterCTA>
                <MasterCTA type="button" id="sort" className="btn-start" onClick={async () => {
                    Sorting();
                }}>
                    Start
        </MasterCTA>
                <MasterCTA type="button" className="btn-shuffle" onClick={() => { dispatchArrayShuffle(); }}>
                    Shuffle
        </MasterCTA>
            </div>
        )
    }
}
