import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  IconButton,
} from '@material-ui/core'
import { useCallback, useState } from 'react'
import { IRealtyObjectViewModel } from '../../swagger/Api'
import CloseIcon from '@material-ui/icons/Close'
import { TickIcon } from './TickIcon'
import format from 'date-fns/format'
import ru from 'date-fns/locale/ru'
import { IDate } from '../types'
import { httpClient } from '../api'

interface IProps {
  isOpen: boolean
  date: IDate
  offer: IRealtyObjectViewModel
  onClose(): void
  onSuccess(): void
}

export const BookingCheckout = ({
  isOpen,
  offer,
  date,
  onClose,
  onSuccess,
}: IProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleBook = useCallback(async () => {
    setIsLoading(true)

    const parsedFrom = date.from?.toISOString()
    const parsedTo = date.to?.toISOString()

    await httpClient.api.bookingCreate({
      objectId: offer.id,
      from: parsedFrom,
      to: parsedTo,
    })

    setIsLoading(false)
    onSuccess()
  }, [offer, date, setIsLoading, onSuccess])

  return (
    <Dialog onClose={onClose} open={isOpen} maxWidth={false}>
      <Box pt="24px" px="44px" pb="30px" width="722px" position="relative">
        <Box position="absolute" top="5px" right="5px">
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          fontSize="22px"
          lineHeight="28px"
          fontWeight="500"
          mb="20px"
        >
          Бронирование лофта
        </Box>

        <Box fontSize="16px" lineHeight="24px" mb="8px">
          {offer.address} · {offer.totalSpace} м², на {offer.capacity} человек
        </Box>

        <img
          src={offer.images ? offer.images[0] : undefined}
          width="100%"
          height="262px"
          style={{ objectFit: 'cover', borderRadius: '4px' }}
        />

        <Box fontSize="16px" lineHeight="24px" mt="20px">
          {offer.description}
        </Box>

        {offer.services && (
          <Box display="flex" mt="12px">
            {offer.services.map((service) => (
              <Box key={service} fontSize="16px" lineHeight="24px" mr="22px">
                <TickIcon />
                <Box ml="6px" display="inline-block">
                  {service}
                </Box>
              </Box>
            ))}
          </Box>
        )}

        <hr style={{ border: '1px dashed #737A8E', marginTop: '32px' }} />

        <Box mt="14px" display="flex">
          {date.from && date.to && (
            <Box fontSize="16px" lineHeight="24px">
              {formatDateRange(date.from, date.to)}
            </Box>
          )}

          <Box fontSize="22px" lineHeight="28px" ml="auto">
            {offer.price} ₽/час
          </Box>
        </Box>

        <Box mt="16px" display="flex">
          <Box ml="auto" width="300px">
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={handleBook}
            >
              {isLoading ? (
                <CircularProgress size={24} color="secondary" />
              ) : (
                'Подтвердить и забронировать'
              )}
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  )
}

function formatDateRange(from: Date, to: Date) {
  return `${formatDate(from)}, ${formatTime(from)}-${formatTime(to)}`
}

function formatDate(date: Date) {
  return format(date, 'dd MMMM yyyy', { locale: ru })
}

function formatTime(date: Date) {
  return format(date, 'HH:mm')
}