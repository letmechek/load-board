
export default function LoadItem(load) {


  return (
    <ul>
      
        <li >
          <h3>{load.pickupLocation} to {load.deliveryLocation}</h3>
          <p>Pickup Date: {load.pickupDate}</p>
          <p>Delivery Date: {load.deliveryDate}</p>
          <p>Cargo Type: {load.cargoType}</p>
          <p>Weight: {load.weight}</p>
          <p>Rate: {load.rate}</p>
          <p>Available: {load.available}</p></li>
          </ul>
  )
}