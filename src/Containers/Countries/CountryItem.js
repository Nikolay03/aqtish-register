import React from 'react'
import { Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'

const CountryItem = ({ data }) => {
  return (
    <Tag size={'lg'} variant={'outline'} colorScheme={'blue'}>
      <TagLeftIcon as={'icon'} />
      <TagLabel>Blue</TagLabel>
    </Tag>
  )
}

export default CountryItem
