// import React, { useState } from 'react';

// export default function LoadForm() {
//   const [formData, setFormData] = useState({
//     pickupLocation: '',
//     deliveryLocation: '',
//     pickupDate: '',
//     deliveryDate: '',
//     cargoType: '',
//     weight: 0,
//     rate: 0,
//     available: true,
//     assignedTruck: null
//   });

//   const handleChange = event => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     const createLoad = async () => {
//       try {
//         // Make the API call to create the load
//         const response = await fetch('/api/loads', {
//           method: 'POST',
//           body: JSON.stringify(formData),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         // Do something with the response (e.g. display a success message)
//       } catch (error) {
//         // Handle the error (e.g. display an error message)
//       }
//     };
//     createLoad();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         User:
//         <input
//           type="text"
//           name="user"
//           value={formData.user}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />
//       <label>
//         Origin:
//         <input
//           type="text"
//           name="origin"
//           value={formData.origin}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />
//       <label>
//         Destination:
//         <input
//           type="text"
//           name="destination"
//           value={formData.destination}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />
//       <label>
//         Truck:
//         <input
//           type="text"
//           name="truck"
//           value={formData.truck}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />
//       <label>
//         Status:
//         <input
//           type="text"
//           name="status"
//           value={formData.status}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />
//       <label>
//         Pickup Date:
//         <input
//           type="text"
//           name="pickupDate"
//           value={formData.pickupDate}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />
//       <label>
//         Delivery Date:
//         <input
//           type="text"
//           name="deliveryDate"
//           value={formData.deliveryDate}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//     )
//     }

import React, { useState } from 'react';

export default function LoadForm() {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    deliveryLocation: '',
    pickupDate: '',
    deliveryDate: '',
    cargoType: '',
    weight: 0,
    rate: 0,
    available: true,
    assignedTruck: null
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const createLoad = async () => {
      try {
        // Make the API call to create the load
        const response = await fetch('/api/loads', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        // Do something with the response (e.g. display a success message)
      } catch (error) {
        // Handle the error (e.g. display an error message)
      }
    };
    createLoad();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pickup Location:
        <input
          type="text"
          name="pickupLocation"
          value={formData.pickupLocation}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Delivery Location:
        <input
          type="text"
          name="deliveryLocation"
          value={formData.deliveryLocation}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Pickup Date:
        <input
          type="date"
          name="pickupDate"
          value={formData.pickupDate}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Delivery Date:
        <input
          type="date"
          name="deliveryDate"
          value={formData.deliveryDate}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Cargo Type:
        <input
          type="text"
          name="cargoType"
          value={formData.cargoType}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Weight:
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Rate:
        <input
          type="number"
          name="rate"
          value={formData.rate}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button></form>
      )}

