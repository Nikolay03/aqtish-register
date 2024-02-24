import { useRequest } from '~/hooks/api'

export default function useFetchCategories (api, config) {
  const { results, isLoading, refetch } = useRequest(api, {
    disableLocale: false,
    disableUrlParams: true,
    params: { pageSize: 100, withCount: true },
    ...config
  })

  return {
    results,
    isLoading
  }
}
