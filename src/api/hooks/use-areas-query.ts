import { useQueries } from '@tanstack/react-query';

import { getAreas } from '../requests';

export const useAreasQuery = (meters) => {
  const areasQueries = useQueries({
    queries: meters
      ? meters.map((meter) => {
          return {
            queryKey: ['area', meter.area.id],
            queryFn: () => getAreas(meter.area.id),
            select: (areas) => {
              return {
                id: areas[0].id,
                address: `${areas[0].house.address}, ${areas[0].str_number_full}`,
              };
            },
            staleTime: Infinity,
          };
        })
      : [],
    combine: (res) => {
      return {
        dataArea: res.map((res) => res.data),
        successArea: res.every((res) => res.isSuccess),
      };
    },
  });

  const { dataArea, successArea } = areasQueries;

  return { dataArea, successArea };
};
