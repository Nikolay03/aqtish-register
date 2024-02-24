import { Box } from '@chakra-ui/react'
import React from 'react'

export default function HtmlContent (props) {
  const { html } = props

  return (
    <Box
      dangerouslySetInnerHTML={{ __html: html }}
      sx={{
        '& h2': {
          fontSize: { base: 'xl', md: '2xl' },
          fontWeight: 'semibold'
        },
        '& h3': {
          fontSize: { base: 'lg', md: 'xl' },
          fontWeight: 'semibold'
        },
        '& p': {
          lineHeight: 'base'
        },
        '& ul, & ol': {
          listStylePos: 'inside',
          lineHeight: 'base'
        }
      }}
    />
  )
}
