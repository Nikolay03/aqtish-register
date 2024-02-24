import React from 'react'
import { prop } from 'ramda'

import { useTranslate } from '~/utils/translate'
import { Categories, CategoryItem, useCategories } from '~/components/Categories'

export default function FaqCategories (props) {
  const { allCount, data, isLoading } = props

  const { t, translateData } = useTranslate()

  const { activeCategory, onSelectCategory } = useCategories()
  return (
    <Categories
      allCount={allCount}
      allServicesLabel={t('faq_categories_all')}
      isLoading={isLoading}>
      {data.map(category => {
        const id = String(prop('id', category))
        const title = translateData(category, 'name')
        const count = prop('count', category)
        const faqs = prop('faqs', category) || []
        const isActive = id === activeCategory

        return (
          <CategoryItem
            key={id}
            count={faqs.length}
            isActive={isActive}
            onClick={onSelectCategory.bind(null, id)}>
            {title}
          </CategoryItem>
        )
      })}
    </Categories>
  )
}
