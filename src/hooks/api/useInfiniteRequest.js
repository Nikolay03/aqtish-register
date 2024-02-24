import { useState } from 'react'
import { isNil, last, not, pipe, prop } from 'ramda'
import useSWRInfinite from 'swr/infinite'

import { getListData } from '~/utils/fetch'
import { infiniteFetcher } from '~/utils/swr'

export default function useInfiniteRequest (api, { initialData = [], params = {}, ...options } = {}) {
  const [isLoadingRefetch, setIsLoadingRefetch] = useState(false)

  function getKey (pageIndex) {
    const formedParams = JSON.stringify({ page: pageIndex + 1, ...params })
    return [api, formedParams]
  }
  const formedOptions = { initialData, revalidateOnFocus: false, ...options }

  const { data, error, size, setSize, mutate } = useSWRInfinite(getKey, infiniteFetcher, formedOptions)

  const results = Array.isArray(data)
    ? data.map(pipe(getListData, prop('results')))
    : []

  const list = results ? [].concat(...results) : []
  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = results[0]?.length === 0

  const hasNextPage = pipe(last, prop('next'), isNil, not)(data)
  const isReachingEnd = isEmpty || not(hasNextPage)

  function onLoadMore () {
    return setSize(size + 1)
  }

  function refetch () {
    setIsLoadingRefetch(true)
    return setSize(1)
      .then(() => setIsLoadingRefetch(false))
  }

  const isDisabled = isLoadingMore || isReachingEnd

  return {
    list,
    onLoadMore,
    isDisabled,
    isLoadingInitialData,
    isLoadingMore,
    isLoadingRefetch,
    isReachingEnd,
    isEmpty,
    mutate,
    refetch
  }
}
