import { fetchData } from '~/utils/fetch'
import * as API from '~/constants/api'

export { default } from './Contacts'

export async function getStaticProps (context) {
  const faqData = await fetchData(API.FAQ_LIST, {
    pageSize: 1000
  })

  // const faqCategoryData = await fetchData(API.FAQ_CATEGORY_LIST, {
  //   pageSize: 1000
  // })

  return {
    props: {
      faqData
      // faqCategoryData
    }
  }
}
