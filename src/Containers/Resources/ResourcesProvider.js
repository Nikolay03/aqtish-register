import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const ResourcesContext = createContext(null)

function ResourcesProvider (props) {
  const { children, ...restProps } = props

  return (
    <ResourcesContext.Provider value={restProps}>
      {children}
    </ResourcesContext.Provider>
  )
}

ResourcesProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export function useResourcesData () {
  return useContext(ResourcesContext)
}

export default ResourcesProvider
