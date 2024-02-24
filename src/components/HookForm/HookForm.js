import React from 'react'
import PropTypes from 'prop-types'
import { always, defaultTo, isEmpty, mapObjIndexed, not } from 'ramda'
import { FormProvider, useForm } from 'react-hook-form'
import { Box } from '@chakra-ui/react'

import { useToast } from '~/hooks'
import { useSubmitForm } from '~/hooks/form'

function HookForm (props) {
  const {
    defaultValues,
    children,
    onSubmit,
    mode,
    render,
    resetOnSuccess
  } = props

  const toast = useToast()

  const methods = useForm({
    mode,
    reValidateMode: 'onBlur',
    defaultValues
  })

  const { getSubmitErrors } = useSubmitForm()

  function handleSubmitForm (values) {
    return onSubmit(values)
      .then(res => {
        if (resetOnSuccess && !res) {
          const touchedFields = methods.formState.touchedFields
          methods.reset(mapObjIndexed(always(''), touchedFields))
        }
        return res
      })
      .catch(e => {
        const { nonFieldError, errors } = getSubmitErrors(e)

        if (not(isEmpty(errors))) {
          mapObjIndexed((value, key) => {
            methods.setError(key, {
              type: 'manual',
              message: value
            })
          }, errors)
        }

        if (nonFieldError) {
          const nonFieldErrorMessage = defaultTo('Unable to connect to server', nonFieldError)

          toast({
            title: 'Error',
            description: nonFieldErrorMessage,
            status: 'error'
          })
        }

        return errors
      })
  }

  const onSubmitForm = (event) => {
    return methods.handleSubmit(handleSubmitForm)(event)
  }

  return (
    <FormProvider {...methods}>
      {render
        ? render({ ...methods, onSubmitForm })
        : (
          <Box as={'form'} onSubmit={onSubmitForm}>
            {children}
          </Box>
        )}
    </FormProvider>
  )
}

HookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node,
  defaultValues: PropTypes.object,
  mode: PropTypes.oneOf([
    'all',
    'onBlur',
    'onSubmit',
    'onChange',
    'onTouched'
  ]),
  render: PropTypes.func,
  resetOnSuccess: PropTypes.bool
}

HookForm.defaultProps = {
  mode: 'onBlur'
}

export default HookForm
