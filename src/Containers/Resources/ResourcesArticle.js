import React from 'react'
import { Box, Divider, Text } from '@chakra-ui/react'
import { path, propOr } from 'ramda'

import SectionTitle from '~/components/Titles/SectionTitle'
import ResourcesHeader from '~/Containers/Resources/ResourcesHeader'
import { Image } from '~/components/Images'

const ResourcesArticle = ({
  currentArticle,
  setArticle,
  filterActions
}) => {
  const image = path(['image', 'file'], currentArticle)
  const imageName = path(['image', 'name'], currentArticle)
  const info = propOr([], 'info', currentArticle)
  return (
    <Box px={6} bg={'secondary.300'} w={'100%'} pb={32}>
      <ResourcesHeader
        setArticle={setArticle}
        filterActions={filterActions}
        currentArticle={currentArticle}
      />
      <Box mt={10}>
        <Image
          width={'100%'}
          h={{ base: '219px', sm: '350px', md: '450px', xl: '530px' }}
          src={image}
          alt={imageName}
          borderRadius={'12px'}
        />
        {info.map((item, index) => {
          return (
            <Box key={item.id} mt={{ base: index === 0 ? 12 : 8 }} id={`${item.id}`}>
              <SectionTitle fontSize={'3xl'}>
                {item.title}
              </SectionTitle>
              <Text whiteSpace={'pre-line'} mt={4} mb={6} fontSize={{ base: 'md', lg: 'lg' }} color={'primary.200'}>
                {item.description}
              </Text>
              <Divider />
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default ResourcesArticle
