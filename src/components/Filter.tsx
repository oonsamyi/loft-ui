import { Box } from '@material-ui/core'
import { ReactNode } from 'react'
import { useMobile } from '../hooks/useMobile'

interface IProps {
  label: string
  children: ReactNode
}

export const Filter = ({ label, children }: IProps) => {
  const isMobile = useMobile()

  return (
    <Box
      display="flex"
      mb="48px"
      alignItems={isMobile ? undefined : 'center'}
      flexDirection={isMobile ? 'column' : 'row'}
    >
      <Box fontSize="28px" lineHeight="34px" fontWeight="500" minWidth="150px">
        {label}
      </Box>
      <Box display="flex" mt={isMobile ? '16px' : undefined}>
        {children}
      </Box>
    </Box>
  )
}
