export { default } from './ClinicDetail'

export async function getServerSideProps (ctx) {
  const { params, locale, req } = ctx

  const { slug } = params
  try {
    return {
      props: { }
    }
  }

  catch (e) {
    return {
      notFound: true
    }
  }
}
