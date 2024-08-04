export const deleteMeter = (meterId: number) => {
  return fetch(`http://showroom.eis24.me/api/v4/test/meters/${meterId}/`, {
    method: 'DELETE',
  });
};
