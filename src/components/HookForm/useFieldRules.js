import useFieldPattern from './useFieldPattern'

import { useTranslate } from '~/utils/translate'

export default function useFieldRules () {
  const { t } = useTranslate()

  const { emailFieldPattern } = useFieldPattern()

  const emailRules = {
    required: true,
    pattern: emailFieldPattern
  }

  const passwordRules = {
    required: true,
    minLength: {
      value: 8,
      message: t('field_error_password_min_length', { minLength: 8 })
    }
  }

  return {
    emailRules,
    passwordRules
  }
}
