import React, { Fragment } from 'react'
import { prop } from 'ramda'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Circle, Flex,
  Stack,
  Text
} from '@chakra-ui/react'
import { HelpCircle, Minus, Plus } from 'react-feather'

import { useTranslate } from '~/utils/translate'

function AccordionIcon (props) {
  const { isExpanded } = props

  return (
    <Circle
      bgColor={'primary.300'}
      color={'white'}
      my={'1px'}
      size={5}>
      {isExpanded
        ? <Minus size={14} />
        : <Plus size={14} />
      }
    </Circle>
  )
}

const FaqList = ({ data }) => {
  const { translateData } = useTranslate()

  return (
    <Stack spacing={6}>
      {[1].map((item, index) => {
        return (
          <Accordion allowMultiple={true} key={index}>
            <Stack spacing={{ base: 2, md: 4 }}>
              {data.map(faq => {
                const id = prop('id', faq)
                const question = translateData(faq, 'question')
                const answer = translateData(faq, 'answer')

                return (
                  <AccordionItem key={id}>
                    {({ isExpanded }) => (
                      <Fragment>
                        <AccordionButton>
                          <AccordionButton>
                            <Box flex={'1'} textAlign={'left'}>
                              <Flex>
                                <Circle color={'primary.300'} mr={2}>
                                  <HelpCircle size={22} />
                                </Circle>
                                {question}
                              </Flex>
                            </Box>
                            <AccordionIcon isExpanded={isExpanded} />
                          </AccordionButton>
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <Text>{answer}</Text>
                        </AccordionPanel>
                      </Fragment>
                    )}
                  </AccordionItem>
                )
              })}
            </Stack>
          </Accordion>
        )
      })}
    </Stack>
  )
}

export default FaqList
