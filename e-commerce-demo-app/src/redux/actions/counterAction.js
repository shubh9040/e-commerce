import axios from 'axios';
import { useContext } from 'react';
import { INCREAMENT_COUNTER, DECREAMENT_COUNTER, CARTITEM_LIST_SUCCESS} from '../../constant/Constant';

export const incNumber = () => {
    return{
        type:INCREAMENT_COUNTER
    }
}

export const decNumber = () => {
    return{
        type:DECREAMENT_COUNTER
    }
}

export const getTotal = () => async(dispatch) => {
    try {
        const { data } = await axios.get(process.env.REACT_APP_GET_CARTITEMS);
    
        dispatch({ type: CARTITEM_LIST_SUCCESS, payload: data.length });
      } catch (err) {
        console.log(err);
      }
     
}