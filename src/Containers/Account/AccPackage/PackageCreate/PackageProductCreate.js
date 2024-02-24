import React, { Fragment } from 'react'
import { isEmpty } from 'ramda'
import { Box, Button, Icon, IconButton, Stack, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { Trash2 } from 'react-feather'

import { useTranslate } from '~/utils/translate'
import { Input, NumberInput } from '~/components/HookForm'

function ProductItem (props) {
  const { index, remove } = props
  const { t } = useTranslate()
  return (
    <Tr>
      <Td>
        <Text mt={5}>
          {index + 1}
        </Text>
      </Td>
      <Td>
        <Box h={'100%'}>
          <Input
            withMessage={false}
            name={`items.${index}.name`}
            label={t('product_table_name')}
            isRequired={true}
            size={'sm'}
            rules={{ required: true }}
          />
        </Box>
      </Td>
      <Td>
        <NumberInput
          withMessage={false}
          name={`items.${index}.weight`}
          label={t('product_table_th_weight')}
          isRequired={true}
          size={'sm'}
          rules={{ required: true }}
        />
      </Td>
      <Td>
        <NumberInput
          withMessage={false}
          name={`items.${index}.amount`}
          label={t('product_table_th_quantity')}
          isRequired={true}
          size={'sm'}
          rules={{ required: true }}
        />
      </Td>
      <Td>
        <NumberInput
          withMessage={false}
          name={`items.${index}.price.amount`}
          label={t('product_table_th_amount')}
          isRequired={true}
          size={'sm'}
          rules={{ required: true }}
        />
      </Td>
      <Td>
        <NumberInput
          withMessage={false}
          name={`items.${index}.tnved`}
          label={t('product_table_th_tn')}
          isRequired={true}
          size={'sm'}
          rules={{ required: true }}
        />
      </Td>
      <Td>
        <NumberInput
          withMessage={false}
          name={`items.${index}.price.currency`}
          label={t('product_table_th_currency')}
          isRequired={true}
          size={'sm'}
          rules={{ required: true }}
        />
      </Td>
      <Td isNumeric={true}>
        <IconButton
          mt={4}
          aria-label={'Delete'}
          colorScheme={'red'}
          icon={<Icon as={Trash2} />}
          size={'xs'}
          onClick={remove}
        />
      </Td>
    </Tr>
  )
}

export default function PackageProductCreate (props) {
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
    keyName: 'id'
  })

  const handleAddingItem = (items) => {
    const lastItem = items[items.length - 1]

    if (!lastItem) {
      return '0'
    }
    const lastItemIdNumber = Number(lastItem._id)

    if (Number.isNaN(lastItemIdNumber)) {
      return items.length.toString()
    }

    return `${lastItemIdNumber + 1}`
  }

  const handleAppendItem = () => {
    append({
      _id: handleAddingItem(fields),
      price: {
        amount: 0,
        currency: '860'
      },
      weight: 0,
      amount: 0,
      name: '',
      tnved: ''
    })
  }

  const handleDeleteAll = () => {
    remove()
  }

  const { t } = useTranslate()

  return (
    <Fragment>
      <Table variant={'styled'}>
        <Thead>
          <Tr>
            <Th>
              №
            </Th>
            <Th>
              {t('product_table_name')}
            </Th>
            <Th>
              {t('product_table_th_weight')}
            </Th>
            <Th>
              {t('product_table_th_quantity')}
            </Th>
            <Th>
              {t('product_table_th_amount')}
            </Th>
            <Th>
              {t('product_table_th_tn')}
            </Th>
            <Th>
              {t('product_table_th_currency')}
            </Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {isEmpty(fields) && (
            <Tr>
              <Td colSpan={8} sx={{ textAlign: 'center' }}>
                Добавьте предметы
              </Td>
            </Tr>
          )}
          {fields.map((item, index) => {
            return (
              <ProductItem
                index={index}
                key={index}
                remove={remove}
              />
            )
          })}
        </Tbody>
      </Table>
      <Stack
        direction={'row'}
        spacing={2}
        w={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        justifySelf={'center'}
        paddingTop={6}
        paddingBottom={'10px'}
      >
        <Button
          type={'button'}
          size={'sm'}
          onClick={handleAppendItem}
        >
          Добавить
        </Button>
        <Button
          type={'button'}
          colorScheme={'red'}
          size={'sm'}
          onClick={handleDeleteAll}
        >
          Удалить все
        </Button>
      </Stack>
    </Fragment>
  )
}
