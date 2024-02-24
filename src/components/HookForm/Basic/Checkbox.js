import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react'

import FormControl from '../FormControl'

function Checkbox (props) {
  const { name, children, isRequired, ...restProps } = props

  const { register } = useFormContext()

  return (
    <FormControl id={name} isRequired={isRequired}>
      <ChakraCheckbox {...register(name)} {...restProps}>
        {children}
      </ChakraCheckbox>
    </FormControl>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isRequired: PropTypes.bool
}

export default Checkbox
