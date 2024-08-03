export const getAreas = (meterId: string) => {
  return fetch(`http://showroom.eis24.me/api/v4/test/areas/?id__in=${meterId}`)
    .then((res) => res.json())
    .then((res) => res.results);
};
