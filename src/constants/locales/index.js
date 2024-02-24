import calc from './calc'
import about from './about'
import partners from './partners'
import common from './common'
import packages from './packages'
import product from './product'
import faq from './faq'
import account from './account'
import input from './input'
import news from './news'
import country from './country'
import login from './login'
import recipient from './recipient'
import offer from './offer'
import menu from './menu'
import shop from './shop'

export default {
  ...calc,
  ...news,
  ...account,
  ...product,
  ...input,
  ...packages,
  ...recipient,
  ...country,
  ...partners,
  ...common,
  ...login,
  ...faq,
  ...shop,
  ...about,
  ...offer,
  ...menu,
  home_page_title: {
    ru: 'Главная',
    en: 'Home',
    uz: ''
  }
}
