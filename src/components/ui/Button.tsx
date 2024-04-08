import React from 'react';

import { IButton } from '../../interfaces';

const Button: React.FC<IButton> = ({
  children,
  type,
  className,
  onClick,
  loading,
}) => {
  const defaultClass =
    'w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800';
  const combinedClass = className
    ? `${defaultClass} ${className}`
    : defaultClass;

  return (
    <button
      type={type}
      className={combinedClass}
      onClick={onClick}
      disabled={loading}
    >
      {loading && (
        <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2 inline-block'></div>
      )}
      {children}
    </button>
  );
};

export default Button;
