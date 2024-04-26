import React from "react";


function Navbar() {

    return(

        <div className="menu-bar">
        <ul>
            <li><a >Shop All</a>
            <div className="sub-menu-1">
            <ul>
            <li><a>Hydrating</a></li>
            <li><a>All New</a></li>
            <li><a>Moisturizing</a></li>
            <li><a>Anti Aging</a></li>
            </ul>
            </div>
            </li>
            <li><a>Exclusive</a></li>
            <li><a>New Arrivals</a></li>
            <li><a>Sales</a></li>
            <li><a>Discover</a></li>
        </ul>
      </div>

    );
}


export default Navbar;