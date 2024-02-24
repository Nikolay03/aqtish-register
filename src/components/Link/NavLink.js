import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import Link from './Link'

function NavLink (props) {
  const { href, activeClassName, children, ...restProps } = props
  const router = useRouter()

  const isActive = router.pathname === href

  const className = isActive ? activeClassName : ''

  return (
    <Link
      className={className}
      fontWeight={'medium'}
      href={href}
      {...restProps}>
      {children}
    </Link>
  )
}

NavLink.propTypes = {
  activeClassName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
}

NavLink.defaultProps = {
  activeClassName: 'active'
}

export default NavLink
