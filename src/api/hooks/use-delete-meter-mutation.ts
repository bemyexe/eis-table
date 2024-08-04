import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteMeter } from '../requests';

export const useDeleteMeterMutation = (page: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (meterId: number) => deleteMeter(meterId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['meters', page] });
    },
  });

  const handleDeleteMeter = (meterId: number) => {
    mutation.mutate(meterId);
  };

  return { handleDeleteMeter };
};
