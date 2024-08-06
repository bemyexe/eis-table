import { Area, Meter } from '../../../@types';

export const getAreas = (meterId: Meter['id']): Promise<Area[]> => {
  return fetch(`https://showroom.eis24.me/api/v4/test/areas/?id__in=${meterId}`)
    .then((res) => res.json())
    .then((res) => res.results);
};
