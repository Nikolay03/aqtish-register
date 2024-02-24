import React from 'react'
import { prop } from 'ramda'
import { Box, Text, Heading, SimpleGrid } from '@chakra-ui/react'

import { MiniImage } from '~/components/Images'
import Image from '~/components/Images/Image'

function AboutCard (props) {
  const { data } = props

  const title = prop('title', data)
  const description = prop('description', data)
  const photo = prop('icon', data)
  const src = prop('file', photo)
  const name = prop('name', photo)

  return (
    <Box
      px={{ base: 4, lg: 8 }}
      pt={{ base: 8, lg: 16 }}
      border={'1px solid'}
      borderColor={'primary.300'}
      borderRadius={'12px'}
      overflow={'hidden'}
    >
      <SimpleGrid pb={{ base: 8, lg: 16 }} justifyItems={'center'}>
        <MiniImage
          mb={{ base: 4, lg: 8 }}
        >
          <Image
            bg={'transparent'}
            src={src}
            alt={name}
            h={'40px'}
            w={'40px'}
          />
        </MiniImage>
        <Heading
          color={'primary.100'}
          fontSize={'2xl'}
          title={title}
          mb={2}
        >
          {title}
        </Heading>

        <Text align={'center'} color={'primary.200'} fontSize={{ md: 'md', lg: 'xl' }} >
          {description}
        </Text>
      </SimpleGrid>
    </Box>
  )
}

AboutCard.propTypes = {

}

export default AboutCard
