import React, { useContext } from "react";
import "./CartItems.css";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { ProductContext } from "../Context/ProductContext";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const CartItems = () => {
    const {totalCartAmount, Detail_product, cartItems, removeFromCart, addToCart} = useContext(ProductContext)
  
    return (
      
     <div className="cart-items">
   <div className="cartitem-main">
     <p>Product</p>
     <p>Title</p>
     <p>Price</p>
     <p>Quantity</p>
     <p>Total</p>
     <p>Rating</p>
   </div>
   <hr />
   {Detail_product.map((e) => {
      if(cartItems[e.id] > 0)
       {
       return <div>
      <div className="cartitem-format cartitem-main">
      <img src={e.image} alt="" className="carticon-icon" />
     <p>{e.name}</p>
     <p>${e.price}</p>
     <div>
     <AddIcon onClick={()=>{addToCart(e.id)}} style={{fontSize: "15"}} />
     <button className="cartitems-quantity">{cartItems[e.id]}</button>
     <RemoveIcon onClick={()=>{removeFromCart(e.id)}} style={{fontSize: "15"}}/>
     </div>
     <p>${e.price*cartItems[e.id]}</p> 
     <div className="product-rating">
      <StarOutlinedIcon style={{fontSize: "16"}}/>
      <StarOutlinedIcon style={{fontSize: "16"}}/>
      <StarOutlinedIcon style={{fontSize: "16"}}/>
      <StarOutlinedIcon style={{fontSize: "16"}}/>
     <StarBorderIcon style={{fontSize: "16"}}/>
</div>
   </div>
   <hr />
   </div>
      } 
      return  <div className="empty-cart">
      {
        cartItems===0 ? 
        <div>
        <h2>Your bag is empty</h2>
        <p>Keep shopping and add something.</p></div>:null
      }
      </div>
   }
   
   )}
  
   <div className="cartitems-below">
    <div className="cartitems-total">
         <h2>Cart Total</h2>
         <div>
            <div className="cartitem-total-item">
          <p>Subtotal</p>
          <p>${totalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
            <p>Shipping Fee</p>
             <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h4>Total</h4>
              <h4>${totalCartAmount()}</h4>
            </div>
         </div>
         <button>PROCEED TO CHECKOUT</button>
    </div>
    <div className="promo-code">
<p>If you have a promo code, Enter it here</p>
<div className="promo-box">
    <input type="text" placeholder="promo code" />
    <button>Submit</button>
</div>
    </div>
   </div>
   </div>



    );
}



export default CartItems;