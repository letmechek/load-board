import React, { useState } from 'react';

export default function LocationForm() {
  const [formData, setFormData] = useState({
    city: '',
    state: '',
    zip_code: ''
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
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        ZIP Code:
        <input
          type="number"
          name="zip_code"
          value={formData.zip_code}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
