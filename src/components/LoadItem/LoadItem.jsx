
export default function LoadItem({loadItem}) {


  return (
    <ul>
      
        <li >
          <h3>{loadItem.pickupLocation} to {loadItem.deliveryLocation}</h3>
          <p>Pickup Date: {loadItem.pickupDate}</p>
          <p>Delivery Date: {loadItem.deliveryDate}</p>
          <p>Cargo Type: {loadItem.cargoType}</p>
          <p>Weight: {loadItem.weight}</p>
          <p>Rate: {loadItem.rate}</p>
          <p>Available: {loadItem.available}</p></li>
          </ul>
  )
}