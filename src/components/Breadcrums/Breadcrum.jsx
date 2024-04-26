import React from "react";
import "./Breadcrum.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Breadcrum = (props) => {
   const {product} = props; 
   console.log(product);
    
return (

<div className="breadcrum">
 HOME <KeyboardArrowRightIcon /> PRODUCT <KeyboardArrowRightIcon /> {product.category} <KeyboardArrowRightIcon /> {product.name}
</div>
  


);



}




export default Breadcrum;