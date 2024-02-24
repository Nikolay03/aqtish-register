import { NEWS_LIST } from '~/constants/api'
import { fetchData } from '~/utils/fetch'

export { default } from './News'

export async function getServerSideProps (ctx) {
  const { query, locale, req } = ctx

  const { page, category } = query

  const api = NEWS_LIST

  const newsData = await fetchData(api, {
    req,
    language: locale,
    category,
    page
  })

  return {
    props: {
      api,
      newsData
    }
  }
}
