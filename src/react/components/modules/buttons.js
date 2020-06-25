import React, { Component } from 'react';
import MasterCTA from '../cta/MasterCTA';
import { Sorting } from "../../../sorts/Sorting";
import dispatchArrayShuffle from "../../../redux/dispatchs/Shuffle"
import "../../../ui-kit/custom/flex.css"
import dispatchSortStopped from '../../../redux/dispatchs/Stop';


export default class Buttons extends Component {
    render() {
        return (
            <div className="flex">
                <MasterCTA type="button" className="btn-stop" onClick={() => { dispatchSortStopped(); }}>
                    Stop
        </MasterCTA>
                <MasterCTA type="button" id="sort" className="btn-start" onClick={async () => {
                    Sorting();
                }}>
                    Start
        </MasterCTA>
                <MasterCTA type="button" className="btn-shuffle" onClick={() => { dispatchSortStopped(); dispatchArrayShuffle(); }}>
                    Shuffle
        </MasterCTA>
            </div>
        )
    }
}
