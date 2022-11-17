import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';

const Header = (props) => {
    const myState = useSelector((state) => state.counterReducer);
    return (
        <>
            <div className='primary-nav'>
                <nav>
                    <div className='secondary-div'>
                        <div className='third-div'>
                            <div>
                                <NavLink to="/">Home</NavLink>
                            </div>
                            <div>
                                <NavLink to="/contactUs">Contact Us</NavLink>
                            </div>
                        </div>
                        <NavLink to="/addToCart">
                        <div className='fourth-div'>
                            <div className='cart-link'>
                               <NavLink to="/addToCart"><ShoppingCartOutlinedIcon /></NavLink>
                            </div>
                            {<div>
                                <p>{myState}</p>
                            </div>}
                        </div>
                        </NavLink>

                    </div>
                </nav>
            </div>

        </>
    );
}

export default Header;