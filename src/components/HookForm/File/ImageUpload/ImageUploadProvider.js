import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import Cropper from 'react-easy-crop'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Stack, useBreakpointValue } from '@chakra-ui/react'
import { useController, useFormContext } from 'react-hook-form'

import useUploadReducer from '../useUploadReducer'

import useImageCrop from './useImageCrop'
import ImageUpload from './ImageUpload'

import { useTranslate } from '~/utils/translate'
import { useFieldError } from '~/components/HookForm'
import Modal from '~/components/Modal'

const CropContext = createContext(null)

function ImageUploadProvider (props) {
  const {
    name,
    aspect,
    isRequired,
    label,
    renderer,
    ...restProps
  } = props

  const { t } = useTranslate()

  const [state, dispatch] = useUploadReducer()

  const { control } = useFormContext()

  const { field } = useController({
    name,
    control,
    defaultValue: null
  })

  const { fieldState } = useController({
    name: `${name}Id`,
    control,
    defaultValue: null
  })

  const {
    imageSrc,
    crop,
    zoom,
    onCropChange: setCrop,
    onZoomChange: setZoom,
    onCropComplete,
    onUploadCroppedImage,
    onFileChange,
    isOpenPreview,
    onClosePreview
  } = useImageCrop({ onChange: field.onChange, dispatch })

  const { invalid, error } = fieldState

  const { getErrorMessage } = useFieldError()

  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' })

  const errorMessage = getErrorMessage(error)

  return (
    <CropContext.Provider value={{ state }}>
      <Box>
        <FormControl id={name} isRequired={isRequired} isInvalid={invalid}>
          {label && (
            <FormLabel
              as={'label'}
              display={'block'}
              fontWeight={'medium'}
              mb={2}>
              {label}
            </FormLabel>
          )}

          <ImageUpload
            field={field}
            isInvalid={invalid}
            onFileChange={onFileChange}
            render={renderer}
            {...restProps}
          />

          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
      </Box>

      <Modal
        title={t('modal_photo_preview_title')}
        isOpen={isOpenPreview}
        onClose={onClosePreview}
        showFooter={false}
        size={'xl'}>
        <Stack spacing={6}>
          <Box pos={'relative'} h={'50vh'} overflow={'hidden'} rounded={'xl'}>
            {imageSrc && (
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={aspect}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            )}
          </Box>
          <Button size={buttonSize} onClick={onUploadCroppedImage}>
            {t('button_save')}
          </Button>
        </Stack>
      </Modal>
    </CropContext.Provider>
  )
}

export function useCrop () {
  return useContext(CropContext)
}

ImageUploadProvider.propTypes = {
  name: PropTypes.string.isRequired,
  aspect: PropTypes.number,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  renderer: PropTypes.func
}

ImageUploadProvider.defaultProps = {
  aspect: 1
}

export default ImageUploadProvider
