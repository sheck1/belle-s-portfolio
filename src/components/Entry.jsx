import React from "react";


const Entry=() => {
return (
    <form>
    <h5>Subscribe to our newsletter</h5>
    <p>All the latest discounts and offers, in-store event info-straight to your inbox.</p>
    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
      <label for="newsletter1" className="visually-hidden">Email address</label>
      <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
      <button className="btn form-btn" type="button">Subscribe</button>
    </div>
  </form>

);
}



export default Entry;