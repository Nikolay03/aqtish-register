import { sprintf } from 'sprintf-js'

import { NEWS_DETAIL } from '~/constants/api'
import { fetchData, fetchDetailData } from '~/utils/fetch'

export { default } from './NewsDetail'

export async function getServerSideProps (ctx) {
  const { params, locale, req } = ctx

  const { slug } = params

  try {
    const data = await fetchData(sprintf(NEWS_DETAIL, slug), {
      req,
      language: locale
    })
    return {
      props: { data }
    }
  }

  catch (e) {
    return {
      notFound: true
    }
  }
}
