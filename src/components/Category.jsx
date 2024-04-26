import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";





function Category() {

  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", border:"None" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
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
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  
 
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-img bg-one">
        <a className="nav-link subimg-text"><Link style={{textDecoration: "none", color: "none"}} to="/facialcare">Facial Care</Link></a>
        </div>
        
        <div className="slider-img bg-two">
        <a className="nav-link subimg-text"><Link style={{textDecoration: "none"}} to="/mencare">Men Care</Link></a>
        </div>
    
        <div className="slider-img bg-three">
        <a className="nav-link subimg-text"><Link style={{textDecoration: "none"}} to="/skincare">Skin Care</Link></a>
        </div>
        
        <div className="slider-img bg-four">
        <a  className="nav-link subimg-text"><Link style={{textDecoration: "none"}} to="/bestseller">Best Sellers</Link></a>
        </div>
    
        <div className="slider-img bg-five">
        <a  className="nav-link subimg-text"><Link style={{textDecoration: "none"}} to="/bath&body">Bath & Body</Link></a>
        </div>
      </Slider>
    </div>
  );
}

export default Category;