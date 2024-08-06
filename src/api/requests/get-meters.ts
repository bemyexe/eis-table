import { Meter } from '../../../@types';

export const getMeters = (page = 1, limit = 20): Promise<Meter[]> => {
  const offset = (page - 1) * limit;
  return fetch(
    `https://showroom.eis24.me/api/v4/test/meters/?limit=${limit}&offset=${offset}`
  )
    .then((res) => res.json())
    .then((res) => res.results);
};
