import React, { useState } from 'react';

export default function TruckForm() {
  const [formData, setFormData] = useState({
    user: '',
    make: '',
    model: '',
    year: '',
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
    // send formData to the server here
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
