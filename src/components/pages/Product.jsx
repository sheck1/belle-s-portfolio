import  React, { useContext } from "react"; 
import { ProductContext } from "../Context/ProductContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Breadcrums/Breadcrum";
import ProductDisplay from "../Productdisplay/ProductDisplay";
import RelatedProducts from "../RelatedProducts/RelatedProducts";



const Product = () => {

   const {Detail_product} = useContext(ProductContext);
   const {productId} = useParams();
   const product = Detail_product.find((e) => e.id === Number(productId));

return(

<div>
<Breadcrum product={product}/>  
 <ProductDisplay product={product} />
 <RelatedProducts />
</div>
                   

);
}

export default Product;