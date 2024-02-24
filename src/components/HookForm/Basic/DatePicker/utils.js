import React from 'react'
import { range } from 'ramda'
import getMonth from 'date-fns/getMonth'
import getYear from 'date-fns/getYear'
import isSameDay from 'date-fns/isSameDay'
import { Box, Flex, Select } from '@chakra-ui/react'

import useCalendarMonths from './useCalendarMonths'

export function useCustomHeader () {
  const months = useCalendarMonths()
  const years = range(1920, getYear(new Date()) + 1, 1)

  return function renderCustomHeader (props) {
    const { date, changeYear, changeMonth } = props

    return (
      <Flex
        bgColor={'white'}
        borderRadius={'base'}
        justify={'space-between'}
        m={3}
        px={2}>
        <Select
          size={'sm'}
          variant={'unstyled'}
          value={months[getMonth(date)]}
          onChange={event => changeMonth(months.indexOf(event.target.value))}>
          {months.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>

        <Select
          size={'sm'}
          variant={'unstyled'}
          value={getYear(date)}
          onChange={event => changeYear(event.target.value)}>
          {years.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Flex>
    )
  }
}

export function calendarContainer (props) {
  const { children } = props

  return (
    <Box
      bgColor={'white'}
      border={'1px solid'}
      borderRadius={'md'}
      borderColor={'palette.lightGray'}
      color={'palette.darkGreen'}
      display={'inline-block'}
      pos={'relative'}
      sx={{
        '& .react-datepicker__header': {
          bgColor: 'palette.lightGray',
          borderBottom: '1px solid',
          borderColor: 'palette.lightGray',
          '& .react-datepicker__day-name': {
            color: 'inherit'
          }
        },
        '& .day': {
          borderRadius: 'base',
          color: 'inherit',
          '&:hover': {
            bgColor: 'palette.lightGray'
          },
          '&[class*="selected"]': {
            bgColor: 'palette.darkGreen',
            color: 'white'
          },
          '&[class*="outside-month"]': {
            opacity: '0.5'
          },
          '&.current_day': {
            bgColor: 'primary.500',
            color: 'white'
          }
        }
      }}>
      {children}
    </Box>
  )
}

export function dayClassName (date) {
  const isToday = isSameDay(new Date(), date)
  return isToday ? 'day current_day' : 'day'
}
