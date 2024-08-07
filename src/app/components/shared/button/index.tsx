import { ComponentProps, forwardRef } from 'react';
import clsx from 'clsx';

import './style.css';

type ButtonVariant = 'danger';

interface ButtonProps extends ComponentProps<'button'> {
  variant: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, className, ...props }, ref) => (
    <button ref={ref} className={clsx('button', variant, className)} {...props}>
      {children}
    </button>
  )
);
