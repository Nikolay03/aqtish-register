import React from 'react'
import { prop } from 'ramda'
import { Box, Text, Heading, Stack } from '@chakra-ui/react'

import { Image } from '~/components/Images'

function TeamCard (props) {
  const { data } = props
  const position = prop('position', data)
  const name = prop('name', data)
  const photo = prop('image', data)
  const src = prop('file', photo)
  const nameFile = prop('name', photo)

  return (
    <Box
      overflow={'hidden'}>
      <Image
        borderColor={'primary.300'}
        borderRadius={'base'}
        borderWidth={1}
        alt={nameFile}
        bgColor={'secondary.200'}
        h={{ base: '250px', lg: '351px' }}
        src={src}
      />
      <Stack pt={5} px={5} pb={6}>

        <Heading
          fontSize={'2xl'}
          align={'center'}
          color={'primary.100'}
        >
          {position}
        </Heading>

        <Text
          color={'primary.200'}
          align={'center'}
          fontSize={{ md: 'md', lg: 'xl' }}
        >
          {name}
        </Text>
      </Stack>
    </Box>
  )
}

TeamCard.propTypes = {

}

export default TeamCard
