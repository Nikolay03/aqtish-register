import React from 'react'
import PropTypes from 'prop-types'

import { DOMProvider } from '~/components/Utils/Contexts'
import { ErrorProvider } from '~/components/ErrorModal'
import { AuthProvider } from '~/providers/AuthProvider'

function AppProviders (props) {
  const { children } = props

  return (
    <AuthProvider>
      <DOMProvider>
        <ErrorProvider>
          {children}
        </ErrorProvider>
      </DOMProvider>
    </AuthProvider>
  )
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppProviders
