import { ReactNode } from 'react';

import { formatDate } from '../../../helpers';
import { Cell } from '../cell';
import { Icon } from '../shared/icon';
import { Icons } from '../shared/icon/enum/icon-enum';

interface ColumnProps {
  title: string;
  dataIndex: string;
  key: string;
  width: number;
  render?: (value: any, record: any, index: number) => ReactNode;
}

export const COLUMNS: ColumnProps[] = [
  {
    title: '№',
    dataIndex: 'id',
    key: 'id',
    width: 48,
    render: (_, __, index) => <span>{index + 1}</span>,
  },
  {
    title: 'Тип',
    dataIndex: '_type',
    key: '_type',
    width: 120,
    render: (value) => <span>{value[0]}</span>,
  },
  {
    title: 'Дата установки',
    dataIndex: 'installation_date',
    key: 'installation_date',
    width: 160,
    render: (value) => <span>{formatDate(value)}</span>,
  },
  {
    title: 'Автоматический',
    dataIndex: 'is_automatic',
    key: 'is_automatic',
    width: 128,
    render: (value) => (
      <span>{value === null ? 'N/D' : value ? 'Да' : 'Нет'}</span>
    ),
  },
  {
    title: 'Текущие показания',
    dataIndex: 'initial_values',
    key: 'initial_values',
    width: 146,
  },
  {
    title: 'Адрес',
    dataIndex: 'area',
    key: 'area',
    width: 430,
  },
  {
    title: 'Примечание',
    dataIndex: 'description',
    key: 'description',
    width: 304,
    render: (value) => <Cell value={value} />,
  },
  {
    title: '',
    dataIndex: '',
    key: 'operations',
    width: 72,
    render: (_, record) => (
      <Icon name={Icons.trash} onClick={() => console.log(record.id)} />
    ),
  },
];
