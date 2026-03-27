import React from "react";

interface FormTextareaProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  rows = 4,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-sm font-medium text-gray-600 mb-1">{label}</label>
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        rows={rows}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>
  );
};

export default FormTextarea;