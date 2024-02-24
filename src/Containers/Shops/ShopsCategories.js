import React from 'react'
import { prop, propEq, filter, find } from 'ramda'
import { useRouter } from 'next/router'

import CategoriesTree from '../../components/CategoriesTree/CategoriesTree'

import { useTranslate } from '~/utils/translate'
import { useCategories, useFetchCategories } from '~/components/Categories'
import CategoriesTreeItem from '~/components/CategoriesTree/CategoriesTreeItem'
import CategoriesTreeChildren from '~/components/CategoriesTree/CategoriesTreeChildren'
import { getFullTreeForItem } from '~/utils/find'
import { createSlugsPath } from '~/utils/url'
import { SHOP_CATEGORY_LIST } from '~/constants/api'
import { getLastAliasFromSpread } from '~/utils/router'

export default function ShopsCategories (props) {
  const { allCount } = props
  const router = useRouter()

  const { t, translateData } = useTranslate()

  const categoryQuery = getLastAliasFromSpread(router, ['query', 'aliases'])
  const { isLoading, results } = useFetchCategories(SHOP_CATEGORY_LIST)
  const getCategoryUrl = id => {
    const newPathname = createSlugsPath(getFullTreeForItem(results, id))
    return router.push({ pathname: newPathname })
  }

  return (
    <CategoriesTree
      allCount={allCount}
      allServicesLabel={t('shops_categories_all')}
      isLoading={isLoading}>
      {filter(propEq('parent', null), results).map(category => {
        const id = prop('id', category)
        const alias = prop('alias', category)
        const title = translateData(category, 'name')
        const children = prop('children', category) || []
        const isActive = Boolean(find(propEq('alias', categoryQuery), children)) || (alias === categoryQuery)
        return (
          <>
            <CategoriesTreeItem
              key={id}
              count={children.length}
              isActive={isActive}
              onClick={() => {
                getCategoryUrl(id)
              }}
            >
              {title}
            </CategoriesTreeItem>
            {isActive && (
              <CategoriesTreeChildren>
                {children.map(item => {
                  const idChild = prop('id', item)
                  const titleChild = translateData(item, 'name')
                  return (
                    <CategoriesTreeItem
                      key={idChild}
                      textProps={{
                        fontWeight: 400
                      }}
                      count={false}
                      isActive={isActive}
                      onClick={() => {
                        getCategoryUrl(idChild)
                      }}
                    >
                      {titleChild}
                    </CategoriesTreeItem>
                  )
                })}
              </CategoriesTreeChildren>
            )}
          </>
        )
      })}
    </CategoriesTree>
  )
}
