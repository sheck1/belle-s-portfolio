import React, { useContext } from "react";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { ProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";
import "./ProductDisplay.css";

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ProductContext);
return(

<div className="product-display">
<div className="display-left">
 <div className="image-list">
 <img src={product.image} alt=""/>
 <img src={product.image} alt=""/>
 <img src={product.image} alt=""/>
 <img src={product.image} alt=""/>
 </div>
 <div className="main-image">
<img src={product.image} alt=""/>
</div>
</div>


<div className="display-right">
<h1>{product.name}</h1>
<div className="product-rating">
 <StarOutlinedIcon style={{fontSize: "16"}}/>
 <StarOutlinedIcon style={{fontSize: "16"}}/>
 <StarOutlinedIcon style={{fontSize: "16"}}/>
 <StarOutlinedIcon style={{fontSize: "16"}}/>
 <StarBorderIcon style={{fontSize: "16"}}/>
</div>
<div className="productimage-price">
    ${product.price}
</div>
<div className="image-description">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
</div>
<div className="product-type">
<h6>Suited To</h6>
<p>All Skin Types</p>
</div>
<div className="product-size">
<h1>Select Size</h1>
    <div className="productimage-size">
        <div>S</div>
        <div>M</div>
        <div>L</div>
    </div>
</div>
<div className="productimage-button">
<button className="back-button">BACK</button>
<Link to="/cart" onClick={window.scrollTo(0,0)}><button className="add-button" onClick={()=>{addToCart(product.id)}}>ADD TO CART</button></Link>
</div>
</div>
</div>
);
}



export default ProductDisplay;