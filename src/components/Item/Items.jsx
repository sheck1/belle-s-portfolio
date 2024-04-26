import React from "react";
import { Link } from "react-router-dom";


const Items = (props) => {

return (
  <div className="flex-container">
<div classsName="card item-card">
 <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} style={{width: "90%"}} classsName="card-img-top" alt="..." /></Link>
  <div classsName="card-body">
    <h5 classsName="card-title">{props.name}</h5>
    <p classsName="card-text">{props.description}</p>
    <p>${props.price}</p>
  </div>
  </div>
  </div> 

);



}


export default Items;