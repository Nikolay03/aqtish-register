import React from 'react'
import styled from '@emotion/styled'

import { PageLayout } from '~/components/Layouts'
import PageWrapper from '~/components/PageWrapper'
import { useTranslate } from '~/utils/translate'
import { PageHeading } from '~/components/Titles'
import { Breadcrumb, BreadcrumbCurrent, BreadcrumbItem, BreadcrumbLink } from '~/components/Breadcumb'
import { ROOT_URL } from '~/constants/routes'

const HTML = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  //color: ${({ theme }) => theme.color.secondary};
  //font-size: ${({ theme }) => theme.fontSize.title};
  // text-shadow: ${({ theme }) => theme.textShadow.headline};
  font-weight: 300;
  &  p {
        white-space: pre-line;
        margin-bottom: 10px;
    };
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
  & h1,
  & h2 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 12px;
  }
  & h4 {
    font-size: 18px;
    margin-bottom: 8px;
    font-weight: 600;
  }
  & em {
    font-style: italic;
  }
  & ul {
    list-style: disc;
    padding-left: 30px;
  }
  & ol {
    list-style: decimal;
    padding-left: 30px;
  }
  & a {
    //color: ${({ theme }) => theme.palette.primary};
    &:hover {
      text-decoration: underline;
    }
  }
  & hr {
    width: 100%;
    background: none;
    height: 0;
    margin: 12px 0px;
  }
  & table {
    //font-size: ${({ theme }) => theme.fontSize.headline};
    color: inherit;
    //border-radius: ${({ theme }) => theme.borderRadius.button};
    width: 100%;
    max-width: 100%;
    border-collapse: collapse;
    & * {
      overflow-wrap: break-word;
      //border: ${({ theme }) => theme.border.button};
    }
    & th,
    & tr,
    & td {
      vertical-align: baseline;
      padding: 8px 10px;
      text-align: left;
      font-weight: 300;
    }
    & tr > th {
      font-weight: 500;
    }
    & tr > td:first-child {
      font-weight: 400;
    }
  }
  & .pages__table {
    max-width: 100%;
    width: 100%;
    overflow-x: auto;
  }
`

// Component
const PageGrid = props => {
  const { pagesDetail } = props
  const { t, translateData } = useTranslate()

  const html = translateData(pagesDetail, 'html')
  const name = translateData(pagesDetail, 'name')
  return (
    <PageWrapper title={'YUMECS'}>
      <PageLayout>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href={ROOT_URL}>
              {t('home_page_title')}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbCurrent>
              {name}
            </BreadcrumbCurrent>
          </BreadcrumbItem>
        </Breadcrumb>
        <PageHeading mb={6} whiteSpace={'pre-line'}>
          {name}
        </PageHeading>
        <HTML dangerouslySetInnerHTML={{ __html: html }} />
      </PageLayout>
    </PageWrapper>
  )
}

export default PageGrid
