/* eslint-disable react/react-in-jsx-scope */
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument {
  render () {
    return (
      <Html>
        <Head>
          <link rel={'shortcut icon'} href={'/assets/iconss.png'} />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />

          <div id={'datepicker-portal'} />
        </body>
      </Html>
    )
  }
}
