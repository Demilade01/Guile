import { forwardRef, type InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Input type */
  type?: 'text' | 'email' | 'tel' | 'password';
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
      <div className="w-full">
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={inputClasses}
          disabled={disabled}
          {...props}
        />
        {error && errorMessage && (
          <p className="mt-1 text-sm text-gray-600">{errorMessage}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

