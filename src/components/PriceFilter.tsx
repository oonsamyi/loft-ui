import { Box, TextField } from '@material-ui/core'
import { ChangeEvent, useCallback } from 'react'
import { useMobile } from '../hooks/useMobile'
import { IPrice } from '../types'
import { Filter } from './Filter'

interface IProps {
  price: IPrice
  onChange(price: IPrice): void
}

export const PriceFilter = ({ price, onChange }: IProps) => {
  const isMobile = useMobile()

  const handlePriceFromChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value

      onChange({
        ...price,
        from: value ? Number(event.target.value) : undefined,
      })
    },
    [price, onChange]
  )

  const handlePriceToChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value

      onChange({ ...price, to: value ? Number(event.target.value) : undefined })
    },
    [price, onChange]
  )

  return (
    <Filter label="Цена">
      <Box width={isMobile ? '90px' : '120px'}>
        <TextField
          value={price.from || ''}
          label="От"
          size="small"
          variant="filled"
          type="number"
          inputProps={{ step: 500, min: 0 }}
          onChange={handlePriceFromChange}
        />
      </Box>
      <Box ml="16px" width={isMobile ? '90px' : '120px'}>
        <TextField
          value={price.to || ''}
          label="До"
          size="small"
          variant="filled"
          type="number"
          inputProps={{ step: 500, min: 0 }}
          onChange={handlePriceToChange}
        />
      </Box>
      <Box
        ml="12px"
        fontSize="16px"
        lineHeight="22px"
        display="flex"
        alignItems="center"
      >
        ₽/час
      </Box>
    </Filter>
  )
}
