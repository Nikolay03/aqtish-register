import React from 'react'
import PropTypes from 'prop-types'
import { Eye, EyeOff } from 'react-feather'
import { useFormContext } from 'react-hook-form'
import { Icon, IconButton, useBoolean } from '@chakra-ui/react'

import useFieldRules from '../useFieldRules'
import Input from '../Basic/Input'

import { useTranslate } from '~/utils/translate'

function PasswordField (props) {
  const { name, isConfirm, passwordFieldName, ...restProps } = props

  const { t } = useTranslate()

  const [flag, setFlag] = useBoolean(true)
  const { passwordRules } = useFieldRules()

  const { watch } = useFormContext()

  const rightElement = (
    <IconButton
      aria-label={'Show/Hide password'}
      color={'gray.500'}
      colorScheme={'gray'}
      h={8}
      w={8}
      minW={'unset'}
      onClick={setFlag.toggle}
      tabIndex={'-1'}
      icon={<Icon as={flag ? EyeOff : Eye} boxSize={5} />}
      variant={'ghost'}
    />
  )

  const commonProps = {
    name,
    elementProps: { right: 2 },
    rightElement,
    type: flag ? 'password' : 'text'
  }

  if (isConfirm) {
    const passwordValue = watch(passwordFieldName)

    const confirmRules = {
      required: true,
      validate: passwordConfirm => {
        const passwordsMatching = passwordValue === passwordConfirm
        return passwordsMatching ? undefined : t('field_error_password_confirm')
      }
    }

    return (
      <Input
        rules={confirmRules}
        {...commonProps}
        {...restProps}
      />
    )
  }

  return (
    <Input
      rules={passwordRules}
      {...commonProps}
      {...restProps}
    />
  )
}

PasswordField.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirm: PropTypes.bool,
  passwordFieldName: PropTypes.string
}

export default PasswordField
