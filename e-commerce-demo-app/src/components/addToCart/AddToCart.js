import React, { useEffect, useState } from 'react';
import './AddToCart.css';
import axios from 'axios';
import AddToCartList from './AddToCartList';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { NavLink } from 'react-router-dom';


function AddToCart(props) {

    console.log("add to cart page")

    const [cartItems, setCartItems] = useState([]);
    const [dependency, setDependancy] = useState(false);

    useEffect(() => {
        axios.get(process.env.REACT_APP_GET_CARTITEMS, {
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },

        })
            .then(res => {
                setCartItems(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [dependency])

    const changeDependency = () => {
        setDependancy(!dependency);
    }

    return (
        <>
            <div className='cart-header'>
                <div><ShoppingBagOutlinedIcon fontSize='large' /></div>
                <div><h2>My Cart</h2></div>
            </div>
            {cartItems.length === 0 && <div className='empty-cart'>
                <h2> Oops...You have empty cart</h2>
                <h3>Go to<NavLink to="/"> Home </NavLink> page to start shopping</h3>
            </div>}


            {cartItems.map((data) => {
                return (
                    <AddToCartList
                        key={data._id}
                        id={data._id}
                        image={data.image}
                        description={data.description}
                        price={data.price}
                        dependencyFunction={changeDependency}
                    />
                )
            })}

            {cartItems.length > 0 && <div className='empty-cart'><h2>Total Item : {cartItems.length}</h2></div>}
        </>
    );
}

export default AddToCart;