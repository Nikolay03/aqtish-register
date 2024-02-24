import React, { Fragment } from 'react'
import { isEmpty, prop } from 'ramda'
import { useRouter } from 'next/router'
import { sprintf } from 'sprintf-js'
import { Edit, Trash2 } from 'react-feather'
import { Icon, IconButton, Stack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

import { useTranslate } from '~/utils/translate'
import { useDateFormat } from '~/utils/date'
import { useRemove } from '~/hooks/crud'
import { TableEmptyData, TableSortingLabel } from '~/components/Table'
import { ACCOUNT_RECIPIENT_UPDATE_URL } from '~/constants/routes'
import { RECIPIENT_DELETE } from '~/constants/api'

export default function RecipientTable (props) {
  const { results = [1], withActions, variant, onClick } = props

  const router = useRouter()

  const { t, translateData } = useTranslate()

  const { dateFormat } = useDateFormat()

  const { remove } = useRemove()

  const { fetchTrades } = {}

  return (
    <Fragment>
      <Table variant={variant}>
        <Thead>
          <Tr>
            <Th>
              <TableSortingLabel
                name={'id'}
                label={t('recipient_table_th_id')}
              />
            </Th>
            <Th>
              <TableSortingLabel
                name={'kind'}
                label={t('recipient_table_th_name')}
              />
            </Th>
            <Th>
              <TableSortingLabel
                name={'commodity_group_classifier'}
                label={t('recipient_table_th_passport')}
              />
            </Th>
            <Th>
              <TableSortingLabel
                name={'volume'}
                label={t('recipient_table_th_phone')}
              />
            </Th>
            {withActions && <Th />}
          </Tr>
        </Thead>
        <Tbody>
          {[1, 2].map(item => {
            const id = prop('id', item)
            const onUpdateRecipient = () => {
              return router.push(sprintf(ACCOUNT_RECIPIENT_UPDATE_URL, id))
            }

            const onDeleteRecipient = () => {
              return remove(sprintf(RECIPIENT_DELETE, 1))
                .then(() => fetchTrades())
            }

            return (
              <Tr key={id} onClick={onClick ? () => onClick() : null}>
                <Td>
                  1
                </Td>
                <Td>kindName</Td>
                <Td>ааа</Td>
                <Td>сс</Td>
                {withActions && (
                  <Td isNumeric={true}>
                    <Stack direction={'row'}>
                      <IconButton
                        aria-label={'Edit recipient'}
                        icon={<Icon as={Edit} />}
                        size={'xs'}
                        onClick={onUpdateRecipient}
                      />
                      <IconButton
                        aria-label={'Delete recipient'}
                        colorScheme={'red'}
                        icon={<Icon as={Trash2} />}
                        size={'xs'}
                        onClick={onDeleteRecipient}
                      />
                    </Stack>
                  </Td>
                )}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
      {isEmpty(results) && (
        <TableEmptyData />
      )}
    </Fragment>
  )
}
