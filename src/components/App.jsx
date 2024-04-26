import React from 'react';
import Intro from "./Intro";
import Product from "./Product";
import About from "./About";
import Category  from "./Category";



function App() {

    return ( 
   
     <div className="flex-container">

     <div>
     <Intro />
     </div>
     
   <div id="content-section">
   <About />
    <Product /> 
   </div>

   <div id="slider-section">
   <div className='category-text'>
     <h3>SHOP BY COLLECTION</h3>
   </div>
    <Category />
   </div>

    </div>
 
    );
}



export default App;