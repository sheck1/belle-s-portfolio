import React, {createContext, useState} from "react";
import Detail_product from "../Details";

export const ProductContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < Detail_product.length+1; index++) {
        cart[index] = 0;
    }
       return cart;
}

const ProductContextProvider = (props) => {
    const [cartItems, setCartItems] = useState( getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prevValue) => ({...prevValue,[itemId]:prevValue[itemId]+1}))
    
    }
    const removeFromCart = (itemId) => {
        setCartItems((prevValue) => ({...prevValue,[itemId]:prevValue[itemId]-1}))
    }
   const totalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0) {
            let itemInfo = Detail_product.find((product)=>product.id===Number(item))
            totalAmount += itemInfo.price*cartItems[item];
        }
       
    }
    return totalAmount;
   }

   const totalCartItem = () => {
    let totalItem = 0;
    for(const item in cartItems) 
    {
        if(cartItems[item]>0) 
        {
            totalItem+= cartItems[item]
        }
    }
    return totalItem;
   }

    const contextValue = { totalCartItem, totalCartAmount, Detail_product, cartItems, addToCart, removeFromCart};

    return (
        <ProductContext.Provider value={contextValue}>
           {props.children}
        </ProductContext.Provider>

    )
}

export default ProductContextProvider;
 

