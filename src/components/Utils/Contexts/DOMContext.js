import React, { createContext, useContext, useRef } from 'react'
import PropTypes from 'prop-types'

const DOMContext = createContext(null)

export function DOMProvider ({ children }) {
  const headerRef = useRef()

  return (
    <DOMContext.Provider value={{ headerRef }}>
      {children}
    </DOMContext.Provider>
  )
}

DOMProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export function useDOM () {
  return useContext(DOMContext)
}
