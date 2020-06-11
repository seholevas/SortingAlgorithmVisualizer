import store from "../stores/store"
import { changedOrder } from "../actions/ArrayActionCreator"
// import { sleep } from "../../helpers/functions/Sleep";
async function changedArrayOrderDispatch(array = [0]) {


    setTimeout(
        async () => {
            await store.dispatch(changedOrder(array))
        },
        3000
    );

    console.log("changedArrayOrderDispatch(): " + array)


}

export { changedArrayOrderDispatch }