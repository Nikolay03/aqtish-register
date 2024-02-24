import { fetchData } from '~/utils/fetch'
import * as API from '~/constants/api'

export { default } from './Offer'

export async function getStaticProps (context) {
  const faqData = await fetchData(API.FAQ_LIST, {
    pageSize: 1000
  })

  return {
    props: {
      faqData
    }
  }
}
