import React from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search } from 'react-feather'

export function RightBarSearch () {
  return (
    <InputGroup size={'sm'}>
      <InputLeftElement
        pointerEvents={'none'}
        // eslint-disable-next-line react/no-children-prop
        children={<Search color={'#AAB2C4'} />}
      />
      <Input
        name={'search'}
        placeholder={'Searching...'}
      />
    </InputGroup>
  )
}
