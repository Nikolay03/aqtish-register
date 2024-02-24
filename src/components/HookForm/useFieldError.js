import { prop } from 'ramda'

import { useTranslate } from '~/utils/translate'

export default function useFieldError () {
  const { t } = useTranslate()

  const errorMessages = {
    required: t('field_error_required')
  }

  function getErrorMessage (error) {
    const errorType = prop('type', error)

    return prop('message', error) || prop(errorType, errorMessages)
  }

  return {
    getErrorMessage
  }
}
