import { Area, FormatArea } from '../../@types';

export const formatAreas = (areas: Area[]): FormatArea[] =>
  areas.map((area: Area): FormatArea => {
    const street = area.house.address.split(', ').slice(1).join(', ');

    return {
      id: area.id,
      address: street + ', ' + area.str_number_full,
    };
  });
