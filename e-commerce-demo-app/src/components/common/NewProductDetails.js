import { ButtonGroup, createTheme, Grid, Typography } from '@mui/material';
import { Box, Container, ThemeProvider } from '@mui/system';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import Button from '@mui/material/Button';
import "./NewProductDetails.css"
import { Diversity1, Diversity1Outlined } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { makeStyles } from '@material-ui/core';
import { incNumber } from '../../redux/actions/counterAction';
import { useDispatch } from 'react-redux';
import CommonButton from './CommonButton';

const style = theme => ({
    root: {
        '& .MuiTypography-root .MuiTypography-h3 .css-mnrpae-MuiTypography-root': {
            [theme.breakpoints.down('md')]: {
                fontSize: "20px",
            },
        },
        "& .MuiGrid-root MuiGrid-grid-lg-5 .css-5u9v78-MuiGrid-root": {
            [theme.breakpoints.down('md')]: {
                height: "250px",
            },
        },
        '& .MuiContainer-root .MuiContainer-maxWidthLg .color-size .css-1oqqzyl-MuiContainer-root': {
            [theme.breakpoints.up('md')]: {
                display: "flex",
            },
        }
    },
});


const styles = {
    fontFamily: '"Abel", sans-serif',
    letterSpacing: '1px',
    margin: "5px 10px",
    '@media(maxWidth: 780px)': {
        '& .MuiTypography-root .MuiTypography-h3 .css-x9ndu6-MuiTypography-root': {
            fontSize: "15px"
        },
        '& .MuiGrid-root MuiGrid-grid-lg-5 css-5u9v78-MuiGrid-root': {
            height: "250px",
            wordWrap: "break-word"
        }
    }
}

function NewProductDetails({ _id, image, title, description, price }) {

    const location = useLocation();
    const dispatch = useDispatch();

    const Image = location.state.image
    const Title = location.state.title
    const Description = location.state.description
    const Price = location.state.price

    let { id } = useParams();

    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_GET_PRODUCT}/${id}`, {
    //         headers: {
    //             'content-type': 'application/json',
    //             'Access-Control-Allow-Origin': '*'
    //         },

    //     })
    //         .then(res => {
    //             console.log('>>>>>', res);
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })

    // }, [])

    const addToCartHandle = () => {
        dispatch(incNumber())
        axios.post(process.env.REACT_APP_POST_CARTITEMS, {
            Image,
            Title,
            Description,
            Price
        })
            .then(res => {
                console.log("Posting data", res)
            })
            .catch(err => {
                console.log(err)
            })
        window.alert("Product added to the cart 😁")
    }

    return (
        <>
            <div style={{ position: "relative" }}>
                <Grid
                    container
                    spacing={1}
                    maxWidth="xl"
                    m="10px"
                    sx={{
                        justifyContent: "space-evenly",
                        height: "600px",
                    }}
                >
                    <Grid lg={5} md={5} sm={5} maxWidth="md" sx={{ display: "grid", justifyContent: "center" }}>
                        <div style={{ alignSelf: "center", width: "400px" }}>
                            <img height="max-content" src={`${location.state.image}`} alt="product data" />
                        </div>
                    </Grid>
                    <Grid lg={5} >
                        <Container>
                            <Typography sx={{ ...styles,...style }} variant='h3'>{location.state.title}</Typography>
                            <Typography sx={{ ...styles,...style }} variant='h5'><CurrencyRupeeIcon />{location.state.price}</Typography>
                            <Typography sx={{ ...styles,...style }} variant='h6'>{location.state.description}</Typography>
                            <Typography sx={{ ...styles,...style }} variant='h6'>3 Review ⭐️⭐️⭐️</Typography>
                        </Container>
                        <Container className='color-size'>
                            <div className='color-div'>
                                <div>
                                    <Typography sx={{ ...styles,...style, fontWeight: "bold" }} variant='h6'>Color & Special Edition</Typography>
                                </div>
                                <div>
                                    <Typography sx={{ ...styles,...style }} variant='h6'>Here...</Typography>
                                </div>
                            </div>
                            <div className='price-div'>
                                <div>
                                    <Typography sx={{ ...styles,...style, fontWeight: "bold" }} variant='h6'>Size:</Typography>
                                </div>
                                <div>
                                    <Typography sx={{ ...styles,...style }} variant='h6'>One Size</Typography>
                                </div>
                            </div>
                        </Container>
                        <Container className='offer'>
                            <h3>Available offers</h3>
                            <h4><BeenhereIcon color="success" fontSize='small' /> Offer5% Cashback on Axis Bank CardT&C</h4>
                            <h4><BeenhereIcon color="success" fontSize='small' /> Partner OfferSign up for Pay Later and get Gift Card worth upto ₹1000*</h4>
                            <h4><BeenhereIcon color="success" fontSize='small' /> Combo OfferBuy 3-4 items save 5%; Buy 5 or more save 10%</h4>
                        </Container>

                        <ButtonGroup
                            variant="contained"
                            aria-label="Disabled elevation buttons"
                            size='large'
                            onClick={addToCartHandle}
                        >
                            <CommonButton
                            buttonName="Add to Cart"
                            size='medium'
                            width="200px"
                            scale="1.1"
                            ></CommonButton>
                        </ButtonGroup>
                    </Grid>




                </Grid>
            </div>

        </>
    );
}

export default NewProductDetails;