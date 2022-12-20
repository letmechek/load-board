import './LoadItem.css'

import { Link } from "react-router-dom"

export default function LoadItem({loadItem}) {



  return(
  <div class="load-item">
  <Link to={loadItem._id}><h2>{loadItem.pickupLocation} to {loadItem.deliveryLocation}</h2></Link>
  <div class="load-details">
    <div class="detail">
      <p class="label">Pickup Date:</p>
      <p class="value">{loadItem.pickupDate}</p>
    </div>
    <div class="detail">
      <p class="label">Delivery Date:</p>
      <p class="value">{loadItem.deliveryDate}</p>
    </div>
    <div class="detail">
      <p class="label">Cargo Type:</p>
      <p class="value">{loadItem.cargoType}</p>
    </div>
    <div class="detail">
      <p class="label">Weight:</p>
      <p class="value">{loadItem.weight}</p>
    </div>
    <div class="detail">
      <p class="label">Rate:</p>
      <p class="value">{loadItem.rate}</p>
    </div>
    <div class="detail">
      <p class="label">Available:</p>
      <p class="value">{loadItem.available}</p>
    </div>
  </div>
</div>


  )
}