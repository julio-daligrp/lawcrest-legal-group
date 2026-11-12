import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'default' | 'narrow' | 'wide' | 'full';
  /** Esquema de margen horizontal. */
  padding?: 'default' | 'header';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'default',
  padding = 'default',
  className = '',
  ...props
}) => {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-[1240px]',
    wide: 'max-w-[1440px]',
    full: 'max-w-full',
  }[size];

  const paddingClasses = {
    default: 'px-4 sm:px-6 md:px-8 lg:px-12',
    // Header: mayor aire lateral para que el logotipo no quede pegado al borde.
    header: 'px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16',
  }[padding];

  return (
    <div
      className={`w-full mx-auto ${paddingClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
