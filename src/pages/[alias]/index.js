import { sprintf } from 'sprintf-js'
import { prop, propOr } from 'ramda'

import { fetchData } from '~/utils/fetch'
import * as API from '~/constants/api'
import * as ROUTES from '~/constants/routes'
import { DANGEROUS_GOODS } from '~/constants/routes'

export { default } from './PageGrid'
export async function getStaticProps (context) {
  const params = propOr({}, 'params', context)
  const alias = prop('alias', params)
  const pagesDetail = await fetchData(sprintf(API.PAGES_DETAIL, alias), {})
  return { props: { pagesDetail } }
}

const pageAliases = [
  ROUTES.DELIVERY,
  ROUTES.PROHIBITED_ITEM,
  ROUTES.DANGEROUS_GOODS
]
const paths = pageAliases.map(alias => ({ params: { alias } }))

export async function getStaticPaths () {
  return { paths, fallback: false }
}
