import { forwardRef, type InputHTMLAttributes } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Input type */
  type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'url' | 'search';
  /** Placeholder text */
  placeholder?: string;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      placeholder,
      error = false,
      errorMessage,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'w-full px-4 py-3 text-base border-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const normalStyles =
      'border-gray-300 bg-white text-black focus:border-black focus:ring-black placeholder:text-gray-400';
    const errorStyles =
      'border-gray-600 bg-white text-black focus:border-black focus:ring-black';

    const inputClasses = `${baseStyles} ${
      error ? errorStyles : normalStyles
    } ${className}`.trim();

    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={inputClasses}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

