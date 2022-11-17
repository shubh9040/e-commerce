import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'
import CardTile from '../common/CardTile';
import { useDispatch, useSelector } from 'react-redux';
import listProducts from '../../redux/actions/homeAction';
import NewCardTile from '../common/NewCardTile';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import NewCarousel from '../common/NewCarousel';
import { getTotal } from '../../redux/actions/counterAction';


const NewHome = (props) => {

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
        dispatch(getTotal())
    }, [dispatch])

    return (
        <>
            {<NewCarousel />}
            <Grid container spacing={1}
                maxWidth="xl"
                m="10px"
                sx={{ justifyContent: "space-around" }}
            >
                {products.map((data) => {
                    return (
                        <NewCardTile
                            key={data._id}
                            _id={data._id}
                            image={`../Images/productImages/${data.image}`}
                            title={data.title}
                            description={data.description}
                            price={data.price}
                        />
                    )
                })}
            </Grid>
        </>
    );
}

export default NewHome;