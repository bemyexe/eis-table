import { ReactNode } from 'react';

import { formatDate } from '../../../helpers';
import { Icon } from '../shared/icon';
import { IconKey, Icons } from '../shared/icon/enum/icon-enum';

import { Cell } from './cell';

import './style.css';

const IS_AUTOMATIC_MAP: { [key: string]: string } = {
  null: 'Н/Д',
  true: 'Да',
  false: 'Нет',
};

const TYPE_MAP: { [key: string]: string } = {
  ColdWaterAreaMeter: 'ХВС',
  HotWaterAreaMeter: 'ГВС',
};

interface ColumnProps {
  title: string;
  dataIndex: string;
  key: string;
  width: number;
  render: (value: any, record: any, index: number) => ReactNode;
}

export const COLUMNS: ColumnProps[] = [
  {
    title: '№',
    dataIndex: 'id',
    key: 'id',
    width: 48,
    render: (_, __, index) => (
      <Cell isFirst isGrayText>
        {index + 1}
      </Cell>
    ),
  },
  {
    title: 'Тип',
    dataIndex: '_type',
    key: '_type',
    width: 120,
    render: (value: IconKey[]) => (
      <Cell className="type-cell">
        <Icon name={Icons[value[0]]} />
        {TYPE_MAP[value[0]]}
      </Cell>
    ),
  },
  {
    title: 'Дата установки',
    dataIndex: 'installation_date',
    key: 'installation_date',
    width: 160,
    render: (value) => <Cell>{formatDate(value)}</Cell>,
  },
  {
    title: 'Автоматический',
    dataIndex: 'is_automatic',
    key: 'is_automatic',
    width: 128,
    render: (value) => <Cell>{IS_AUTOMATIC_MAP[value]}</Cell>,
  },
  {
    title: 'Текущие показания',
    dataIndex: 'initial_values',
    key: 'initial_values',
    width: 146,
    render: (value) => <Cell>{value}</Cell>,
  },
  {
    title: 'Адрес',
    dataIndex: 'area',
    key: 'area',
    width: 430,
    render: () => <Cell>{'something'}</Cell>,
  },
  {
    title: 'Примечание',
    dataIndex: 'description',
    key: 'description',
    width: 304,
    render: (value) => <Cell isGrayText>{value}</Cell>,
  },
  {
    title: '',
    dataIndex: '',
    key: 'operations',
    width: 72,
    render: (_, record) => (
      <Cell className="trash">
        <div className="trash-icon">
          <Icon name={Icons.trash} onClick={() => console.log(record.id)} />
        </div>
      </Cell>
    ),
  },
];
