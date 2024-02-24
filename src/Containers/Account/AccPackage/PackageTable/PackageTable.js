import React, { Fragment } from 'react'
import { isEmpty, prop } from 'ramda'
import { useRouter } from 'next/router'
import { sprintf } from 'sprintf-js'
import { Edit, Trash2 } from 'react-feather'
import { Icon, IconButton, Stack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

import { numberFormat } from '~/utils/number'
import { useTranslate } from '~/utils/translate'
import { DATE_FORMATS, useDateFormat } from '~/utils/date'
import { useRemove } from '~/hooks/crud'
import { TableEmptyData, TableSortingLabel } from '~/components/Table'
import { ACCOUNT_PACKAGE_UPDATE_URL } from '~/constants/routes'
import { PACKAGE_DELETE } from '~/constants/api'

export default function PackageTable (props) {
  const { results = [] } = props

  const router = useRouter()

  const { t, translateData } = useTranslate()

  const { dateFormat } = useDateFormat()

  const { remove } = useRemove()

  const { fetchTrades } = {}

  return (
    <Fragment>
      <Table>
        <Thead>
          <Tr>
            <Th>
              <TableSortingLabel
                name={'id'}
                label={t('packages_table_th_id')}
              />
            </Th>
            <Th>
              <TableSortingLabel
                name={'kind'}
                label={t('packages_table_th_created_date')}
              />
            </Th>
            <Th>
              <TableSortingLabel
                name={'commodity_group_classifier'}
                label={t('packages_table_th_recipient')}
              />
            </Th>
            <Th>
              <TableSortingLabel
                name={'volume'}
                label={t('packages_table_th_status')}
              />
            </Th>
            <Th>
              <TableSortingLabel
                name={'bargain_end_datetime'}
                label={t('packages_table_th_cost_transportation')}
              />
            </Th>
            <Th>
              <TableSortingLabel
                name={'status'}
                label={t('packages_table_th_weight')}
              />
            </Th>
            <Th>
              <TableSortingLabel
                name={'status'}
                label={t('packages_table_th_weight')}
              />
            </Th>
            <Th>
              <TableSortingLabel
                name={'status'}
                label={t('packages_table_th_sizes')}
              />
            </Th>
            <Th>
              <TableSortingLabel
                name={'status'}
                label={t('packages_table_th_flight')}
              />
            </Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {[1, 2].map(item => {
            const id = prop('id', item)
            const commodityGroupClassifier = prop('commodityGroupClassifier', item)
            const product = translateData(commodityGroupClassifier, 'name')
            const volume = prop('volume', item)
            const measurement = translateData(prop('measurement', item), 'name')
            const volumeAmount = volume ? numberFormat(volume, measurement) : null
            const bargainEndDatetime = dateFormat(prop('bargainEndDatetime', item), DATE_FORMATS.DATETIME_FORMAT_SHORT)

            const onUpdateTrades = () => {
              return router.push(sprintf(ACCOUNT_PACKAGE_UPDATE_URL, id))
            }

            const onDeleteTrades = () => {
              return remove(sprintf(PACKAGE_DELETE, id))
                .then(() => fetchTrades())
            }

            return (
              <Tr key={id}>
                <Td>
                  1
                </Td>
                <Td>kindName</Td>
                <Td>ааа</Td>
                <Td>ии</Td>
                <Td>сс</Td>
                <Td>
                 статус
                </Td>
                <Td>сс</Td>
                <Td>сс</Td>
                <Td>сс</Td>
                <Td isNumeric={true}>
                  <Stack direction={'row'}>
                    <IconButton
                      aria-label={'Edit packages'}
                      icon={<Icon as={Edit} />}
                      size={'xs'}
                      onClick={onUpdateTrades}
                    />
                    <IconButton
                      aria-label={'Delete packages'}
                      colorScheme={'red'}
                      icon={<Icon as={Trash2} />}
                      size={'xs'}
                      onClick={onDeleteTrades}
                    />
                  </Stack>
                </Td>
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
