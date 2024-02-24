import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@chakra-ui/react'

import { PageHeading } from '~/components/Titles'

function PageHeaderTitle (props) {
  const { isPrimary, ...restProps } = props

  return (
    <Container maxW={'container.md'}>
      <PageHeading
        as={isPrimary ? 'h1' : 'h2'}
        display={isPrimary ? 'block' : { base: 'none', md: 'block' }}
        lineHeight={'none'}
        textAlign={'center'}
        {...restProps}
      />
    </Container>
  )
}

PageHeaderTitle.propTypes = {
  isPrimary: PropTypes.bool
}

PageHeaderTitle.defaultProps = {
  isPrimary: true
}

export default PageHeaderTitle
