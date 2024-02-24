import React from 'react'
import PropTypes from 'prop-types'
import { Box, Stack } from '@chakra-ui/react'

import PageHeaderContainer from './PageHeaderContainer'
import PageHeaderTitle from './PageHeaderTitle'

import Container from '~/components/Container'

function PageHeader (props) {
  const { children, title, marginBottom } = props

  return (
    <Stack mb={{ base: 'unset', md: marginBottom }} spacing={4}>
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

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  marginBottom: PropTypes.number
}

PageHeader.defaultProps = {
  marginBottom: 24
}

export default PageHeader
