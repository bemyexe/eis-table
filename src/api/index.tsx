import { useState } from 'react';
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

const fetchMeters = (page = 1, limit = 20) => {
  const offset = (page - 1) * limit;
  return fetch(
    `http://showroom.eis24.me/api/v4/test/meters/?limit=${limit}&offset=${offset}`
  )
    .then((res) => res.json())
    .then((res) => res.results);
};

const deleteMeter = (meterId) => {
  fetch(`http://showroom.eis24.me/api/v4/test/meters/${meterId}/`, {
    method: 'DELETE',
  });
};

export const useMeters = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ['meters', page],
    queryFn: () => fetchMeters(page),
    placeholderData: keepPreviousData,
  });

  const mutation = useMutation({
    mutationFn: (id) => deleteMeter(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['meters', page]);
    },
  });

  const handleDelete = (meterId) => {
    mutation.mutate(meterId);
  };

  return { data, isLoading, page, setPage, handleDelete };
};
