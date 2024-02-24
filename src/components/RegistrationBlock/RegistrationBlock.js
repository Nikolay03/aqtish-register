import React from 'react'
import { Box, Button } from '@chakra-ui/react'

import AsideTitle from '../Titles/AsideTitle'

const RegistrationBlock = () => {
  return (
    <Box
      px={'24px'}
      py={'34px'}
      pos={'relative'}
      borderRadius={'40px'}
      bg={'#FCE6EB'}
    >
      <Box maxW={'395px'}>
        <AsideTitle as={'h2'} mb={{ base: 8, lg: 12 }}>Вы ещё не зарегистрировались в Meest Shopping?</AsideTitle>
      </Box>
      <Button variant={'outline'}>

      </Button>
    </Box>
  )
}

export default RegistrationBlock
