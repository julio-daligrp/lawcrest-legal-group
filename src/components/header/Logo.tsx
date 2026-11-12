import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '@/src/assets/images/LC-logo-gold-crown.png';
import logoImage240 from '@/src/assets/images/LC-logo-gold-crown-240.png';
import logoImage480 from '@/src/assets/images/LC-logo-gold-crown-480.png';

export interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'default' | 'compact';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'default',
  className = '',
  onClick,
}) => {
  const isDark = variant === 'dark';
  const sizeClasses =
    size === 'compact'
      ? 'h-14 sm:h-16 lg:h-[64px] max-h-[64px]'
      : 'h-16 sm:h-[72px] lg:h-[80px] max-h-[80px]';

  return (
    <Link
      to="/"
      onClick={onClick}
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89A32] rounded-[2px] transition-opacity duration-200 hover:opacity-90 select-none ${className}`}
      aria-label="Lawcrest Legal Group - Inicio"
    >
      <img
        src={logoImage}
        srcSet={`${logoImage240} 240w, ${logoImage480} 480w, ${logoImage} 1188w`}
        sizes="(max-width: 640px) 60px, 80px"
        alt="Lawcrest Legal Group"
        className={`${sizeClasses} w-auto object-contain transition-all duration-200 ${
          !isDark ? 'brightness-0 invert drop-shadow-[0_1px_3px_rgba(200,154,50,0.4)]' : ''
        }`}
        loading="eager"
        decoding="async"
      />
    </Link>
  );
};
