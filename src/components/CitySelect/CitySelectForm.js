import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Box, SimpleGrid, Stack } from '@chakra-ui/react'
import { repeat } from 'ramda'

import { useTranslate } from '~/utils/translate'
import { AccountContainer } from '~/Containers/Account'
import { SearchField } from '~/components/Search'
import { useRequest } from '~/hooks/api'
import { useDebounce } from '~/hooks'

export default function CitySelectForm () {
  const { results, count, isLoading, refetch } = useRequest('', {
    disableLocale: false
  })

  const { t } = useTranslate()

  const isFirstTime = useRef(true)
  const [searchValue, setSearchValue] = useState('')
  const searchValueDebounced = useDebounce(searchValue, 500)
  useEffect(() => {
    if (searchValueDebounced) {
      isFirstTime.current = false
    }

    if (!isFirstTime.current) {
      refetch({
        search: searchValueDebounced
      })
    }
  }, [searchValueDebounced])

  const onInputChange = useCallback((event) => {
    setSearchValue(event.target.value)
  }, [])

  return (
    <AccountContainer>
      <SearchField
        onChange={onInputChange}
        value={searchValue}
        isLoading={isLoading}
        placeholder={t('input_search_label')}
      />
      <SimpleGrid mb={6} mt={6} gap={6} columns={4}>
        {repeat('Ташкент', 20).map(item => (
          <Box>
            {item}
          </Box>
        ))}
      </SimpleGrid>
    </AccountContainer>
  )
}
