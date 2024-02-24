import React from 'react'
import { useRouter } from 'next/router'
import {
  Box, Button
} from '@chakra-ui/react'

import { setLocale } from '~/utils/cookies'

const languages = [
  { id: 'ru', name: 'Рус' },
  { id: 'en', name: 'Eng' },
  { id: 'uz', name: 'O\'zb' }
]

export default function MobileLanguages (props) {
  const { locale, pathname, activeClassName, query, ...router } = useRouter()
  function onChangeLocale (locale) {
    return router.replace({ pathname, query }, null, { locale, shallow: true })
      .then(() => {
        setLocale(locale)
      })
  }

  return (
    <Box {...props}>
      {languages.map(i => {
        const isActive = locale === i.id

        return (
          <Button
            justifyContent={'flex-start'}
            color={isActive ? 'primary.500' : 'gray.300'}
            onClick={() => onChangeLocale(i.id)}
            key={i.id}
            textDecoration={isActive ? 'underline' : null}
            variant={'link'}
          >
            {i.name}
          </Button>
        )
      })}
    </Box>
  )
}
