import Table from 'rc-table';

import { useMeters } from '../api';
import { Comlumns } from '../const/const';

import './style.css';

export const App = () => {
  const { columns } = Comlumns();

  const { data, isLoading, page, setPage } = useMeters();

  if (isLoading) return <div>Loading</div>;

  return (
    <div className="app">
      <Table
        className="table"
        columns={columns}
        data={data}
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
