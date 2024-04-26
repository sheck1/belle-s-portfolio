import React, { useContext } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';       
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";
import { ProductContext } from './Context/ProductContext';


function Header() {

  const { totalCartItem } = useContext(ProductContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand"><Link style={{textDecoration: "none"}} to="/">Skin</Link></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
             <a className="nav-link "> <Link style={{textDecoration: "none"}} to="/Signin">Sign in</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">
                <FavoriteBorderIcon />
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link "><Link style={{textDecoration: "none"}} to="/cart">
                <ShoppingBasketIcon   />
                <div className='icon'>
                {totalCartItem()}
                </div>
                </Link></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>    

    )
}


export default Header;