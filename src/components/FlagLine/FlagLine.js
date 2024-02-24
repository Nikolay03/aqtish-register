import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

function FlagMainColor (props) {
  return <Box w={'300px'} {...props} />
}

function FlagSecondaryColor () {
  return <Box bgColor={'#d45144'} w={'70px'} />
}

export default function FlagLine (props) {
  return (
    <Box bgColor={'#e9e8e8'} h={'6px'} overflow={'hidden'} {...props}>
      <Flex
        h={'full'}
        pos={'relative'}
        top={'-1px'}
        left={'-5px'}
        maxW={'70%'}
        transform={'skewX(45deg)'}>
        <FlagMainColor bgColor={'#33a6c7'} />
        <FlagSecondaryColor />
        <FlagMainColor bgColor={'white'} />
        <FlagSecondaryColor />
        <FlagMainColor bgColor={'#21805e'} />
      </Flex>
    </Box>
  )
}
