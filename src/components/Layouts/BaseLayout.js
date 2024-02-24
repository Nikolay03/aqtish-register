import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from '@chakra-ui/react'

import LayoutContent from './LayoutContent'

import { useDOM } from '~/components/Utils/Contexts'
import { useDimensions } from '~/hooks'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

function BaseLayout (props) {
  const { children, paddingTop = true, withContacts, ...restProps } = props

  const { headerRef } = useDOM()
  const { height: headerHeight } = useDimensions(headerRef)
  return (
    <Flex direction={'column'} minH={'100vh'} {...restProps}>
      <Header />

      <Box
        as={'main'}
        flexGrow={'1'}
        pt={paddingTop && `${headerHeight}px`}
        transition={'all 200ms'}>
        <LayoutContent>
          {children}
        </LayoutContent>
      </Box>

      <Footer withContacts={withContacts} />
    </Flex>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default BaseLayout
