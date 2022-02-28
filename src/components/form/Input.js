import React from "react";

const Input = ({ label, type, name, placeholder }) => {
  return (
    <div className="input-warper flex-1">
      <label htmlFor={name}>
        {label}
        <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        name={name}
        className="w-full border  p-2 pla outline-none  "
        id={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
