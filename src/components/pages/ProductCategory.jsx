import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import Items from "../Item/Items";
import Detail_product from "../Details";

const ProductCategory = (props) => {
 
    const {Detail_Product} = useContext(ProductContext);
return(

<div className="productcategory-container" >
<div className="product-category-index">
    <p>
        <span>Showing 1-6</span> out of 24 products
    </p>


<div className="dropdown">
  <button className="btn dropdown-toggle dropdown-button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Sort by
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
</div>

<div className="product-category">
{Detail_product.map((item, i) => {
    if (props.category === item.category) {
        return <Items key={i} id={item.id} image={item.image} name={item.name} description={item.description} price={item.price} />
    } else {
       console.log(Detail_Product);
    }
}
)}
</div>

<div className="exploremore-button">
  Explore more
</div>

</div>






);



}
export default ProductCategory;