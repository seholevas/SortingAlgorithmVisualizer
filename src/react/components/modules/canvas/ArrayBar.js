import React from 'react'
import { getArraySelector } from '../../../../redux/selectors/StateSelectors';
import "../../../../ui-kit/custom/array.bar.css"
    export default function ArrayBar() {
    const selector = getArraySelector();
    return selector.map((val, idx) =>
    <div className="array-bar" key={idx} style={{height: `${val}px`}}>
    <p>{val}</p>
    </div>
    );
    }
    
