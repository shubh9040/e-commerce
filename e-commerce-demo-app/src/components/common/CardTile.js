import React, { useEffect, } from 'react';
import "./CardTile.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { div } from '@mui/material';
import Paper from '@mui/material/Paper';

const buttonStyle = {
    border: "1px solid rgb(72, 46, 128)",
    color: "rgb(72, 46, 128)",
    transition: "0.1s ease-in",
    fontFamily: "'Abel', 'sans-serif'"
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const CardTile = ({ _id, image, title, description, price }) => {

    const addToCartHandle = (e) => {
        
        axios.post(process.env.REACT_APP_POST_CARTITEMS, {
            image,
            title,
            description,
            price
        })
            .then(res => {
                console.log("Posting data", res)
            })
            .catch(err => {
                console.log(err)
            })
            window.alert("Product added to the cart 😁")

        // navigate("/cartitems");
    }

    const navigate = useNavigate();

    // const data = {title:title};

    // useEffect( async ()=> {
    //     const newData = await axios.get(`${process.env.REACT_APP_GET_PRODUCT}/${id}`)
    //     console.log("newData",newData)
    // },[])
    
    


    const navigateToProductDetails = async () => {
        navigate(`/productdetails/${_id}`, { state: { title: title, description: description, price: price, image: image } });

    }

    return (
        <>
            <div className='main-card'>
                <div item className='image-div' onClick={() => navigateToProductDetails()}>
                    <img src={image} alt='random-product' />
                </div>
                <div className='body-div'>
                    <div className='title'>
                        <h3>{title}</h3>
                    </div>
                    <div className='description'>
                        <p>{description}</p>
                    </div>
                    <div className='cost'>
                        <div><CurrencyRupeeIcon fontSize='small' /></div>
                        <div>{price}</div>
                    </div>
                    <div className='btn'>
                        <Button
                            variant="outlined"
                            sx={{ ...buttonStyle, "&:hover": { border: "1px solid rgb(72, 46, 128)", transform: "scale(1.1)" } }}
                            onClick={addToCartHandle}
                        >Add to cart</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardTile;