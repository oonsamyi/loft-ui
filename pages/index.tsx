import React from 'react'
import NextLink from 'next/link'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Link } from '@material-ui/core'

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Главная страница
        </Typography>
        <NextLink href="/about" passHref>
          <Link color="secondary">Тестовая страница</Link>
        </NextLink>
      </Box>
    </Container>
  )
}
