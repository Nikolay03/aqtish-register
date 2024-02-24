import React from 'react'
import PropTypes from 'prop-types'
import { range } from 'ramda'
import { Box, SimpleGrid, Skeleton, SkeletonText } from '@chakra-ui/react'

import { getRandomMinMax } from '~/utils/random'

function CardGridSkeleton (props) {
  const { imgHeight, itemsCount, ...restProps } = props

  const list = range(0, itemsCount)

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={6}
      {...restProps}>
      {list.map(item => {
        const titleWidth = getRandomMinMax(50, 70)
        const noOfLines = getRandomMinMax(2, 4)
        return (
          <Box key={item}>
            <Skeleton
              startColor={'gray.100'}
              endColor={'gray.200'}
              h={imgHeight}
              mb={4}
              rounded={'2xl'}
              w={'full'}
            />

            <Skeleton h={5} mb={3} w={`${titleWidth}%`} />
            <SkeletonText noOfLines={noOfLines} spacing={3} />
          </Box>
        )
      })}
    </SimpleGrid>
  )
}

CardGridSkeleton.propTypes = {
  imgHeight: PropTypes.any,
  itemsCount: PropTypes.number
}

CardGridSkeleton.defaultProps = {
  itemsCount: 3
}

export default CardGridSkeleton
