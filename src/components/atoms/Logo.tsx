interface LogoProps {
  /** Logo size */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

export const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizes = {
    sm: { width: 100, height: 32, fontSize: '18px' },
    md: { width: 140, height: 44, fontSize: '26px' },
    lg: { width: 180, height: 56, fontSize: '34px' },
  };

  const sizeConfig = sizes[size];

  return (
    <svg
      width={sizeConfig.width}
      height={sizeConfig.height}
      viewBox="0 0 140 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Scissors blades - integrated with 'g' and 'u' */}
      <path
        d="M8 32 L18 12 L28 20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M28 20 L38 12 L48 32"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* 'g' - left handle forms the loop */}
      <path
        d="M12 24 Q8 28 8 32 Q8 36 12 36 Q16 36 20 32"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* 'u' - right handle extends from scissors */}
      <path
        d="M32 12 L32 32 Q32 36 36 36 Q40 36 40 32 L40 28"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* 'i' */}
      <line
        x1="52"
        y1="12"
        x2="52"
        y2="32"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="52" cy="8" r="2" fill="white" />

      {/* 'l' */}
      <line
        x1="62"
        y1="12"
        x2="62"
        y2="36"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* 'e' */}
      <path
        d="M72 12 L72 32 M72 12 L82 12 Q86 12 86 16 Q86 20 82 20 L72 20 M82 20 Q86 20 86 24 Q86 28 82 28 L72 28"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};
