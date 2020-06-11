import React from 'react'
import { getArraySelector } from '../../../redux/selectors/StateSelectors';

// export default class ArrayBar extends Component {
//     componentDidUpdate () {
        
//       }
    
//     render() {
//         return (
//           this.props.array.map((val, idx) =>
//     <div className="array-bar" key={idx} style={{height: `${val}px`}}>
//         {val}
//     </div>
//         ))
//     }
// }

    export default function ArrayBar() {
    // const arraySelector = useSelector(state => state.array);
    const selector = getArraySelector();
    return selector.map((val, idx) =>
    <div className="array-bar" key={idx} style={{height: `${val}px`}}>
        {val}
    </div>
    );
    }
    
