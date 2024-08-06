import { useState } from 'react';
import Table from 'rc-table';

import { Area } from '../../@types';
import { useMetersQuery } from '../api/hooks/';
import { useAreasQuery } from '../api/hooks/use-areas-query';
import { formatAreas } from '../helpers';
import { mergeData } from '../helpers/merge-data';

import { COLUMNS } from './components/columns';

import './style.css';

const MAX_TABLE_HEIGHT = 870;

export const App = () => {
  const [page, setPage] = useState(1);

  const { meters = [], isLoading } = useMetersQuery(page);
  const { areas, isSuccessAreas } = useAreasQuery(meters);

  const formattedAreas = isSuccessAreas ? formatAreas(areas as Area[]) : [];

  const rows = mergeData(meters, formattedAreas);

  if (isLoading) return <div>Loading</div>;

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
            <div>
              <button
                onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
              >
                prev
              </button>
              {'              '} <p>{page}</p>
              <button onClick={() => setPage((prevPage) => prevPage + 1)}>
                next
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
};
