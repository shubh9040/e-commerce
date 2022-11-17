import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'
import CardTile from '../common/CardTile';
import { useDispatch, useSelector } from 'react-redux';
import listProducts from '../../redux/actions/homeAction';

// const products = [
//     {
//         id: 1,
//         image: {image},
//         title: 'Card Title 1',
//         description: 'Something description',
//         price: '150'
//     },
//     {
//         id: 2,
//         image: {image},
//         title: 'Card Title 2',
//         description: 'Something description',
//         price: '200'
//     },
//     {
//         id: 3,
//         image: {image},
//         title: 'Card Title 3',
//         description: 'Something description',
//         price: '250'
//     },
//     {
//         id: 4,
//         image: {image},
//         title: 'Card Title 4',
//         description: 'Something description',
//         price: '300'
//     },
//     {
//         id: 5,
//         image: {image},
//         title: 'Card Title 5',
//         description: 'Something description',
//         price: '350'
//     }
// ]

const Home = (props) => {

//     useEffect(() => {
//         axios.get(process.env.REACT_APP_GET_PRODUCT,{
//                 headers: {
//                     'content-type':'application/json',
//                     'Access-Control-Allow-Origin':'*'
//                 },

//             })
// .then(res => {
//     setProducts(res.data)
// })
// .catch(err => {
//     console.log(err)
// })

//     },[])

const dispatch = useDispatch();

const productList = useSelector(state => state.productList);
const { loading, error, products } = productList

useEffect(() => {
    dispatch(listProducts())

}, [dispatch])


return (
    <>
        <div className="home-container">
            {/* <CardTile image={image} /> */}
            {products.map((data) => {
                return (
                    <div key={data._id}>
                        <CardTile
                            _id={data._id}
                            image={`../Images/productImages/${data.image}`}
                            title={data.title}
                            description={data.description}
                            price={data.price}
                        />
                    </div>
                )
            })}
        </div>

    </>
);
        }

export default Home;