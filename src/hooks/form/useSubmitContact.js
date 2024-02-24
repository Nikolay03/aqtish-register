import { prop } from 'ramda'

import * as API from '~/constants/api'
import { useCreate } from '~/hooks/crud'

function serializer (values) {
  return {
    firstName: prop('firstName', values),
    lastName: prop('lastName', values),
    email: prop('email', values),
    phoneNumber: prop('phoneNumber', values),
    message: prop('message', values)
  }
}

export default function useSubmitContact () {
  const { isLoading, ...contactPost } = useCreate(API.CONTACT_POST)

  function onSubmit (values) {
    return contactPost.create(serializer(values))
  }

  return { onSubmit, isLoading }
}
