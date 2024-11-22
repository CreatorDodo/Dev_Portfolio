import React from 'react';

interface CircleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
}

function CircleButton({ className = '', variant = 'outline', size = 'md', children, ...props }: CircleButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variantStyles = {
    outline: 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500 shadow-sm',
    solid: 'bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500 shadow-md',
  };

  const sizeStyles = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  return (
    <button
      type="button"
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default CircleButton;
