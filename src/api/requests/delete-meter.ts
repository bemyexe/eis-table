export const deleteMeter = (meterId: string) => {
  return fetch(`http://showroom.eis24.me/api/v4/test/meters/${meterId}/`, {
    method: 'DELETE',
  });
};