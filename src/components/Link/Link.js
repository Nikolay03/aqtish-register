import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

function Link (props, ref) {
  const { href, children, ...restProps } = props

  return (
    <NextLink href={href}>
      <ChakraLink
        ref={ref}
        href={href}
        outline={'none'}
        _hover={{ textDecoration: 'none' }}
        {...restProps}>
        {children}
      </ChakraLink>
    </NextLink>
  )
}

const RefLink = forwardRef(Link)

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  locale: PropTypes.string
}

export default RefLink
