import { useState } from 'react';
import Table from 'rc-table';

import { Area, Meter } from '../../@types';
import { useMetersQuery } from '../api/hooks/';
import { useAreasQuery } from '../api/hooks/use-areas-query';

import { COLUMNS } from './components/columns';

import './style.css';

const MAX_TABLE_HEIGHT = 870;

export const App = () => {
  const [page, setPage] = useState(1);

  const { meters, isLoading } = useMetersQuery(page);
  const { areas, isSuccessAreas } = useAreasQuery(meters);

  // const areas1 = formatAreas(areas);

  if (isLoading) return <div>Loading</div>;

  // const newArray = meters?.map((meter: Meter) => {
  //   const area =
  //     isSuccessAreas && areas1?.find((a: Area) => a.id === meter.area.id);

  //   return {
  //     ...meter,
  //     area: area?.address,
  //   };
  // });

  return (
    <div className="app">
      <Table
        className="table"
        columns={COLUMNS}
        data={meters}
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
  );
};
