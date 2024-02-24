import React, { Fragment, memo, useRef } from 'react'
import PropTypes from 'prop-types'
import isEqual from 'react-fast-compare'
import { Box, Image, Input } from '@chakra-ui/react'

import ImageUploadPlaceholder from './ImageUploadPlaceholder'

function DefaultRender (props) {
  const { field, isInvalid, handleClick, ...restProps } = props

  const errorColor = 'palette.red'
  const frameBorderColor = isInvalid ? errorColor : 'gray.200'
  const frameBorderColorHover = isInvalid ? errorColor : 'gray.400'

  return (
    <Box
      cursor={'pointer'}
      display={'block'}
      m={'unset'}
      h={'132px'}
      w={'132px'}
      onClick={handleClick}
      {...restProps}>
      <Box
        borderWidth={2}
        borderColor={frameBorderColor}
        rounded={'xl'}
        h={'full'}
        w={'full'}
        p={1}
        transition={'all 200ms'}
        overflow={'hidden'}
        _hover={{ borderColor: frameBorderColorHover }}>
        {field.value?.file
          ? (
            <Image
              boxSize={'full'}
              objectFit={'cover'}
              src={field.value.file}
              rounded={'inherit'}
            />
          )
          : <ImageUploadPlaceholder />}
      </Box>
    </Box>
  )
}

function ImageUpload (props) {
  const {
    field,
    isInvalid,
    onFileChange,
    render: Render = DefaultRender,
    ...restProps
  } = props

  const inputRef = useRef()

  function handleClick () {
    inputRef.current.click()
  }

  return (
    <Fragment>
      <Input
        ref={inputRef}
        accept={'image/*'}
        display={'none'}
        name={name}
        type={'file'}
        isRequired={false}
        onChange={onFileChange}
      />
      <Render
        field={field}
        isInvalid={isInvalid}
        handleClick={handleClick}
        {...restProps}
      />
    </Fragment>
  )
}

ImageUpload.propTypes = {
  onFileChange: PropTypes.func.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any
  }).isRequired,
  isInvalid: PropTypes.bool,
  render: PropTypes.func
}

DefaultRender.propTypes = {
  field: PropTypes.object.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default memo(ImageUpload, isEqual)
