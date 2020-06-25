import { useSelector } from 'react-redux'
function getArraySelector() {
    const array = useSelector(state => state.array);
    return array;
}


function getBooleanSelector() {
    const isStarted = useSelector(state => state.isStarted);
    return isStarted;
}
export { getArraySelector, getBooleanSelector}