import { useSelector } from 'react-redux'
function getArraySelector() {
    const array = useSelector(state => state.array);
    return array;
}
export { getArraySelector }