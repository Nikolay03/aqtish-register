import React, { forwardRef, Fragment } from 'react'
import PropTypes from 'prop-types'
import { filter, find, not, pipe, propEq } from 'ramda'
import { useRouter } from 'next/router'
import { ChevronDown } from 'react-feather'
import {
  Box,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal
} from '@chakra-ui/react'

import { setLocale } from '~/utils/cookies'

const languages = [
  { id: 'ru', name: 'Рус' },
  { id: 'en', name: 'Eng' },
  { id: 'uz', name: 'O\'zb' }
]

function RefMenuButton (props, ref) {
  const { isOpen, currentLocale, themeType, ...restProps } = props

  return (
    <Button
      ref={ref}
      size={'sm'}
      variant={themeType === 'footer' ? 'language' : 'outline'}
      rightIcon={(
        <Icon
          as={ChevronDown}
          size={18}
          transition={'all 200ms'}
          transform={isOpen ? 'rotate(180deg)' : 'none'}
        />
      )}
      {...restProps}>
      {currentLocale.name}
    </Button>
  )
}

const CustomMenuButton = forwardRef(RefMenuButton)

export default function Languages ({ themeType, ...props }) {
  const { locale, pathname, query, ...router } = useRouter()
  const filteredLanguages = filter(pipe(propEq('id', locale), not), languages)
  const currentLocaleObj = find(propEq('id', locale), languages)

  function onChangeLocale (locale) {
    return router.replace({ pathname, query }, null, { locale, shallow: true })
      .then(() => {
        setLocale(locale)
      })
  }

  return (
    <Box {...props}>
      <Menu placement={'bottom-end'}>
        {({ isOpen }) => (
          <Fragment>
            <MenuButton
              themeType={themeType}
              isOpen={isOpen}
              as={CustomMenuButton}
              currentLocale={currentLocaleObj}
            />
            <Portal>
              <MenuList zIndex={'dropdown'}>
                {filteredLanguages.map(item => (
                  <MenuItem
                    color={themeType === 'footer' ? null : 'palette.black'}
                    key={item.id}
                    aria-label={`Change locale to ${item.id}`}
                    fontWeight={'semibold'}
                    onClick={onChangeLocale.bind(null, item.id)}>
                    <Box >{item.name}</Box>
                  </MenuItem>
                ))}
              </MenuList>
            </Portal>
          </Fragment>
        )}
      </Menu>
    </Box>
  )
}

RefMenuButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  themeType: PropTypes.string,
  currentLocale: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    flag: PropTypes.object
  }).isRequired
}
