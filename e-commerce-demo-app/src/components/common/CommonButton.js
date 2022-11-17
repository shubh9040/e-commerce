import { Button } from '@mui/material';
import React from 'react';


const productStyles = {
    border: "1px solid rgb(72, 46, 128)",
    color: "White",
    transition: "0.1s ease-in",
    fontFamily: "'Abel', 'sans-serif'",
    fontWeight: "bold",
    backgroundColor: "rgb(72, 46, 128)",
}

function CommonButton({buttonName,size,width,scale}) {

    return (
        <>
            <Button size={size}
                sx={{ ...productStyles, width: {width}, "&:hover": { backgroundColor: "rgb(72, 46, 128)", border: "1px solid rgb(72, 46, 128)", transform: `scale(${scale})` }}}
            >{buttonName}</Button>
        </>
    );
}

export default CommonButton;