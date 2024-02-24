import React, { useEffect } from 'react'
import { Box, useToken } from '@chakra-ui/react'

import NavBar from './NavBar'

import { useDOM } from '~/components/Utils/Contexts'

export default function Header () {
  const { headerRef } = useDOM()
  const primary50 = useToken('colors', 'primary.50')
  useEffect(() => {
    const onScroll = () => {
      window.pageYOffset > 50
        ? headerRef.current.style.background = primary50
        : headerRef.current.style.background = primary50
    }
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <Box
      ref={headerRef}
      as={'header'}
      background={primary50}
      transition={'all 0.5s'}
      pos={'fixed'}
      top={0}
      left={0}
      boxShadow={'0px 2px 15px rgb(25 119 204 / 10%)'}
      right={0}
      zIndex={'100'}>
      <NavBar />
    </Box>
  )
}
