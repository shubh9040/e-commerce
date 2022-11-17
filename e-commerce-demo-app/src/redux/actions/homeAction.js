import React from 'react';
import axios from 'axios';
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from "../../constant/Constant";

const listProducts = (props) => async(dispatch) =>{
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });// write condition for this steps
    
        const { data } = await axios.get(process.env.REACT_APP_GET_PRODUCT);//1
    
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
      } catch (err) {
        dispatch({
          type: PRODUCT_LIST_FAIL,
          payload:
            err.response && err.response.data.message
              ? err.response.data.message
              : err.message,
        });
      }
}

export default listProducts;