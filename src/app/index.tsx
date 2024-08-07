import { observer } from 'mobx-react-lite';
import Table from 'rc-table';

import { Area } from '../../@types';
import { useMetersQuery } from '../api/hooks/';
import { useAreasQuery } from '../api/hooks/use-areas-query';
import { formatAreas } from '../helpers';
import { mergeData } from '../helpers/merge-data';
import { paginationStore } from '../mobx/store';

import { COLUMNS } from './components/columns';
import { Button } from './components/shared/button';

import './style.css';

const MAX_TABLE_HEIGHT = 870;

export const App = observer(() => {
  const { currentPage } = paginationStore;
  const { meters = [], isLoading, isError } = useMetersQuery(currentPage);
  const { areas, isSuccessAreas } = useAreasQuery(meters);

  const formattedAreas = isSuccessAreas ? formatAreas(areas as Area[]) : [];

  const rows = mergeData(meters, formattedAreas);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className="app">
      <div className="wrapper">
        <div className="title">Список счетчиков</div>
        <Table
          className="table"
          columns={COLUMNS}
          data={rows}
          scroll={{ y: MAX_TABLE_HEIGHT }}
          footer={() => (
            <div className="pagination">
              <Button
                variant="paginate"
                onClick={() => paginationStore.prevPage()}
              >
                prev
              </Button>
              <p>{currentPage}</p>
              <Button
                variant="paginate"
                onClick={() => paginationStore.nextPage()}
              >
                next
              </Button>
            </div>
          )}
        />
      </div>
    </div>
  );
});
