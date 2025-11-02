interface CityBadgeProps {
  /** City name */
  city: 'Boston' | 'NYC';
  /** Badge size */
  size?: 'sm' | 'md';
  /** Additional CSS classes */
  className?: string;
}

export const CityBadge = ({ city, size = 'md', className = '' }: CityBadgeProps) => {
  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full border-2 border-black bg-white text-black ${sizes[size]} ${className}`.trim()}
    >
      {city}
    </span>
  );
};

