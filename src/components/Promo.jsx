import React, { useContext } from "react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloseIcon from '@mui/icons-material/Close';
import { ProductContext } from "./Context/ProductContext";


const Promo = () => {
  
   return (
       <header>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner heading-inner">
    <div className="carousel-item active" data-bs-interval="1000">
    <div className="items">
    <AutoAwesomeIcon />
      <h6 className="mg-1">New + Exclusive! </h6><span className="space">Anti Aging Lotion  </span> <a className="space">| SHOP NOW</a> 
      </div> 
    </div>
    <div className="carousel-item">
    <div className="items">
    <AutoAwesomeIcon />
    <h6 className="mg-1">Just Dropped! </h6><span className="space">Refreshing cleansing foam </span> <a className="space">| SHOP NOW</a>
    </div>
    </div>
    <div className="carousel-item">
    <div className="items">
    <AutoAwesomeIcon />
    <h6 className="mg-1">Free Samples! </h6><span className="space">His & Hers  </span> <a className="space">| SHOP NOW</a>
    </div>
    </div>
    <div className="header-close-botton">
    <CloseIcon />
    </div>
   
    </div>
  </div>
 
  </header>


   );

}


export default Promo;