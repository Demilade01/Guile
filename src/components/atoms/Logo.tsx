interface LogoProps {
  /** Logo size */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

export const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizes = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
  };

  return (
    <img
      src="/guileinc_logo.jpeg"
      alt="Guile - A better booking app for barbers"
      className={`${sizes[size]} w-auto object-contain ${className}`.trim()}
    />
  );
};
