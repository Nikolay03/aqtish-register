import React from 'react'

import PageHeading from './PageHeading'

export default function SectionTitle (props) {
  return (
    <PageHeading fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }} as={'h2'} color={'secondary.100'} {...props} />
  )
}
