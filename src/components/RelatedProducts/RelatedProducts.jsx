import React from "react";
import "./RelatedProducts.css";
import Items from "../Item/Items";
import data_item from "../Data";

const RelatedProducts = () => {
    return (

<div className="related-products">
 <h1>Our Picks For You</h1>
 <div className="relatedproduct-item">
  {data_item.map((item, i) => {
return <Items key={i} id={item.id} image={item.image} name={item.name} description={item.description} price={item.price} />
  }
  )}
 </div>
</div>


    );
}



export default RelatedProducts;