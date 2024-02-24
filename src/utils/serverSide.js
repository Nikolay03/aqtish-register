export async function redirectAuthorizedUser ({ req, destination }) {
  const token = req.cookies.token
  if (token) {
    return {
      redirect: {
        destination
      }
    }
  }

  return {
    props: {}
  }
}
