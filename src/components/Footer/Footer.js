import React from 'react'
import { Box } from '@chakra-ui/react'

import FooterCopyright from './FooterCopyright'

import ContactsSection from '~/components/Footer/ContactsSection/ContactsSection'
import FooterNavigation from '~/components/Footer/FooterNavigation'

export default function Footer ({ withContacts = true }) {
  return (
    <>
      <Box as={'footer'} zIndex={1}>
        {withContacts && (<ContactsSection />)}
        <Box>
          <FooterNavigation />
          <FooterCopyright />
        </Box>
      </Box>
    </>
  )
}
