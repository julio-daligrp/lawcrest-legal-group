import React from 'react';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  as?: HeadingLevel | 'div' | 'span';
  variant?: 'navy-main' | 'navy-deep' | 'gold-main' | 'white' | 'inherit';
  hasAccentBar?: boolean;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 'h2',
  as,
  variant = 'inherit',
  hasAccentBar = false,
  className = '',
  children,
  ...props
}) => {
  const Component = as || level;

  const levelStyles: Record<HeadingLevel, string> = {
    h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[1.15]',
    h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight leading-[1.2]',
    h3: 'text-xl sm:text-2xl md:text-3xl font-serif font-medium tracking-normal leading-[1.25]',
    h4: 'text-lg sm:text-xl md:text-2xl font-serif font-medium leading-[1.3]',
    h5: 'text-base sm:text-lg font-serif font-semibold uppercase tracking-wider leading-[1.4]',
  };

  const variantStyles = {
    'navy-main': 'text-[#062446]',
    'navy-deep': 'text-[#031A39]',
    'gold-main': 'text-[#C89A32]',
    'white': 'text-[#FFFFFF]',
    'inherit': '',
  }[variant];

  return (
    <Component
      className={`
        ${levelStyles[level]}
        ${variantStyles}
        [text-wrap:balance]
        ${className}
      `}
      {...props}
    >
      {children}
      {hasAccentBar && (
        <span
          className="block w-12 h-[2px] bg-[#C89A32] mt-3"
          aria-hidden="true"
        />
      )}
    </Component>
  );
};
