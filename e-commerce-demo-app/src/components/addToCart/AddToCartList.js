import { Button, ButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import "./AddToCartList.css";
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { incNumber, decNumber } from "../../redux/actions/counterAction"
import CommonButton from '../common/CommonButton';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const buttonStyle = {
    border: "1px solid rgb(72, 46, 128)",
    color: "rgb(72, 46, 128)",
    transition: "0.1s ease-in",
    fontFamily: "'Abel', 'sans-serif'"
}

const AddToCartList = ({ id, image, description, price, dependencyFunction, title, _id }) => {

    const myState = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();
    const cost = parseInt(price)

    const [counter, setCounter] = useState(1);
    const incCounter = () => {
        setCounter(counter + 1);
    }
    const decCounter = () => {
        setCounter(counter - 1);
    }

    const removeItemHandle = () => {
        console.log("Remove Handler")
        dispatch(decNumber())
        axios.delete(`${process.env.REACT_APP_GET_CARTITEMS}/${id}`, {
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })

        dependencyFunction();
    }

    const navigate = useNavigate();

    const navigateToProductDetails = async () => {
        navigate(`/newproductdetails/${_id}`, { state: { title: title, description: description, price: price, image: image } });
    }

    return (
        <>
            {
                <div className='cart-container' >
                    <div 
                        className='cart-body'
                        onClick={() => navigateToProductDetails()}
                        >
                        <div className='body1'>
                            <div className='cart-image'><img src={image} alt="random product" onClick={() => navigateToProductDetails()} /></div>
                        </div>
                        <div className='body2'>
                            <div className='body2-1'>
                                <div className='cart-description'>{description}</div>
                                <div className='cart-price'>{price}</div>
                            </div>
                            <div className='body3'>
                                <div className='cart-remove'
                                        onClick={() => removeItemHandle()}

                                >
                                    <CommonButton
                                        variant="outlined"
                                        size='small'
                                        buttonName="Remove"
                                        width="150px"
                                        scale="1.1"
                                    ></CommonButton></div>
                            </div>
                        </div>
                        <div className='body4'>
                            <div className='cart-quantity'>

                                <div className='a-div'>
                                    {/* <a><button className={counter > 0 ? '' : 'minus-btn-disabled'} onClick={() => decCounter()}>-</button></a>
                                    <a><input type="text" value={counter} /></a>
                                    <a><button onClick={() => incCounter()}>+</button></a> */}
                                    <ButtonGroup
                                        variant="outlined"
                                        aria-label="Disabled elevation buttons"
                                        size='medium'
                                        sx={{ backgroundColor: "rgb(72, 46, 128" }}
                                    >
                                        <button
                                            style={{ width: "50px", cursor: "pointer", color: "white", fontSize: "20px" }}
                                            className={counter > 0 ? '' : 'minus-btn-disabled'} 
                                            onClick={() => decCounter()}
                                        ><RemoveIcon fontSize='small'/></button>
                                        <button
                                            style={{ width: "50px", cursor: "auto", color: "white", fontSize: "20px" }}
                                            disabled
                                        >{counter}</button>
                                        <button
                                            style={{ width: "50px", cursor: "pointer", color: "white", fontSize: "20px" }}
                                            onClick={() => incCounter()}
                                        ><AddIcon fontSize='small'/></button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </div>
                        <div className='body5'>
                            <div className='cart-total'>{cost * counter > 0 ? cost * counter : counter}</div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default AddToCartList;