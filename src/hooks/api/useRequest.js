import { useState, useMemo } from 'react'
import { split } from 'ramda'
import useSWR from 'swr'
import { useRouter } from 'next/router'

import { getListData } from '~/utils/fetch'
import { fetcher } from '~/utils/swr'
import { useRouterQuery } from '~/hooks/url'

export default function useRequest (api, { initialData, disableLocale = true, disableUrlParams, params, ...options } = {}) {
  const { asPath, locale: language } = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const { urlQuery } = useRouterQuery()

  const initialParams = disableLocale ? { ...params } : { ...params, language }
  const allParams = disableUrlParams ? initialParams : { ...urlQuery, ...initialParams }
  const stringParams = JSON.stringify(allParams)

  const memoParams = useMemo(() => allParams, [stringParams])

  const [, search] = split('?', asPath)
  const { data, error, isValidating, mutate } = useSWR([api, memoParams], ([url, fetchParam]) => fetcher(url, '', fetchParam), {
    fallbackData: initialData,
    revalidateOnFocus: false,
    ...options
  })

  function refetch (params) {
    setIsLoading(true)
    return mutate(async () => await fetcher(api, '', params), false)
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false))
  }

  const listData = getListData(data, error)

  return {
    ...listData,
    refetch,
    isLoading: isValidating || isLoading
  }
}
