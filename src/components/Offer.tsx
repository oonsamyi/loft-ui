import { Box, Button } from '@material-ui/core'
import { useCallback, useState } from 'react'
import { IRealtyObjectViewModel } from '../../swagger/Api'
import { IDate } from '../types'
import { BookingCheckout } from './BookingCheckout'
import { BookingSuccess } from './BookingSuccess'

interface IProps {
  offer: IRealtyObjectViewModel
  date: IDate
  services: number[]
  onChangeServices(services: number[]): void
}

export const Offer = ({ offer, date, services, onChangeServices }: IProps) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false)
  const [isSuccessOpen, setIsSuccessOpen] = useState<boolean>(false)

  const handleBookOffer = useCallback(() => {
    setIsCheckoutOpen(true)
  }, [setIsCheckoutOpen])

  const handleCloseCheckout = useCallback(() => {
    setIsCheckoutOpen(false)
  }, [setIsCheckoutOpen])

  const handleSuccessBooking = useCallback(() => {
    setIsCheckoutOpen(false)
    setIsSuccessOpen(true)
  }, [setIsCheckoutOpen, setIsSuccessOpen])

  const handleCloseSuccess = useCallback(() => {
    setIsSuccessOpen(false)
  }, [setIsSuccessOpen])

  return (
    <Box bgcolor="#F2F2F2" borderRadius="4px">
      <Box
        fontSize="22px"
        fontWeight="500"
        lineHeight="28px"
        px="16px"
        py="12px"
      >
        {offer.title}
      </Box>

      <img
        src={offer.images ? offer.images[0] : undefined}
        width="100%"
        height="310px"
        style={{ objectFit: 'cover' }}
      />

      <Box p="20px" display="flex" justifyContent="space-between">
        <Box display="flex" flexDirection="column">
          <Box fontSize="22px" fontWeight="500" lineHeight="28px" mb="8px">
            {offer.price} ₽ / час
          </Box>
          <Box fontSize="16px" lineHeight="22px">
            {offer.totalSpace} м², на {offer.capacity} человек
          </Box>
        </Box>

        <Box width="200px">
          <Button
            color="primary"
            fullWidth
            size="large"
            onClick={handleBookOffer}
          >
            ЗАБРОНИРОВАТЬ
          </Button>
        </Box>

        <BookingCheckout
          offer={offer}
          date={date}
          services={services}
          isOpen={isCheckoutOpen}
          onClose={handleCloseCheckout}
          onSuccess={handleSuccessBooking}
          onChangeServices={onChangeServices}
        />

        <BookingSuccess
          offer={offer}
          date={date}
          services={services}
          isOpen={isSuccessOpen}
          onClose={handleCloseSuccess}
        />
      </Box>
    </Box>
  )
}
