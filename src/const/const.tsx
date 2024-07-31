import { Counter } from '../../@types';
import { Cell } from '../app/components/cell';

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
export const Comlumns = () => {
  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
      width: 48,
      render: (value: string, record, index) => <span>{index + 1}</span>,
    },
    {
      title: 'Тип',
      dataIndex: '_type',
      key: 'type',
      width: 120,
      render: (value) => <span>{value[0]}</span>,
    },
    {
      title: 'Дата установки',
      dataIndex: 'installation_date',
      key: 'date',
      width: 160,
      render: (value: string) => <span>{formatDate(value)}</span>,
    },
    {
      title: 'Автоматический',
      dataIndex: 'is_automatic',
      key: 'isAutomatic',
      width: 128,
      render: (value: boolean) => (
        <span>{value === null ? 'N/D' : value ? 'Да' : 'Нет'}</span>
      ),
    },
    {
      title: 'Текущие показания',
      dataIndex: 'initial_values',
      key: 'currentValue',
      width: 146,
    },
    {
      title: 'Адрес',
      dataIndex: 'address',
      key: 'address',
      width: 430,
    },
    {
      title: 'Примечание',
      dataIndex: 'description',
      key: 'description',
      width: 376,
      render: (value: string, record) => <Cell value={value} id={record.id} />,
    },
  ];

  return { columns };
};

export const FAKE: Counter[] = [
  {
    id: 1,
    type: 'counter',
    date: 12012023,
    isAutomatic: 'false',
    currentValue: 333467.6636,
    address: 'г Санкт-Петербург, ул Тарасова, д. 0 корп. 0 лит. А, кв. 1',
    description: '1',
  },
  {
    id: 2,
    type: 'counter',
    date: 12012023,
    isAutomatic: 'false',
    currentValue: 333467.6636,
    address: 'г Санкт-Петербург, ул Тарасова, д. 0 корп. 0 лит. А, кв. 1',
    description: '2',
  },
  {
    id: 3,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: 'г Санкт-Петербург, ул Тарасова, д. 0 корп. 0 лит. А, кв. 1',
    description: '3',
  },
  {
    id: 4,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: 'г Санкт-Петербург, ул Тарасова, д. 0 корп. 0 лит. А, кв. 1',
    description: '4',
  },
  {
    id: 5,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: 'г Санкт-Петербург, ул Тарасова, д. 0 корп. 0 лит. А, кв. 1',
    description: '5',
  },
  {
    id: 6,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: 'г Санкт-Петербург, ул Тарасова, д. 0 корп. 0 лит. А, кв. 1',
    description: '6',
  },
  {
    id: 7,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: '7',
    description: '7',
  },
  {
    id: 8,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: '8',
    description: '8',
  },
  {
    id: 9,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: '9',
    description: '9',
  },
  {
    id: 10,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: '10',
    description: '10',
  },
  {
    id: 11,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: '11',
    description: '11',
  },
  {
    id: 12,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: '12',
    description: '12',
  },
  {
    id: 13,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: '13',
    description: '13',
  },
  {
    id: 14,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: '14',
    description: '14',
  },
  {
    id: 15,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: '15',
    description: '15',
  },
  {
    id: 16,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: '16',
    description: '16',
  },
  {
    id: 17,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: '17',
    description: '17',
  },
  {
    id: 18,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: '18',
    description: '18',
  },
  {
    id: 19,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: '19',
    description: '19',
  },
  {
    id: 20,
    type: 'counter',
    date: 0,
    isAutomatic: 'false',
    currentValue: 0,
    address: '20',
    description: '20',
  },
];
