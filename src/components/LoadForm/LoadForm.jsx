// import React, { useState } from 'react';
// import { Form, Input, Select, DatePicker } from 'antd';

// export default function LoadForm({ onFinish, userOptions, locationOptions, truckOptions }) {
//   const [formData, setFormData] = useState({
//     user: '',
//     origin: '',
//     destination: '',
//     truck: '',
//     status: '',
//     pickupDate: '',
//     deliveryDate: '',
//     error: ''
//   });

//   function handleChange(evt) {
//     setFormData({
//       ...formData,
//       [evt.target.name]: evt.target.value,
//       error: ''
//     });
//   }

//   function handleDateChange(date, dateString, field) {
//     setFormData({
//       ...formData,
//       [field]: dateString,
//       error: ''
//     });
//   }

//   async function handleSubmit(evt) {
//     evt.preventDefault();
//     try {
//       const formDataCopy = { ...formData };
//       delete formDataCopy.error;
//       await onFinish(formDataCopy);
//     } catch {
//       setFormData({
//         ...formData,
//         error: 'Submission Failed - Try Again'
//       });
//     }
//   }

//   return (
//     <Form layout="vertical" onFinish={handleSubmit}>
//       <Form.Item label="User" name="user" rules={[{ required: true, message: 'Please select a user' }]}>
//         <Select options={userOptions} onChange={handleChange} value={formData.user} />
//       </Form.Item>
//       <Form.Item label="Origin" name="origin" rules={[{ required: true, message: 'Please select an origin' }]}>
//         <Select options={locationOptions} onChange={handleChange} value={formData.origin} />
//       </Form.Item>
//       <Form.Item label="Destination" name="destination" rules={[{ required: true, message: 'Please select a destination' }]}>
//         <Select options={locationOptions} onChange={handleChange} value={formData.destination} />
//       </Form.Item>
//       <Form.Item label="Truck" name="truck" rules={[{ required: true, message: 'Please select a truck' }]}>
//         <Select options={truckOptions} onChange={handleChange} value={formData.truck} />
//       </Form.Item>
//       <Form.Item label="Status" name="status" rules={[{ required: true, message: 'Please enter a status' }]}>
//         <Input value={formData.status} onChange={handleChange} />
//       </Form.Item>
//       <Form.Item label="Pickup Date" name="pickupDate" rules={[{ required: true, message: 'Please select a pickup date' }]}>
//         <DatePicker onChange={(date, dateString) => handleDateChange(date, dateString, 'pickupDate')} value={formData.pickupDate} />
//       </Form.Item>
//       <Form.Item label="Delivery Date" name="deliveryDate" rules={[{ required: true}]}></Form.Item></Form>)}

import React, { useState } from 'react';

export default function LoadForm() {
  const [formData, setFormData] = useState({
    user: '',
    origin: '',
    destination: '',
    truck: '',
    status: '',
    pickupDate: '',
    deliveryDate: ''
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
        Origin:
        <input
          type="text"
          name="origin"
          value={formData.origin}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Destination:
        <input
          type="text"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Truck:
        <input
          type="text"
          name="truck"
          value={formData.truck}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Status:
        <input
          type="text"
          name="status"
          value={formData.status}
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
      <button type="submit">Submit</button>
    </form>
  );
}
