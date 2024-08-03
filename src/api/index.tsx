import { useState } from 'react';
import {
  keepPreviousData,
  useMutation,
  useQueries,
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

const fetchAreas = (meterId) => {
  return fetch(`http://showroom.eis24.me/api/v4/test/areas/?id__in=${meterId}`)
    .then((res) => res.json())
    .then((res) => res.results);
};

const deleteMeter = (meterId) => {
  return fetch(`http://showroom.eis24.me/api/v4/test/meters/${meterId}/`, {
    method: 'DELETE',
  });
};

export const useMeters = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);

  const { data: meters, isLoading } = useQuery({
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

  return { meters, isLoading, page, setPage, handleDelete };
};

export const useAreas = (meters) => {
  const areasQueries = useQueries({
    queries: meters
      ? meters.map((meter) => {
          return {
            queryKey: ['area', meter.area.id],
            queryFn: () => fetchAreas(meter.area.id),
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
        data: res.map((res) => res.data),
        success: res.every((res) => res.isSuccess),
      };
    },
  });
  // console.log('useAreas', areasQueries);

  return { areasQueries };
};

// const areas = areas1.map((a) => {
//   return {
//     id: a.id,
//     address: `${a.house.address}, ${a.str_number_full}`,
//   };
// });
