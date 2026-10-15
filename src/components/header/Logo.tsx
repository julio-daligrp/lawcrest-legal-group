import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '@/src/assets/images/LC-logo.png';
import logoImage240 from '@/src/assets/images/LC-logo-240.png';
import logoImage480 from '@/src/assets/images/LC-logo-480.png';

export interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  onClick,
}) => {
  const isDark = variant === 'dark';

  return (
    <Link
      to="/"
      onClick={onClick}
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89A32] rounded-[2px] transition-opacity duration-200 hover:opacity-90 select-none ${className}`}
      aria-label="Lawcrest Legal Group - Inicio"
    >
      <img
        src={logoImage}
        srcSet={`${logoImage240} 240w, ${logoImage480} 480w, ${logoImage} 1176w`}
        sizes="(max-width: 640px) 120px, 160px"
        alt="Lawcrest Legal Group"
        className={`h-11 sm:h-12 lg:h-[52px] w-auto max-h-[56px] object-contain transition-all duration-200 ${
          !isDark ? 'brightness-0 invert drop-shadow-[0_1px_3px_rgba(200,154,50,0.4)]' : ''
        }`}
        loading="eager"
        decoding="async"
      />
    </Link>
  );
};
