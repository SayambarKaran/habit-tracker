import React from 'react';

const Form = ({ formData, setFormData, onSubmit, formControls, buttonText }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {formControls.map((control) => (
        <div key={control.name} className="flex flex-col">
          <label htmlFor={control.name} className="text-white font-semibold">{control.label}</label>
          <input
            id={control.name}
            name={control.name}
            type={control.type}
            placeholder={control.placeholder}
            value={formData[control.name]}
            onChange={handleChange}
            className="p-2 rounded"
          />
        </div>
      ))}
      <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        {buttonText}
      </button>
    </form>
  );
};

export default Form;