import React, { useEffect } from 'react'

import HomeSection from '~/Containers/Home/HomeSection'
import ContactsList from '~/components/Footer/ContactsSection/ContactsList'
import { useList } from '~/hooks/crud'
import * as API from '~/constants/api'
import { getListData } from '~/utils/fetch'
import { TableSkeleton } from '~/components/Skeletons'
import { CONTACT_LIST } from '~/constants/api'

const ContactsSection = () => {
  const { results, isLoading } = useList(API.CONTACT_LIST, null, true)
  return (
    <HomeSection>
      {isLoading
        ? (
          <TableSkeleton
            columnCount={6}
            rowCount={4}
          />
        )
        : (
          <ContactsList data={results} />
        )
      }
    </HomeSection>
  )
}

export default ContactsSection
