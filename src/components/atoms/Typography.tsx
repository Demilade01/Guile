import { createElement, type HTMLAttributes } from 'react';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  /** Typography variant */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small' | 'label';
  /** HTML tag to render */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'label';
  /** Text content */
  children: React.ReactNode;
}

const variantStyles = {
  h1: 'text-5xl md:text-6xl font-bold tracking-tight',
  h2: 'text-4xl md:text-5xl font-bold tracking-tight',
  h3: 'text-3xl md:text-4xl font-bold',
  h4: 'text-2xl md:text-3xl font-semibold',
  body: 'text-base leading-relaxed',
  small: 'text-sm text-gray-600',
  label: 'text-sm font-medium text-black',
};

const defaultTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  small: 'p',
  label: 'label',
};

export const Typography = ({
  variant = 'body',
  as,
  children,
  className = '',
  ...props
}: TypographyProps) => {
  const tag = as || defaultTags[variant];
  const styles = `${variantStyles[variant]} ${className}`.trim();

  return createElement(tag, { className: styles, ...props }, children);
};

