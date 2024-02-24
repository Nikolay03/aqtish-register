import React from 'react'
import { find, includes, prop, split, startsWith } from 'ramda'
import { useRouter } from 'next/router'
import { Box, Circle, Flex, useToken } from '@chakra-ui/react'
import { ArrowDown, ArrowUp } from 'react-feather'

import { ORDERING_STATES } from '~/constants/constants'

function getOrderingState (currentState) {
  if (!currentState) return null
  if (startsWith('-', currentState)) return ORDERING_STATES.DESC
  return ORDERING_STATES.ASC
}

function getArrowColor (condition) {
  return condition ? useToken('colors', 'primary.500') : useToken('colors', 'gray.500')
}

export default function TableSortingLabel (props) {
  const { name, label } = props

  const { pathname, query, ...router } = useRouter()

  const queryOrdering = prop('ordering', query)
  const queryOrderingKeys = queryOrdering ? split(',', queryOrdering) : []

  const currentState = find(includes(name), queryOrderingKeys)
  const orderingState = getOrderingState(currentState)
  const isAsc = orderingState === ORDERING_STATES.ASC
  const isDesc = orderingState === ORDERING_STATES.DESC

  function onSort () {
    const nextStates = {
      null: name,
      [`${ORDERING_STATES.ASC}`]: `-${name}`,
      [`${ORDERING_STATES.DESC}`]: ''
    }

    return router.replace({
      pathname,
      query: { ...query, ordering: nextStates[orderingState] }
    }, null, { shallow: true })
  }

  return (
    <Flex align={'center'} cursor={'pointer'} onClick={onSort}>
      <Box mr={1}>{label}</Box>
      <Circle size={4}>
        {orderingState
          ? (
            <>
              {
                isAsc
                  ? (
                    <ArrowUp height={16} width={16} color={getArrowColor(isAsc)} />
                  )
                  : (
                    <ArrowDown height={16} width={16} color={getArrowColor(isDesc)} />
                  )
              }
            </>
          )
          : null
        }
      </Circle>
    </Flex>
  )
}
