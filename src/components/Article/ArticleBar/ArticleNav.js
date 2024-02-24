import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { path } from 'ramda'

import { useResourcesData } from '~/Containers/Resources/ResourcesProvider'
import { getListData } from '~/utils/fetch'

const ArticleNav = ({
  setArticle,
  filterActions
}) => {
  const { amazyData } = useResourcesData()
  const { results } = getListData(amazyData)
  const { query } = useRouter()
  const currentId = Number(query?.id) || path(['0', 'id'], results)
  return (
    <Stack
      mr={{ base: '0px', xl: '16px' }}
      minW={{ base: '230px', xl: '230px' }}
      spacing={0}>
      {results.map(menu => {
        const isActive = currentId === menu.id
        return (
          <Box
            onClick={() => {
              setArticle(menu.id)
              filterActions.onChangeFilter({ id: menu.id })
            }}
            key={menu.id}
            sx={{
              borderRadius: '8px',
              cursor: 'pointer',
              py: 3,
              px: 4,
              color: 'primary.100',
              bg: isActive && 'secondary.100',
              border: isActive && '1px solid',
              borderColor: 'primary.300',
              '&:hover': {
                bg: 'secondary.100',
                color: 'primary.100'
              }
            }}>
            {menu.name}
          </Box>
        )
      })}
    </Stack>
  )
}

export default ArticleNav
