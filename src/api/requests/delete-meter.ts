import { Meter } from '../../../@types';

export const deleteMeter = (meterId: Meter['id']) => {
  return fetch(`http://showroom.eis24.me/api/v4/test/meters/${meterId}/`, {
    method: 'DELETE',
  });
};
