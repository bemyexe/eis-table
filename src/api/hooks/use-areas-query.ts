import { useQueries } from '@tanstack/react-query';

import { Area, Meter } from '../../../@types';
import { getAreas } from '../requests';

export const useAreasQuery = (meters: Meter[]) => {
  const areasQueries = useQueries({
    queries: meters
      ? meters.map((meter: Meter) => {
          return {
            queryKey: ['area', meter.area.id],
            queryFn: () => getAreas(meter.area.id),
            select: (areas: Area[]) => areas[0],
            staleTime: Infinity,
          };
        })
      : [],
    combine: (res) => {
      return {
        areas: res.map((res) => res.data),
        isSuccessAreas: res.every((res) => res.isSuccess),
      };
    },
  });
  const { areas, isSuccessAreas } = areasQueries;

  return { areas, isSuccessAreas };
};
