import React from 'react'
import { Grid } from '@chakra-ui/react'

import { ContactsCard } from '~/Containers/Contracts'

const ContactsList = ({ data }) => {
  return (
    <Grid
      templateColumns={'repeat(auto-fill, minmax(200px, 1fr))'}
      gap={14}
    >
      {data.map((item, index) => (
        <ContactsCard data={item} key={index} />
      ))}
    </Grid>
  )
}

export default ContactsList
