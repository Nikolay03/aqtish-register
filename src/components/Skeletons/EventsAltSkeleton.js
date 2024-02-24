import React from 'react'
import { Flex, Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'

function ItemSkeleton () {
  return (
    <Flex align={'center'}>
      <SkeletonCircle borderRadius={'custom'} size={'60px'} />
      <Stack flexGrow={1} ml={4} spacing={3}>
        <Skeleton h={3} w={'35%'} />
        <SkeletonText
          noOfLines={2}
          spacing={3}
        />
      </Stack>
    </Flex>
  )
}

export default function EventsAltSkeleton (props) {
  return (
    <Stack spacing={6}>
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
    </Stack>
  )
}
