import React from 'react'

import RecipientTable from './RecipientTable'

import { TableSkeleton } from '~/components/Skeletons'
import { TableOverflow } from '~/components/Table'
import Pagination from '~/components/Pagination'
import { AccountContainer } from '~/Containers/Account'

export default function RecipientTableContainer ({ withActions, variant, isClickable, onClick }) {
  const { data } = {}
  const { results = [], count = 1, isLoading = false } = {}

  if (isLoading) {
    return (
      <TableSkeleton
        columnCount={6}
        rowCount={4}
      />
    )
  }

  return (
    <AccountContainer>
      <TableOverflow isClickable={isClickable}>
        <RecipientTable results={[1]} withActions={withActions} variant={variant} onClick={onClick} />
      </TableOverflow>

      <Pagination totalRecords={count} />
    </AccountContainer>
  )
}
