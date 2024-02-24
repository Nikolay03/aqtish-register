import React from 'react'
import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react'

import Container from '~/components/Container'
import { AsideTitle } from '~/components/Titles'
import SubscribeForm from '~/components/SubscribeBlock/SubscribeForm'

const SubscribeBlock = () => {
  return (
    <Box bg={'secondary.100'} py={{ base: 6, lg: 12 }}>
      <Container>
        <SimpleGrid justifyContent={'space-between'} columns={{ base: 1, md: 2 }} spacing={6}>
          <Stack>
            <AsideTitle color={'primary.100'}>
              Join our newsletter
            </AsideTitle>
            <Text color={'primary.200'}>We’ll send you a nice letter once per week. No spam.</Text>
          </Stack>
          <SubscribeForm />
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default SubscribeBlock
