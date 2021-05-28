import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import NextLink from 'next/link'

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Тестовая страница
        </Typography>
        <NextLink href="/" passHref>
          <Button variant="contained" color="primary">
            На главную
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}
