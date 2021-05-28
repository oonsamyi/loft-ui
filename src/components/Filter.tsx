import { Box } from '@material-ui/core'
import { ReactNode } from 'react'

interface IProps {
  label: string
  children: ReactNode
}

export const Filter = ({ label, children }: IProps) => {
  return (
    <Box display="flex" mb="48px" alignItems="center">
      <Box fontSize="28px" lineHeight="34px" fontWeight="500" minWidth="150px">
        {label}
      </Box>
      <Box display="flex">{children}</Box>
    </Box>
  )
}
