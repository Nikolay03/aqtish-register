import React from 'react'
import { Home } from 'react-feather'
import { Divider, HStack, Stack } from '@chakra-ui/react'

import { Breadcrumb, BreadcrumbCurrent, BreadcrumbItem, BreadcrumbLink } from '~/components/Breadcumb'
import { ROOT_URL } from '~/constants/routes'
import { SectionTitle } from '~/components/Titles'
import ArticleMobileNavigation from '~/components/Article/ArticleBar/ArticleMobileNavigation'
import RightBarMobileNavigation from '~/components/Article/RightBar/RightBarMobileNavigation'

const ResourcesHeader = ({
  currentArticle,
  setArticle,
  filterActions
}) => {
  return (
    <>
      <HStack mt={'39px'} spacing={5} display={{ base: 'none', xl: 'flex' }}>
        <Stack direction={'row'} h={'26px'} spacing={5}>
          <SectionTitle lineHeight={'none'} fontSize={'2xl'}>
            {currentArticle?.name}
          </SectionTitle>
          <Divider orientation={'vertical'} />
        </Stack>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href={ROOT_URL}>
              <Home size={14} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href={ROOT_URL}>
              Resources
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbCurrent>
              {currentArticle?.name}
            </BreadcrumbCurrent>
          </BreadcrumbItem>
        </Breadcrumb>
      </HStack>
      <ArticleMobileNavigation
        currentArticle={currentArticle}
        setArticle={setArticle}
        filterActions={filterActions}
      />
      <RightBarMobileNavigation
        currentArticle={currentArticle}
      />
    </>
  )
}

export default ResourcesHeader
