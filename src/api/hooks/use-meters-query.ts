import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { getMeters } from '../requests';

export const useMetersQuery = (page: number) => {
  const { data: meters, isLoading } = useQuery({
    queryKey: ['meters', page],
    queryFn: () => getMeters(page),
    placeholderData: keepPreviousData,
  });

  return { meters, isLoading };
};
