import React from 'react';


const Intro = () => {
    return (

<div className="container-fluid title-page">
  <div className="row title-img">
    <div className="col-lg-8 col-sm-12">
    <img src="https://d1dxs113ar9ebd.cloudfront.net/225batonrouge/2020/11/image-5.jpg" alt=""/>
    </div>
    
    <div className="col-lg-4 col-sm-12 white">
    <div className='title-text'>
            <h5>New + Exclusive</h5>
           <h2>TREAT YOURSELF TO A BETTER SKIN</h2>
           <h1 className='italic-text'>20-25% off</h1>
           <p>+ DOUBLE SAMPLES!</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci eu lobortis elementum nibh tellus.</p>            
         <button type= "button"  className="btn btn-lg">SHOP NOW</button>
   </div>
   </div>
    </div> 
</div>


    );
}




export default Intro;