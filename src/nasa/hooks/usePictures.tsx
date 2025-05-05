import { useQuery } from '@tanstack/react-query'
import { picturesAction } from '../actions/picturesAction'
import { useState } from 'react';

export const usePictures=() => {

  const [page, setPage] = useState(1)


  const { data, isLoading } = useQuery({
    queryKey: ['picture', { page }],
    queryFn: picturesAction,
    staleTime: 1000 * 60 * 60
  })

  const nextPage=() => {
    if (page === 10) {
      return;
    }

    setPage(page+1)
  }

  const prevPage=() => {
    if (page===1) {
      return;
    }

    setPage((prevPage) => prevPage-1);
  }

  return {
    data,
    isLoading,
    //Getters
    page,
    // Actions
    nextPage,
    prevPage
  }
}