import { Box, Button, Dialog, IconButton } from '@material-ui/core'
import { useCallback } from 'react'
import { IRealtyObjectViewModel } from '../../swagger/Api'
import CloseIcon from '@material-ui/icons/Close'
import { getTotalPrice } from '../utils/getTotalPrice'
import { IDate } from '../types'
import { useMobile } from '../hooks/useMobile'

interface IProps {
  isOpen: boolean
  offer: IRealtyObjectViewModel
  date: IDate
  services: number[]
  onClose(): void
}

const LK_LINK = 'https://hourlyrent.azurewebsites.net/ClientAdmin/ObjectList'

export const BookingSuccess = ({
  isOpen,
  offer,
  date,
  services,
  onClose,
}: IProps) => {
  const isMobile = useMobile()

  const handleRedirectToLk = useCallback(() => {
    window.location.href = LK_LINK
  }, [])

  return (
    <Dialog
      onClose={onClose}
      open={isOpen}
      maxWidth={false}
      fullScreen={isMobile}
    >
      <Box
        padding={isMobile ? '12px' : '40px'}
        width={isMobile ? undefined : '506px'}
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box position="absolute" top="5px" right="5px">
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box>
          <img src="/success.png" width="180px" height="180px" />
        </Box>

        <Box
          mt="20px"
          fontSize="22px"
          lineHeight="28px"
          fontWeight="500"
          textAlign="center"
        >
          Лофт забронирован и оплачен
        </Box>

        <Box fontSize="16px" lineHeight="24px" mt="8px">
          {offer.address}
        </Box>

        <Box fontSize="16px" lineHeight="24px">
          {getTotalPrice({ offer, date, services })} ₽
        </Box>

        <Box mt="40px" width="278px">
          <Button
            color="primary"
            variant="text"
            size="large"
            fullWidth
            onClick={handleRedirectToLk}
          >
            В ЛИЧНЫЙ КАБИНЕТ
          </Button>
        </Box>

        <Box mt="16px" width="278px">
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            onClick={onClose}
          >
            На главную
          </Button>
        </Box>
      </Box>
    </Dialog>
  )
}
