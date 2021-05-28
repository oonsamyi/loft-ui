import React from 'react'
import NextLink from 'next/link'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Button } from '@material-ui/core'

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Главная страница
        </Typography>
        <NextLink href="/test" passHref>
          <Button variant="contained" color="primary">
            На тестовую
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}
