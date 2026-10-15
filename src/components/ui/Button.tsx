import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline-on-dark';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    // Sizing with mobile-friendly min-height (>= 44px for accessible touch targets on mobile)
    const sizeClasses = {
      sm: 'min-h-[40px] px-4 py-2 text-xs tracking-wider uppercase',
      md: 'min-h-[44px] px-6 py-2.5 text-xs sm:text-sm tracking-wider uppercase',
      lg: 'min-h-[50px] px-8 py-3.5 text-sm tracking-widest uppercase',
    }[size];

    // Discrete luxury styling - subtle gold touch, no rounded pills
    const variantClasses = {
      // Primary: Deep navy base, white text, subtle gold border accent, refined hover
      primary:
        'bg-[#062446] text-[#FFFFFF] border border-[#C89A32]/50 hover:bg-[#031A39] hover:border-[#C89A32] hover:text-[#FFFFFF] active:bg-[#031A39] focus-visible:ring-2 focus-visible:ring-[#C89A32] shadow-sm',
      
      // Secondary: Crisp background or transparent, gold border, navy text
      secondary:
        'bg-transparent text-[#062446] border border-[#C89A32] hover:bg-[#062446] hover:text-[#FFFFFF] active:bg-[#031A39] focus-visible:ring-2 focus-visible:ring-[#C89A32]',
      
      // Outline on dark navy surfaces
      'outline-on-dark':
        'bg-transparent text-[#F7F7F5] border border-[#C89A32] hover:bg-[#C89A32]/15 hover:text-[#FFFFFF] active:bg-[#C89A32]/25 focus-visible:ring-2 focus-visible:ring-[#D8B65A]',
      
      // Ghost: Subdued text with subtle gold underline hover
      ghost:
        'bg-transparent text-[#062446] border border-transparent hover:text-[#C89A32] active:bg-black/5',
    }[variant];

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`
          relative inline-flex items-center justify-center font-sans font-medium select-none
          rounded-[2px] transition-all duration-200 ease-out cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
          ${sizeClasses}
          ${variantClasses}
          ${fullWidth ? 'w-full' : 'w-auto'}
          ${className}
        `}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
