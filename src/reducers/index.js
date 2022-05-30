import { DECREMENT, INCREAMENT } from "../actions";

const initialState = [1,''];

const performOperation = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case INCREAMENT:
            return [action.payload['num']+1,action.payload['data']?.title]
        case DECREMENT: 
            return [action.payload['num'] - 1, action.payload['data']?.title]
        default:
            return state
    }
}

export default performOperation;

