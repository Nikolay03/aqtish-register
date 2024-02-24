import React, { Children, useEffect } from 'react'
import { Grid } from '@chakra-ui/react'

export default function PageGrid (props) {
  const { children, isReversed, ...restProps } = props

  const arrayChildren = Children.toArray(children)
  const childrenCount = arrayChildren.length

  useEffect(() => {
    if (childrenCount > 2) {
      throw new Error(`PageGrid children count must be no more than 2, found ${childrenCount}`)
    }
  }, [])

  const gridSideContentSize = 'minmax(375px, 32%)'
  const templateColumnLG = isReversed
    ? `${gridSideContentSize} 1fr`
    : `1fr ${gridSideContentSize}`

  return (
    <Grid
      alignItems={'start'}
      gap={6}
      templateColumns={{ base: '100%', lg: templateColumnLG }}
      {...restProps}>
      {children}
    </Grid>
  )
}
