import Table from 'rc-table';

import { useAreas, useMeters } from '../api';
import { Comlumns } from '../const/const';

import './style.css';

export const App = () => {
  const { columns } = Comlumns();

  const { meters, isLoading, page, setPage } = useMeters();
  const { areasQueries } = useAreas(meters);
  if (isLoading) return <div>Loading</div>;

  // const data = [...meters, ...areas];

  const newArray = meters.map((meter) => {
    const area =
      areasQueries.success &&
      areasQueries.data.find((a) => a.id === meter.area.id);
    return {
      ...meter,
      area: area?.address,
    };
  });

  return (
    <div className="app">
      <Table
        className="table"
        columns={columns}
        data={newArray}
        scroll={{ y: 870 }}
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
