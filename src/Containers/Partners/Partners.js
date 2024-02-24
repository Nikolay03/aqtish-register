import React from 'react'
import { Stack } from '@chakra-ui/react'

import PartnerBox from './PartnerBox'

import Carousel from '~/components/Carousel'

export default function Partners ({ data }) {
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
        {data.map(partner => (
          <PartnerBox
            key={partner.id}
            length={data.length}
            data={partner}
            mx={'auto'}
          />
        ))}
      </Carousel>
    </Stack>
  )
}
