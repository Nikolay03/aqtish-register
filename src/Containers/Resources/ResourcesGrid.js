import React, { useState } from 'react'
import { find, path, propEq } from 'ramda'

import PageWrapper from '~/components/PageWrapper'
import { ArticleLayout } from '~/components/Layouts'
import ArticleBar from '~/components/Article/ArticleBar'
import ResourcesProvider from '~/Containers/Resources/ResourcesProvider'
import RightBar from '~/components/Article/RightBar'
import ResourcesArticle from '~/Containers/Resources/ResourcesArticle'
import withFilter from '~/hooks/withFilter'
import { getListData } from '~/utils/fetch'

function ResourcesGrid (props) {
  const filterActions = withFilter({ fields: ['id'] })
  const { results } = getListData(props.amazyData)
  const currentId = Number(filterActions.initialValues.id || path(['0', 'id'], results))
  const [article, setArticle] = useState(currentId)
  const currentArticle = find(propEq('id', article))(results)
  return (
    <ResourcesProvider {...props}>
      <PageWrapper title={'YUMECS'}>
        <ArticleLayout>
          <ArticleBar
            setArticle={setArticle}
            filterActions={filterActions}
            currentArticle={currentArticle}
          />
          <ResourcesArticle
            setArticle={setArticle}
            filterActions={filterActions}
            currentArticle={currentArticle}
          />
          <RightBar currentArticle={currentArticle} />
        </ArticleLayout>
      </PageWrapper>
    </ResourcesProvider>
  )
}

ResourcesGrid.propTypes = {
}

export default ResourcesGrid
