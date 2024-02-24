import React from 'react'
import PropTypes from 'prop-types'
import { Stack, Box, Text } from '@chakra-ui/react'

const sizes = {
  md: {
    container: {
      spacing: { base: 0, md: 0 }
    },
    tabPanel: {
      py: 2
    },
    tab: {
      fontSize: { base: 'xl', md: '2xl' }
    }
  },
  sm: {
    container: {
      spacing: { base: 4, md: 6 }
    },
    tabPanel: {
      py: 1
    },
    tab: {
      fontSize: 'md'
    }
  }
}

function TabTitle (props) {
  const { tabs, onChange, value, size } = props

  return (
    <Stack{...sizes[size].container} direction={'row'}>
      {tabs.map(tab => {
        const isActive = tab.value === value
        return (
          <Box
            {...sizes[size].tabPanel}
            key={tab.value}
            borderWidth={1}
            borderColor={isActive ? 'primary.500' : 'transparent'}
            color={isActive ? 'primary.100' : 'primary.200'}
            cursor={'pointer'}
            py={4}
            px={6}
            borderRadius={'12px'}
            transition={'all 200ms'}
            _hover={{ color: 'primary.100' }}
            onClick={onChange.bind(null, tab.value)}
          >
            <Text
              {...sizes[size].tab}
              fontWeight={'semibold'}
              lineHeight={'none'}>
              {tab.title}
            </Text>
          </Box>
        )
      })}
    </Stack>
  )
}

TabTitle.propTypes = {
  tabs: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
}

TabTitle.defaultProps = {
  size: 'md'
}

export default TabTitle
