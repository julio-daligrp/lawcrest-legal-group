import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/src/i18n';
import logoImage from '@/src/assets/images/LC-logo-gold-crown.png';
import logoImage240 from '@/src/assets/images/LC-logo-gold-crown-240.png';
import logoImage360 from '@/src/assets/images/LC-logo-gold-crown-360.png';

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
  const { t, link } = useI18n();
  const sizeClasses =
    size === 'compact'
      ? 'h-[60px] sm:h-16 lg:h-[68px] max-h-[70px]'
      : 'h-[68px] sm:h-[76px] lg:h-[84px] max-h-[86px]';

  return (
    <Link
      to={link('/')}
      onClick={onClick}
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89A32] rounded-[2px] transition-opacity duration-200 hover:opacity-90 select-none ${className}`}
      aria-label={t('ui.logoAlt')}
    >
      <img
        src={logoImage}
        srcSet={`${logoImage240} 240w, ${logoImage360} 360w, ${logoImage} 473w`}
        sizes="(max-width: 640px) 60px, 80px"
        alt={t('ui.logoAlt')}
        className={`${sizeClasses} w-auto object-contain transition-all duration-200 ${
          !isDark ? 'brightness-0 invert drop-shadow-[0_1px_3px_rgba(200,154,50,0.4)]' : ''
        }`}
        loading="eager"
        decoding="async"
      />
    </Link>
  );
};
