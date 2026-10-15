import React from 'react';

export type TextVariant = 'lead' | 'body' | 'small' | 'caption' | 'nav';
export type TextColor = 'primary' | 'secondary' | 'muted' | 'white' | 'gold' | 'inherit';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  color?: TextColor;
  as?: React.ElementType;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  color = 'inherit',
  as: Component = 'p',
  className = '',
  children,
  ...props
}) => {
  const variantStyles: Record<TextVariant, string> = {
    lead: 'text-base sm:text-lg md:text-xl font-sans font-light leading-relaxed',
    body: 'text-sm sm:text-base font-sans font-normal leading-relaxed',
    small: 'text-xs sm:text-sm font-sans font-normal leading-normal',
    caption: 'text-xs font-sans font-medium uppercase tracking-[0.15em]',
    nav: 'text-sm font-sans font-medium tracking-wide',
  };

  const colorStyles: Record<TextColor, string> = {
    primary: 'text-[#062446]',
    secondary: 'text-[#173C68]',
    muted: 'text-[#062446]/70',
    white: 'text-[#FFFFFF]',
    gold: 'text-[#C89A32]',
    inherit: '',
  };

  return (
    <Component
      className={`
        ${variantStyles[variant]}
        ${colorStyles[color]}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
};
