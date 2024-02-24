import { fetchData } from '~/utils/fetch'
import * as API from '~/constants/api'

export { default } from './Faq'

export async function getStaticProps (context) {
  const faqCategoryData = await fetchData(API.FAQ_CATEGORY_LIST, {
    pageSize: 1000
  })

  return {
    props: {
      faqCategoryData
    }
  }
}
