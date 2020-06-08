import React from 'react'
import { getArraySelector } from '../../../redux/selectors/StateSelectors'
    
    export default function ArrayBar() {
    // const arraySelector = useSelector(state => state.array);
    const select = getArraySelector();
    // select.map((val, idx) => (console.log("array at index: " + idx + " " + val)));
    return select.map((val, idx) =>
    <div className="array-bar" key={idx} style={{height: `${val}px`}}>
        {val}
    </div>
    );
    }
    
