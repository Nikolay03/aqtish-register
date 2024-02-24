import { useRouter } from 'next/router'

import { useRouterQuery } from '~/hooks/url'

function useCategories (queryKey = 'category') {
  const router = useRouter()

  const { routerQuery, urlQuery } = useRouterQuery()

  const { [queryKey]: queryCategory } = urlQuery

  function onSelectCategory (id) {
    return router.replace({
      pathname: router.pathname,
      query: { ...routerQuery, [queryKey]: id }
    }, null, { shallow: true })
  }

  return {
    activeCategory: queryCategory,
    onSelectCategory
  }
}

export default useCategories
