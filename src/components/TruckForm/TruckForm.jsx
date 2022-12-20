import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import mongoose from 'mongoose';

export default function TruckForm({}) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    user: '',
    make: '',
    model: '',
    year: '',
    cargoType: '',
    maxCapacity: '',
    availableCapacity: ''
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const createTruck = async () => {
      try {
        const formDataWithObjectId = {
          ...formData,
          user: mongoose.Types.ObjectId(),
        };
        const response = await fetch('/api/trucks', {
          method: 'POST',
          body: JSON.stringify(formDataWithObjectId),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        navigate('/trucks')
      } catch (error) {
        console.log(error)
      }
    };
    createTruck();
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User:
        <input
          type="text"
          name="user"
          value={formData.user}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Make:
        <input
          type="text"
          name="make"
          value={formData.make}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Model:
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Year:
        <input
          type="number"
          name="year"
          value={formData.year}
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
        Max Capacity:
        <input
          type="number"
          name="maxCapacity"
          value={formData.maxCapacity}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Available Capacity:
        <input
          type="number"
          name="availableCapacity"
          value={formData.availableCapacity}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
