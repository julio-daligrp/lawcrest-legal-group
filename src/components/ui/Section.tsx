import React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'warm-white' | 'white' | 'navy-main' | 'navy-deep';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  hasBorderBottom?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  variant = 'warm-white',
  spacing = 'md',
  className = '',
  hasBorderBottom = false,
  ...props
}) => {
  const variantClasses = {
    'warm-white': 'bg-[#F7F7F5] text-[#062446]',
    'white': 'bg-[#FFFFFF] text-[#062446]',
    'navy-main': 'bg-[#062446] text-[#FFFFFF]',
    'navy-deep': 'bg-[#031A39] text-[#FFFFFF]',
  }[variant];

  const spacingClasses = {
    none: 'py-0',
    sm: 'py-10 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
  }[spacing];

  const borderClass = hasBorderBottom
    ? variant === 'navy-main' || variant === 'navy-deep'
      ? 'border-b border-[#173C68]'
      : 'border-b border-[#062446]/10'
    : '';

  return (
    <section
      className={`relative w-full ${variantClasses} ${spacingClasses} ${borderClass} transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
