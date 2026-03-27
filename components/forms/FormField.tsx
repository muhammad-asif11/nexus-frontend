import React from "react";

interface FormFieldProps {
  label?: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-sm font-semibold text-gray-600 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 bg-shadoWhite disabled:bg-gray-100"
      />
    </div>
  );
};

export default FormField;