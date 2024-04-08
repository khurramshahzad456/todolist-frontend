import React from 'react';

import { IInput } from '../../interfaces';

const Input: React.FC<IInput> = ({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  required = false,
  className = 'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
  labelClassName = 'block text-sm mb-2 font-medium text-gray-900 dark:text-white',
}) => {
  return (
    <div>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={className}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
