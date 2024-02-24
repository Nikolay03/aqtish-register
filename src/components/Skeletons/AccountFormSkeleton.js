import React from 'react'
import { range } from 'ramda'
import { SimpleGrid, Skeleton, Stack } from '@chakra-ui/react'

function InputSkeleton () {
  return (
    <Stack>
      <Skeleton h={3} w={'50%'} />
      <Skeleton borderRadius={'xl'} h={12} w={'full'} />
    </Stack>
  )
}

export default function AccountFormSkeleton () {
  const inputList = range(0, 8)

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} h={'auto'} spacing={5}>
      {inputList.map(item => (
        <InputSkeleton key={item} />
      ))}
    </SimpleGrid>
  )
}
