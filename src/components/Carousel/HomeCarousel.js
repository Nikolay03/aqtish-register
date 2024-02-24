import React from 'react'
import { Box } from '@chakra-ui/react'
import { path, prop } from 'ramda'

import Carousel from '~/components/Carousel'
import { Image } from '~/components/Images'

const DOT = '112px'
const CustomDot = ({ onClick, ...rest }) => {
  const {
    data,
    index,
    active
  } = rest
  const carouselItems = data.map((i) => (
    <Image
      key={i.id}
      alt={i?.file?.name || i.name}
      mx={3}
      border={'1px solid'}
      borderColor={'primary.300'}
      borderRadius={'12px'}
      bgColor={'transparent'}
      w={{ base: `calc(${DOT} / 2)`, md: DOT }}
      h={{ base: `calc(${DOT} / 2)`, md: DOT }}
      src={i?.file?.file || i.file}
    />
  ))
  return (
    <button
      className={active ? 'active' : 'inactive'}
      onClick={() => onClick()}
    >
      {React.Children.toArray(carouselItems)[index]}
    </button>
  )
}

export default function HomeCarousel ({ data }) {
  return (
    <Box sx={{
      '& ul': {
        height: '100%'
      },
      '.react-multi-carousel-list': {
        height: '100%'
      },
      '.react-multi-carousel-dot-list': {
        height: 'min-content',
        marginBottom: '15px'
      }
    }}>
      <Carousel
        spacing={0}
        autoPlay={false}
        styleBox={{
          h: '100%'
        }}
        itemsCount={{
          mobile: 1,
          tablet: 1,
          desktop: 1,
          lgDesktop: 1
        }}
        maxItems={1}
        arrows={false}
        partialVisible={false}
        showDots={true}
        customDot={<CustomDot data={data} />}
      >
        {data.map(i => {
          const file = path(['file', 'file'], i) || prop('file', i)
          const name = path(['file', 'name'], i) || prop('name', i)
          const id = prop('id', i)
          return (
            <Image
              key={id}
              alt={name}
              bgColor={'transparent'}
              w={{ base: '100%' }}
              h={{ base: '250px', md: '350px', lg: '100%' }}
              src={file}
            >
              <Box
                pos={'absolute'}
                // eslint-disable-next-line max-len
                bg={'linear-gradient(3.22deg, #080808 4.78%, rgba(8, 8, 8, 0) 32.82%), linear-gradient(178.41deg, #080808 3.13%, rgba(16, 16, 24, 0) 44.65%, rgba(8, 8, 8, 0) 44.65%), linear-gradient(93.86deg, #080808 4.26%, rgba(8, 8, 8, 0) 27.62%)'}
                h={'100%'}
                w={'100%'}
              />
            </Image>
          )
        })}
      </Carousel>
    </Box>
  )
}
