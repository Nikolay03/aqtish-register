import React from 'react'
import PropTypes from 'prop-types'
import { Box, Stack } from '@chakra-ui/react'

import PageHeaderContainer from './PageHeaderContainer'
import PageHeaderTitle from './PageHeaderTitle'

import Container from '~/components/Container'

function DetailPageHeader (props) {
  const { children, title } = props

  return (
    <Stack spacing={4}>
      <PageHeaderContainer>
        <Container>
          <Box display={{ base: 'none', md: 'block' }}>
            {children}
          </Box>
          <Box display={{ base: 'block', md: 'none' }}>
            <PageHeaderTitle>
              {title}
            </PageHeaderTitle>
          </Box>
        </Container>
      </PageHeaderContainer>

      <Box display={{ base: 'block', md: 'none' }}>
        <Container>
          {children}
        </Container>
      </Box>
    </Stack>
  )
}

DetailPageHeader.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default DetailPageHeader
