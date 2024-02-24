/* eslint-disable max-len */

import { useTranslate } from '~/utils/translate'

export default function useFieldPattern () {
  const { t } = useTranslate()

  const emailFieldPattern = {
    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: t('field_error_invalid_email')
  }

  const passwordFieldPattern = {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
    message: t('field_error_password_chars_validate')
  }

  return {
    emailFieldPattern,
    passwordFieldPattern
  }
}
