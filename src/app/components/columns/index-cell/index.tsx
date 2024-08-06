import { observer } from 'mobx-react-lite';

import { paginationStore } from '../../../../mobx/store';

interface IndexCellProps {
  index: number;
}

const OFFSET = 20;

export const IndexCell = observer(({ index }: IndexCellProps) => {
  const { currentPage } = paginationStore;
  return <span>{(currentPage - 1) * OFFSET + index + 1}</span>;
});
