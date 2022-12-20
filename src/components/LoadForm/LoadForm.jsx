import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoadForm() {
  const navigate = useNavigate()
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
       
        const response = await fetch('/api/loads', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        navigate('/loads')
      } catch (error) {
       
        console.log(error)
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
      <label>
         Available:
        <input
        type="checkbox"
        name="available"
        checked={formData.available}
        onChange={event => setFormData({ ...formData, available: event.target.checked })}
        />
        </label>
        
      <button type="submit">Submit</button></form>
      )}

