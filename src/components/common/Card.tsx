import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

function Card({ className = '', children }: CardProps) {
  return <div className={`bg-white shadow-md rounded-lg ${className}`}>{children}</div>;
}

function CardHeader({ className = '', children }: CardProps) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
}

function CardContent({ className = '', children }: CardProps) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
}

function CardFooter({ className = '', children }: CardProps) {
  return <div className={`px-6 py-4 border-t ${className}`}>{children}</div>;
}

function CardTitle({ className = '', children }: CardProps) {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
}

export { Card, CardHeader, CardContent, CardFooter, CardTitle };
