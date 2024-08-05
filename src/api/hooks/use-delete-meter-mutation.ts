import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Meter } from '../../../@types';
import { deleteMeter } from '../requests';

export const useDeleteMeterMutation = (page: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (meterId: Meter['id']) => deleteMeter(meterId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['meters', page] });
    },
  });

  return { mutation };
};
