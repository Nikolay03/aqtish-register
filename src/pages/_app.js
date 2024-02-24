/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types'
import Router from 'next/router'
import { SWRConfig } from 'swr'
import '@fontsource/source-sans-pro/400.css'
import '@fontsource/source-sans-pro/600.css'
import '@fontsource/source-sans-pro/700.css'
import { ChakraProvider } from '@chakra-ui/react'
import ProgressBar from '@badrap/bar-of-progress'

import { fetcher } from '~/utils/swr'
import theme from '~/theme'
import AppProviders from '~/providers/AppProviders'

const progress = new ProgressBar({
  size: 2,
  color: theme.colors.primary['500'],
  className: 'bar-of-progress',
  delay: 100
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function App (props) {
  const { Component, pageProps } = props

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <AppProviders>
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
      </AppProviders>
    </ChakraProvider>
  )
}

App.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]).isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object
}

export default App
