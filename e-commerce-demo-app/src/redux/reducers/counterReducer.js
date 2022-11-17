import { act } from 'react-dom/test-utils';
import { INCREAMENT_COUNTER, DECREAMENT_COUNTER, CARTITEM_LIST_SUCCESS } from '../../constant/Constant';

let initialState = 0;

const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case INCREAMENT_COUNTER:
            return state + 1;
        case DECREAMENT_COUNTER:
            return state - 1;
        case CARTITEM_LIST_SUCCESS:
            return state = action.payload
        default:
            return state;
    }
}

export default counterReducer;