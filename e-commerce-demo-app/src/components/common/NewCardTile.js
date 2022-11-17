import * as React from 'react';
import Box from '@mui/material/Box';
import "./CardTile.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { buttonStyle } from '../../constant/Constant';
import { Typography } from '@mui/material';

function NewCardTile({ _id, image, title, description, price }) {

    const navigate = useNavigate();

    const navigateToProductDetails = async () => {
        navigate(`/newproductdetails/${_id}`, { state: { title: title, description: description, price: price, image: image } });
    }

    return (
        <>
            <Box xs={12} lg={4}
                sx={{
                    width: 300,
                    height: 400,
                    borderRadius: '12px',
                    border: '1px solid rgb(238, 237, 237)',
                    m: 2,
                    fontFamily: "'Abel', sans-serif",
                    letterSpacing: "0.5px",
                    transition: '0.3s ease-in-out',
                    '&:hover': {
                        cursor: 'pointer',
                        transform: 'scale(1.05)',
                    },
                }}
                onClick={() => navigateToProductDetails()}
            >
                <div item className='image-div' >
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
                    <Typography  variant='h6'>⭐️⭐️⭐️</Typography>
                    <Typography  variant='h6'>3 Review</Typography>
                    </div>
                </div>
            </Box>
        </>
    );
}

export default NewCardTile;