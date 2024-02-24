import React from 'react'
import {
  Accordion, AccordionButton, AccordionItem, AccordionPanel,
  AccordionIcon,
  Box,
  Flex
} from '@chakra-ui/react'

import { RightBarSearch } from '~/components/Article/RightBar/RightBarComponents'
import RightNavigation from '~/components/Article/RightBar/RightNavigation'

export default function RightBarMobileNavigation ({ currentArticle }) {
  return (
    <Box display={{ base: 'block', lg: 'none' }} mt={3}>
      <Accordion defaultIndex={[0]} allowMultiple={true}>
        <AccordionItem bg={'transparent'} borderColor={'transparent'}>
          <Flex justify={'space-between'}>
            <Box maxW={'275px'}>
              <RightBarSearch />
            </Box>
            <AccordionButton w={'auto'}>
              <AccordionIcon bg={'transparent !important'} />
            </AccordionButton>
          </Flex>

          <AccordionPanel pb={4}>
            <RightNavigation currentArticle={currentArticle} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}
