import { Meter } from '../../../../../@types';
import { useDeleteMeterMutation } from '../../../../api/hooks';
import { usePressState } from '../../../../api/hooks/use-press-state';
import { paginationStore } from '../../../../mobx/store';
import { Button } from '../../shared/button';
import { Icon } from '../../shared/icon';
import { Icons } from '../../shared/icon/enum/icon-enum';

import './style.css';

interface OperationCellProps {
  meterId: Meter['id'];
}

export const OperationCell = ({ meterId }: OperationCellProps) => {
  const currentPage = paginationStore.currentPage;

  const { mutation } = useDeleteMeterMutation(currentPage);

  const handleDeleteMeter = () => {
    // mutation.mutate(meterId);
    console.log('fff');
  };

  const { ref: ref, isPressed: isPressed } = usePressState<HTMLButtonElement>();

  return (
    <Button variant="danger" onClick={handleDeleteMeter} ref={ref}>
      <Icon name={isPressed ? Icons.trashActive : Icons.trash} />
    </Button>
  );
};
