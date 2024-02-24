import React from 'react'
import { Search } from 'react-feather'
import {
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Stack
} from '@chakra-ui/react'

import useSearch from './useSearch'
import ClearButton from './ClearButton'

export default function SearchField (props) {
  const { isLoading, onSearch, searchValue, ...restProps } = props

  const { ref, onKeyPress, onClear } = useSearch(onSearch)

  return (
    <InputGroup size={'sm'}>
      <Input
        isRequired={true}
        size={'sm'}
        variant={'search'}
        rules={{ required: true }}
        {...restProps} ref={ref} onKeyPress={onKeyPress} />
      <InputRightElement right={5} top={2} w={'auto'}>
        <Stack align={'center'} direction={'row'}>
          {searchValue && (
            <ClearButton onClick={onClear} />
          )}
          {isLoading && (
            <Spinner color={'primary.500'} size={'sm'} />
          )}
          {!isLoading && (
            <Icon
              as={Search}
              boxSize={5}
              color={'primary.500'}
              strokeWidth={2.5}
            />
          )}
        </Stack>
      </InputRightElement>
    </InputGroup>
  )
}
