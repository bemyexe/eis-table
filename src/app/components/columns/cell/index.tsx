import { ComponentProps } from 'react';
import clsx from 'clsx';

import './style.css';

interface CellProps extends ComponentProps<'div'> {
  isFirst?: boolean;
  isGrayText?: boolean;
}

export const Cell = ({
  className,
  children,
  isFirst,
  isGrayText,
  ...props
}: CellProps) => {
  return (
    <div
      className={clsx('cell', className, {
        isFirst: isFirst,
        isGrayText: isGrayText,
      })}
      {...props}
    >
      {children}
    </div>
  );
};
