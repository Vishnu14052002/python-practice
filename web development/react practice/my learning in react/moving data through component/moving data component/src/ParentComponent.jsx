import React, { useState } from 'react';
import FormComponent from './FormComponent';
import DisplayComponent from './DisplayComponent';

const ParentComponent = () => {
  const [formData, setFormData] = useState({}); // Store form data

  return (
    <div>
      <FormComponent setFormData={setFormData} />
      <DisplayComponent formData={formData} />
    </div>
  );
};

export default ParentComponent;
