import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function ClientRender (props) {
  const { children } = props
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (isMounted) {
    return (
      <Fragment>{children}</Fragment>
    )
  }

  return null
}

ClientRender.propTypes = {
  children: PropTypes.node.isRequired
}

export default ClientRender
