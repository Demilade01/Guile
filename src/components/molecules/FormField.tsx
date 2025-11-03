import { forwardRef, type InputHTMLAttributes } from 'react';
import { Input } from '../atoms/Input.tsx';
import { Typography } from '../atoms/Typography.tsx';

export interface FormFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Input type */
  type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'url' | 'search';
  /** Label text */
  label: string;
  /** Error message */
  errorMessage?: string;
  /** Whether field is required */
  required?: boolean;
  /** Helper text */
  helperText?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  (
    {
      label,
      errorMessage,
      required = false,
      helperText,
      className = '',
      id,
      ...inputProps
    },
    ref
  ) => {
    const fieldId = id || `field-${label.toLowerCase().replace(/\s+/g, '-')}`;
    const hasError = !!errorMessage;

    return (
      <div className={`flex flex-col gap-2 w-full ${className}`.trim()}>
        <label
          htmlFor={fieldId}
          className="block mb-1 text-sm font-medium text-white"
        >
          {label}
          {required && <span className="text-gray-400 ml-1" aria-label="required">*</span>}
        </label>
        <Input
          ref={ref}
          id={fieldId}
          error={hasError}
          errorMessage={errorMessage}
          {...inputProps}
        />
        {helperText && !hasError && (
          <Typography variant="small" className="mt-0.5 text-gray-400">
            {helperText}
          </Typography>
        )}
        {hasError && errorMessage && (
          <Typography variant="small" className="mt-0.5 text-red-400 font-medium">
            {errorMessage}
          </Typography>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';

