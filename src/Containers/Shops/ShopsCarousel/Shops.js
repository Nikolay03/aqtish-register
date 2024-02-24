import React from 'react'
import { Stack } from '@chakra-ui/react'

import ShopsBox from './ShopsBox'

import Carousel from '~/components/Carousel'

export default function Shops ({ data }) {
  const carouselItemsCount = {
    mobile: 2,
    tablet: 3,
    desktop: 4
  }
  return (
    <Stack spacing={6}>
      <Carousel
        autoPlaySpeed={3000}
        itemsCount={carouselItemsCount}
        partialVisible={false}
        maxItems={5}
        swipeable={false}>
        {data.map(news => (
          <ShopsBox
            key={news.id}
            length={data.length}
            data={news}
            mx={'auto'}
          />
        ))}
      </Carousel>
    </Stack>
  )
}
