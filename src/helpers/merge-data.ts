import { FormatArea, Meter } from '../../@types';

export const mergeData = (meters: Meter[], formattedAreas: FormatArea[]) => {
  return meters.map((meter: Meter) => {
    const area = formattedAreas.find((area) => area.id === meter.area.id);
    return { ...meter, area: area?.address };
  });
};
