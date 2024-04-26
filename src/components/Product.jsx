import React from "react";



const Product = (props) => {
  return (
    <div className="container-fluid grey-area">
    <div className="row">
    <div className="col  col-lg-6 col-md-6 col-sm-12">
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner skin-content">
      <div className="carousel-item active" data-bs-interval="1000">
        <img src="https://i.pinimg.com/originals/9a/45/c0/9a45c0cec212da6616c6c7674575f39c.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src="https://i.pinimg.com/originals/3f/56/a1/3f56a1530335c8d826c75f5c2edcd61f.png" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item item-3" data-bs-interval="2000">
        <img src="https://i.pinimg.com/originals/f5/1e/c0/f51ec05a951eebd18db06026c6b85824.jpg" className="d-block w-100" alt="..."/>
      </div>
    </div>
    </div>
    
    </div>

    <div className="col col-lg-6 col-md-6 col-sm-12">
      <div className="carousel-text">
          <h6  className="text-1">ENJOY THE ROMANCE IN SKINCARE</h6>
         <h1 className="text-2">HIS & HERS COLLECTION KIT</h1>
         <p className="text-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore magna aliqua. Ornare lectus sit amet est placerat in egestas. Elementum nibh tellus molestie nunc.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>        
        <button type= "button"  className="btn btn-outline-primary btn-lg skin-button">SHOP NOW</button>
      </div>
    </div>
   </div>
    </div>

  );


}



export default Product;