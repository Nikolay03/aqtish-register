import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

function formatTitle (title) {
  if (!title) return ''
  return `${title} - Что то там`
}

function PageWrapper (props) {
  const { children, title, description, image, url } = props

  return (
    <Fragment>
      <Head>
        <meta content={'IE=edge'} httpEquiv={'X-UA-Compatible'} />
        <meta name={'viewport'} content={'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'} />
        <title>{formatTitle(title)}</title>
        {description && <meta name={'description'} content={description} />}

        <meta property={'og:title'} content={title} />
        <meta property={'og:description'} content={description} />
        <meta property={'og:image'} content={image} />
        <meta property={'og:url'} content={url} />

        <meta name={'twitter:title'} content={title} />
        <meta name={'twitter:description'} content={description} />
        <meta name={'twitter:image'} content={image} />
        <meta name={'twitter:card'} content={'summary_large_image'} />
      </Head>
      {children}
    </Fragment>
  )
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string
}

export default PageWrapper
