import React from 'react'
import PropTypes from 'prop-types'
import { pipe, replace } from 'ramda'
import 'react-multi-carousel/lib/styles.css'
import ReactCarousel from 'react-multi-carousel'
import { Box, useToken } from '@chakra-ui/react'

import CarouselDot from './CarouselDot'

import CarouselArrow from '~/components/Carousel/CarouselArrow'

function remToPixel (value) {
  if (!value) return 0
  const numberValue = pipe(replace('em', ''), Number)(value)
  return numberValue * 16
}

const defaultItemsCount = {
  mobile: 1,
  tablet: 1,
  desktop: 2,
  lgDesktop: 3
}

function Carousel (props) {
  const {
    children,
    itemsCount,
    maxItems,
    partialVisible,
    showDots,
    spacing,
    styleBox,
    ...restProps
  } = props

  const items = {
    ...defaultItemsCount,
    ...itemsCount
  }

  const [sm, md, lg, xl] = useToken('breakpoints', ['sm', 'md', 'lg', 'xl'])

  const partialVisibilityGutter = 20

  const responsive = {
    xlDesktop: {
      breakpoint: { max: 3000, min: remToPixel(xl) },
      items: maxItems,
      partialVisibilityGutter
    },
    lgDesktop: {
      breakpoint: { max: remToPixel(xl), min: remToPixel(lg) },
      items: items.lgDesktop,
      partialVisibilityGutter
    },
    desktop: {
      breakpoint: { max: remToPixel(lg), min: remToPixel(md) },
      items: items.desktop,
      partialVisibilityGutter
    },
    tablet: {
      breakpoint: { max: remToPixel(md), min: remToPixel(sm) },
      items: items.tablet,
      partialVisibilityGutter
    },
    mobile: {
      breakpoint: { max: remToPixel(sm), min: 0 },
      items: items.mobile,
      partialVisibilityGutter
    }
  }

  const itemPadding = partialVisible
    ? spacing
    : { base: spacing }

  return (
    <Box
      pos={'relative'}
      sx={{
        '& .carousel-item': {
          px: itemPadding
        }
      }}
      {...styleBox}
    >
      <ReactCarousel
        autoPlay={true}
        autoPlaySpeed={5000}
        arrows={false}
        customDot={<CarouselDot />}
        customLeftArrow={<CarouselArrow left={'calc(2% + 1px)'} />}
        customRightArrow={<CarouselArrow right={'calc(2% + 1px)'} transform={'rotate(180deg)'} />}
        deviceType={'desktop'}
        draggable={false}
        infinite={true}
        itemClass={'carousel-item'}
        partialVisible={partialVisible}
        showDots={showDots}
        ssr={true}
        renderDotsOutside={true}
        responsive={responsive}
        {...restProps}>
        {children}
      </ReactCarousel>
    </Box>
  )
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  itemsCount: PropTypes.shape({
    mobile: PropTypes.number,
    tablet: PropTypes.number,
    desktop: PropTypes.number,
    lgDesktop: PropTypes.number
  }),
  maxItems: PropTypes.number,
  partialVisible: PropTypes.bool,
  showDots: PropTypes.bool,
  spacing: PropTypes.number
}

Carousel.defaultProps = {
  maxItems: 4,
  partialVisible: true,
  spacing: 1
}

export default Carousel
