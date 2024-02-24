import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from '@chakra-ui/react'

import { useDOM } from '~/components/Utils/Contexts'
import { useDimensions } from '~/hooks'
import Header from '~/components/Header'
import LayoutContent from '~/components/Layouts/LayoutContent'
import Container from '~/components/Container'
import Footer from '~/components/Footer'

function PageLayout ({ children, withContacts }) {
  const { headerRef } = useDOM()
  const { height: headerHeight } = useDimensions(headerRef)

  return (
    <Flex
      bgColor={'white'}
      direction={'column'}
      minH={'100vh'}>
      <Header />

      <Box
        as={'main'}
        flexGrow={1}
        pt={`${headerHeight}px`}
        transition={'all 200ms'}>
        <LayoutContent>
          <Container flexGrow={1}>
            <Box pt={8} pb={{ base: 8, md: 20 }}>
              {children}
            </Box>
          </Container>
        </LayoutContent>
      </Box>

      <Footer bgColor={'transparent'} withContacts={withContacts} />
    </Flex>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageLayout
