import React from 'react'
import PropTypes from 'prop-types'
import { sprintf } from 'sprintf-js'
import { Box, Divider, Flex, Highlight, Icon } from '@chakra-ui/react'
import { ArrowRightCircle } from 'react-feather'
import { path } from 'ramda'

import CounryBox from '~/Containers/Countries/CounryBox'
import Link from '~/components/Link'
import { useTranslate } from '~/utils/translate'
import { COUNTRY_DETAIL_URL } from '~/constants/routes'
import * as ROUTES from '~/constants/routes'

function CountriesCard (props) {
  const { data, ...restProps } = props
  const { translateData } = useTranslate()
  const name = translateData(data, 'name')
  const price = path(['tariffs', '0', 'priceRu'], data)
  const alias = path(['alias'], data)
  return (
    <Box>
      <CounryBox data={data} />
      <Box mt={7}>
        <Divider orientation={'horizontal'} />
      </Box>
      <Link href={sprintf(ROUTES.COUNTRY_DETAIL_URL, alias)}>
        <Flex justify={'space-between'} align={'center'} px={2} py={4}>
          <p>
            <Highlight query={name} styles={{ fontWeight: 700, color: 'primary.300' }}>
              {`${name} от ${price}$`}
            </Highlight>
          </p>
          <Icon as={ArrowRightCircle} boxSize={5} color={'primary.400'} />
        </Flex>
      </Link>
    </Box>
  )
}

CountriesCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.object
  })
}

export default CountriesCard
