import { has, ifElse, omit, pipe, prop } from 'ramda'

import toCamelCase from '~/utils/toCamelCase'

const NON_FIELD_ERROR = 'nonFieldErrors'

function getDefaultNonFieldErrors (error) {
  return error ? { [NON_FIELD_ERROR]: [error] } : {}
}

export default function useSubmitForm () {
  function getSubmitErrors (e) {
    const fieldErrors = e
    if (e instanceof Error) {
      throw e
    }

    const formedErrorData = pipe(
      ifElse(
        has('error'),
        pipe(
          prop('error'),
          getDefaultNonFieldErrors
        ),
        toCamelCase
      )
    )(fieldErrors)

    const nonFieldError = prop(NON_FIELD_ERROR, formedErrorData)
    const restFieldErrors = omit([NON_FIELD_ERROR], formedErrorData)

    return {
      errors: restFieldErrors,
      nonFieldError
    }
  }

  return {
    getSubmitErrors
  }
}
