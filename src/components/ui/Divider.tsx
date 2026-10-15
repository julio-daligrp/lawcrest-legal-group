import React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement | HTMLDivElement> {
  variant?: 'subtle' | 'gold' | 'navy' | 'accent-mark';
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  variant = 'subtle',
  orientation = 'horizontal',
  className = '',
  ...props
}) => {
  if (orientation === 'vertical') {
    const verticalClasses = {
      subtle: 'bg-[#062446]/15',
      gold: 'bg-[#C89A32]/40',
      navy: 'bg-[#173C68]',
      'accent-mark': 'bg-[#C89A32]',
    }[variant];

    return (
      <div
        className={`w-[1px] h-full inline-block ${verticalClasses} ${className}`}
        aria-hidden="true"
        {...props}
      />
    );
  }

  if (variant === 'accent-mark') {
    return (
      <div className={`relative flex items-center justify-center my-6 ${className}`} {...props}>
        <div className="w-full h-[1px] bg-[#062446]/10" />
        <div className="absolute w-6 h-[2px] bg-[#C89A32]" />
      </div>
    );
  }

  const horizontalClasses = {
    subtle: 'border-[#062446]/10',
    gold: 'border-[#C89A32]/30',
    navy: 'border-[#173C68]',
    'accent-mark': '',
  }[variant];

  return (
    <hr
      className={`border-0 border-t ${horizontalClasses} my-6 sm:my-8 ${className}`}
      {...props}
    />
  );
};
