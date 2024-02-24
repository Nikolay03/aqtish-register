import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useController, useFormContext } from 'react-hook-form'
import { Paperclip } from 'react-feather'
import {
  Box,
  Button,
  Input,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Link
} from '@chakra-ui/react'

import useUploadFile from './useUploadFile'

import { useTranslate } from '~/utils/translate'
import { useFieldError } from '~/components/HookForm'

const acceptFileTypes = [
  'application/msword',
  'application/vnd.ms-excel',
  'application/vnd.ms-powerpoint',
  'text/plain',
  'application/pdf',
  'image/*'
]

function FileUpload (props) {
  const { name, label, isRequired, ...restProps } = props

  const { t } = useTranslate()
  const inputRef = useRef()

  const { control } = useFormContext()

  const { field } = useController({
    name,
    control,
    defaultValue: ''
  })

  const { fieldState } = useController({
    name: `${name}Id`,
    control,
    defaultValue: ''
  })

  const { getErrorMessage } = useFieldError()

  const { state, onInputChange, onClear } = useUploadFile({ onChange: field.onChange, inputRef })

  const { value } = field
  const { isLoading, progress } = state

  function handleClick () {
    inputRef.current.click()
  }

  const loadingText = t('button_upload_file_loading', { progress }) + '%'
  const errorMessage = getErrorMessage(fieldState.error)

  return (
    <Box>
      <FormControl
        id={name}
        isRequired={isRequired}
        isInvalid={fieldState.invalid}>
        {label && (
          <FormLabel
            as={'label'}
            display={'block'}
            fontWeight={'medium'}
            mb={2}>
            {label}
          </FormLabel>
        )}
        <Input
          ref={inputRef}
          accept={acceptFileTypes.join(',')}
          display={'none'}
          name={name}
          type={'file'}
          pos={'absolute'}
          onChange={onInputChange}
          isRequired={false}
        />
        <Button
          colorScheme={'gray'}
          isLoading={isLoading}
          loadingText={loadingText}
          leftIcon={<Paperclip />}
          {...restProps}
          onClick={handleClick}>
          {t('button_upload_file')}
        </Button>
        {value && (
          <Flex align={'center'} mt={3}>
            <Link
              isExternal={true}
              href={value.path}
              noOfLines={1}
              title={state.name}>
              {state.name}
            </Link>
            <Button colorScheme={'red'} variant={'link'} onClick={onClear} minW={'auto'} ml={4}>
              {t('button_remove_file')}
            </Button>
          </Flex>
        )}

        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    </Box>
  )
}

FileUpload.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  isRequired: PropTypes.bool
}

export default FileUpload
