import { Box, Button } from '@material-ui/core'
import { IRealtyObjectViewModel } from '../../swagger/Api'

interface IProps {
  offer: IRealtyObjectViewModel
}

export const Offer = ({ offer }: IProps) => {
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

      {offer.images && (
        <img
          src={offer.images[0]}
          width="100%"
          height="310px"
          style={{ objectFit: 'cover' }}
        />
      )}
      <Box p="20px" display="flex" justifyContent="space-between">
        <Box display="flex" flexDirection="column">
          <Box fontSize="22px" fontWeight="500" lineHeight="28px" mb="8px">
            от {offer.price} ₽ / час
          </Box>
          <Box fontSize="16px" lineHeight="22px">
            {offer.totalSpace} м², на {offer.capacity} человек
          </Box>
        </Box>
        <Button color="primary">ЗАБРОНИРОВАТЬ</Button>
      </Box>
    </Box>
  )
}
