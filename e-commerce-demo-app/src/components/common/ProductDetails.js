import React, { useEffect } from 'react';
import "./ProductDetails.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import Button from '@mui/material/Button';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const productStyles = {
    border: "1px solid rgb(72, 46, 128)",
    color: "White",
    transition: "0.1s ease-in",
    fontFamily: "'Abel', 'sans-serif'",
    fontWeight: "bold",
    backgroundColor: "rgb(72, 46, 128)",
    width: "100%"
}


const ProductDetails = (props) => {

    const location = useLocation();

    let { id } = useParams();
    console.log("useParams Id", id)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_GET_PRODUCT}/${id}`, {
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },

        })
            .then(res => {
                console.log('>>>>>',res);
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const addToCartHandle = () => {
    }


    return (
        <>
            <div className='productDetails-container'>
                <div className='image-container'>
                    <img src={`${location.state.image}`} alt="product data" />
                </div>
                <div className='info-container'>
                    <div className='first-div'>
                        <div className='title-div'>
                            <h1>{location.state.title}</h1>
                        </div>
                        <div className='cost'>
                            <div><CurrencyRupeeIcon fontSize='small' /></div>
                            <div>{location.state.price}</div>
                        </div>
                    </div>
                    <div className='description-div'>
                        <p>{location.state.description}</p>
                    </div>
                    <div className='review-div'>
                        <p><span>3 Reviews</span> ⭐️⭐️⭐️</p>
                    </div>
                    <div className='color-size-div'>
                        <div className='color-div'>
                            <h4>Color and Special Edition</h4>
                            <div></div>
                        </div>
                        <div className='size-div'>
                            <h4>Size:</h4>
                            <h5>One Size</h5>
                        </div>
                    </div>

                    <div className='offer-div'>
                        <div className='offer'>
                            <h3>Available offers</h3>
                            <h4><BeenhereIcon color="success" fontSize='small' /> Offer5% Cashback on Axis Bank CardT&C</h4>
                            <h4><BeenhereIcon color="success" fontSize='small' /> Partner OfferSign up for Pay Later and get Gift Card worth upto ₹1000*</h4>
                            <h4><BeenhereIcon color="success" fontSize='small' /> Combo OfferBuy 3-4 items save 5%; Buy 5 or more save 10%</h4>
                        </div>
                    </div>

                    <div className='button-group'>
                        <div className='price'>
                            <h3><CurrencyRupeeIcon /> {location.state.price}</h3>
                        </div>
                        <div className='btn'>
                        <Button
                            variant="contained"
                            sx={{ ...productStyles, "&:hover": { backgroundColor:"rgb(72, 46, 128)" , border: "1px solid rgb(72, 46, 128)", transform: "scale(1.1)" } }}
                            onClick={addToCartHandle}
                        >Add to cart</Button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default ProductDetails;