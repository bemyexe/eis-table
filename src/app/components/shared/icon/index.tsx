import { ComponentProps } from 'react';

import { Icons } from './enum/icon-enum';

export interface IconProps extends ComponentProps<'svg'> {
  name: Icons;
}

export const Icon = ({
  name,
  width = '14px',
  height = '16px',
  className,
  ...props
}: IconProps) => (
  <svg width={width} height={height} className={className} {...props}>
    <use xlinkHref={`/assets/icons.svg#${name}`} />
  </svg>
);
