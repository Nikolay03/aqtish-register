import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from '@chakra-ui/react'

import LayoutContent from '~/components/Layouts/LayoutContent'
import Footer from '~/components/Footer'

function ArticleLayout ({ children, ...restProps }) {
  return (
    <>
      <Box
        bgGradient={'linear-gradient(90deg, secondary.500 40%, secondary.300 40.5%)'}
      >
        <Flex
          direction={'column'} minH={'100vh'} {...restProps} maxW={'1488px'} mx={'auto'}
          pl={{ base: '0px', xl: '24px' }}
          pr={{ base: '0px', lg: '24px' }}
        >
          <Box
            as={'main'}
            flexGrow={'1'}
            transition={'all 200ms'}>
            <LayoutContent>
              <Flex>
                {children}
              </Flex>
            </LayoutContent>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </>
  )
}

ArticleLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default ArticleLayout
