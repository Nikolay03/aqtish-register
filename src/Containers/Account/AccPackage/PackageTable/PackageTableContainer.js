import React from 'react'

import PackageTable from './PackageTable'

import { TableSkeleton } from '~/components/Skeletons'
import { TableOverflow } from '~/components/Table'
import Pagination from '~/components/Pagination'
import { AccountContainer } from '~/Containers/Account'

export default function PackageTableContainer () {
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
      <TableOverflow>
        <PackageTable results={results} />
      </TableOverflow>

      <Pagination totalRecords={count} />
    </AccountContainer>
  )
}
