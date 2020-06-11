import { BubbleSort } from "../sorts/BubbleSort"
import {sleep} from "../helpers/functions/Sleep"
import { dispatchChangedArrayOrder } from "../redux/dispatchs/ChangedOrder";


async function Sorting(array = []) {
    const generator = BubbleSort(array);
    let result = generator.next();
    while (!result.done) {
        dispatchChangedArrayOrder(result.value);
        result = generator.next();
        await sleep(1000);        
    }

}

export { Sorting }