import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'ramda'
import { Center, SimpleGrid } from '@chakra-ui/react'

import { ClientRender } from '~/components/Utils'
import { CardGridSkeleton } from '~/components/Skeletons'

function AboutGrid (props) {
  const { children, isLoading, ...restProps } = props

  const gridProps = {
    columns: { base: 1, md: 2, lg: 3 },
    spacing: 6,
    ...restProps
  }

  if (isLoading) {
    return (
      <ClientRender>
        <CardGridSkeleton
          imgHeight={'180px'}
          {...gridProps}
        />
      </ClientRender>
    )
  }

  if (isEmpty(children)) {
    return (
      <Center>
        Ничего не найдено
      </Center>
    )
  }

  return (
    <SimpleGrid {...gridProps}>
      {children}
    </SimpleGrid>
  )
}

AboutGrid.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool
}

export default AboutGrid
