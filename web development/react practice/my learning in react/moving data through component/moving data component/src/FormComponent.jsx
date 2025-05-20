import React, { useState } from 'react';

const FormComponent = ({ setFormData }) => {
  const [localForm, setLocalForm] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setLocalForm({ ...localForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();             // Prevent page reload
    setFormData(localForm);         // Send data to parent
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={localForm.name} onChange={handleChange} placeholder="Name"/>
      <input name="email" value={localForm.email} onChange={handleChange} placeholder="Email"/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
