import React from 'react'
import { Link, Stack } from '@chakra-ui/react'
import { propOr } from 'ramda'

export default function RightNavigation ({ currentArticle }) {
  const info = propOr([], 'info', currentArticle)
  return (
    <Stack
      minW={{ base: '200px', xl: '260px' }}
      spacing={4}>
      {info.map(menu => (
        <Link
          key={menu.title}
          href={`#${menu.id}`}
          fontSize={'15px'}
          sx={{
            pl: 4,
            color: '#696F7C',
            '&:hover': {
              color: 'primary.100'
            }
          }}>
          {menu.title}
        </Link>
      ))}
    </Stack>
  )
}
