import React from "react";
import Entry from "./Entry";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  
  const year = new Date().getFullYear();

 return (
<div className="container">
  <footer className="py-5">
    <div className="row footer-row">
    <div className="col-md-5 footer-nav">
        <Entry />
      </div>

      <div className="col-6 col-md-2 mb-3 footer-nav">
        <h5>CUSTOMER SERVICE</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a className="nav-link p-0">Order Status</a></li>
          <li className="nav-item mb-2"><a className="nav-link p-0">Returns</a></li>
          <li className="nav-item mb-2"><a className="nav-link p-0">Help & FAQs</a></li>
          <li className="nav-item mb-2"><a className="nav-link p-0">Gift Card Balance</a></li>
          <li className="nav-item mb-2"><a className="nav-link p-0">Contact Us</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3 footer-nav">
        <h5>MY ACCOUNT</h5>
        <ul className="nav flex-column ">
          <li className="nav-item mb-2"><a className="nav-link p-0">My account</a></li>
          <li className="nav-item mb-2"><a className="nav-link p-0">Checkouts</a></li>
          <li className="nav-item mb-2"><a className="nav-link p-0">Cart</a></li>
          <li className="nav-item mb-2"><a className="nav-link p-0">Wishlist</a></li>
          <li className="nav-item mb-2"><a className="nav-link p-0">Order Tracking</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3 footer-nav">
        <h5>LEGAL</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a className="nav-link p-0 ">Terms & Conditions</a></li>
          <li className="nav-item mb-2"><a className="nav-link p-0">Privacy Policy</a></li>
          <li className="nav-item mb-2"><a className="nav-link p-0">Delivery Information</a></li>
          <li className="nav-item mb-2"><a className="nav-link p-0">Payment Method</a></li>
          <li className="nav-item mb-2"><a className="nav-link p-0">Payments & Returns</a></li>
        </ul>
      </div>

    <div >
      <p>&copy; {year} Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link p-0-dark">
          <FacebookIcon sx={{
                color: "#f6f7f8",
               }}/>
        </a></li>
        <li className="ms-3"><a className="link p-0-dark">
          <TwitterIcon sx={{
                color: "#f6f7f8",
               }}/>
        </a></li>
        <li className="ms-3"><a className="link p-0-dark">
          <InstagramIcon sx={{
                color: "#f6f7f8",
               }}/>
        </a></li>
        <li className="ms-3"><a className="link p-0-dark">
          <YouTubeIcon sx={{
                color: "#f6f7f8",
               }}/>
        </a></li>
        
      </ul>
    </div>
    </div>
  </footer>
</div>


 );

}





export default Footer;