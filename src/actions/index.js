import { getProducts } from "../Server/serverActions";

export const INCREAMENT = "INCREAMENT";
export const DECREMENT = "DECREMENT";

export const increament = (num) => {
    return async (dispatch) => {
        const data = await getProducts(num);
        console.log(data)
        dispatch(setIncreament(num,data))
    }
}

export const setIncreament = (num,data) => {
    return { type: INCREAMENT, payload: { num, data } }
}

export const setDecrement = (num,data) => {
    return {type:DECREMENT,payload:{num,data}}
}


export const decrement = (num) => {
    return async (dispatch) => {
        const data = await getProducts(num);
        dispatch(setDecrement(num,data))
    }
}