import { useMeters } from '../../../api';
import { Icon } from '../shared/icon';
import { Icons } from '../shared/icon/enum/icon-enum';

import './style.css';

interface CellProps {
  value: string | number;
  id: number;
}

export const Cell = ({ value, id }: CellProps) => {
  const { handleDelete } = useMeters();

  return (
    <div className="cell">
      {value}
      <Icon name={Icons.trash} onClick={() => handleDelete(id)} />
    </div>
  );
};
