import * as React from 'react';

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-blue-200 text-black hover:bg-blue-300',
  secondary: 'bg-gray-200 text-black hover:bg-gray-300',
  destructive: 'bg-red-200 text-black hover:bg-red-300',
  outline: 'border border-gray-500 text-gray-500 hover:bg-gray-100',
};

function Badge({ children, variant = 'default', className = '', ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-1.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
