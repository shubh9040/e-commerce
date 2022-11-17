import React, { Component } from "react";
import Slider from "react-slick";
import "./NewCarousel.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  sliderContainer: {
    "& .slick-list": {
      borderRadius: "12px",
    },
  },
});

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}


const NewCarousel = () => {
  const classes = useStyles();
    const settings = {
      className: classes.sliderContainer,
      dots: true,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      nextArrow: <ArrowForwardIosIcon sx={{backgroundColor:"transparent", color:"black", "&:hover":{color:"black"}}}/>,
      prevArrow: <ArrowBackIosIcon sx={{backgroundColor:"transparent", color:"black", "&:hover":{color:"black"}}}/>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const productList = useSelector(state => state.productList);
const { loading, error, products } = productList

    return (
      <div className="c-div">
        <Slider {...settings}>
          {products.map((data)=>{
            return(
              <div key={data.p_id}>
                <img src={`../Images/productImages/${data.image}`}/>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }

  export default NewCarousel;