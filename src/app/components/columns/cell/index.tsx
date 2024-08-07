import { ReactNode } from 'react';
import clsx from 'clsx';

import './style.css';

interface CellProps {
  className?: string;
  children: ReactNode;
  isFirst?: boolean;
  isGrayText?: boolean;
}

export const Cell = ({
  className,
  children,
  isFirst,
  isGrayText,
}: CellProps) => {
  <div
    className={clsx('cell', className, {
      isFirst: isFirst,
      isGrayText: isGrayText,
    })}
  >
    {children}
  </div>;
};
