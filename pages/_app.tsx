import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from '../src/theme'
import type { AppProps } from 'next/app'
import {
  AppBar,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import NextLink from 'next/link'

const useStyles = makeStyles({
  link: {
    color: 'white',
  },
})

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  const styles = useStyles()

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Hourly Rent</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography variant="h6" className={styles.link}>
                  Hourly Rent
                </Typography>
              </Link>
            </NextLink>
          </Toolbar>
        </AppBar>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}
