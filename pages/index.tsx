import { Box, Button, CircularProgress } from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import { httpClient } from '../src/api'
import { DateFiler } from '../src/components/DateFiler'
import { DistrictFilter } from '../src/components/DistrictFilter'
import { Filter } from '../src/components/Filter'
import { PriceFilter } from '../src/components/PriceFilter'
import { SquareFilter } from '../src/components/SquareFilter'
import { IDate, IPrice, ISquare } from '../src/types'
import { IRealtyObjectViewModel } from '../swagger/Api'

export default function MainPage() {
  const [districts, setDistricts] = useState<string[]>([])
  const [date, setDate] = useState<IDate>({ from: null, to: null })
  const [squares, setSquares] = useState<ISquare[]>([])
  const [price, setPrice] = useState<IPrice>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [offers, setOffers] = useState<IRealtyObjectViewModel[]>([])

  const handleSearchClick = useCallback(async () => {
    setIsLoading(true)

    const parsedDate = {
      from: date.from?.toISOString(),
      to: date.to?.toISOString(),
    }

    const response = await httpClient.api.objectFindCreate({
      square: squares[0],
      price,
      date: parsedDate,
      region: districts[0],
    })

    setIsLoading(false)

    setOffers(response.data)
  }, [squares, price, date, districts, setIsLoading, setOffers])

  return (
    <Box mt="100px" display="flex" justifyContent="center">
      <Box>
        <DistrictFilter districts={districts} onChange={setDistricts} />
        <DateFiler date={date} onChange={setDate} />
        <SquareFilter squares={squares} onChange={setSquares} />
        <PriceFilter price={price} onChange={setPrice} />

        <Filter label="">
          <Box width="440px">
            <Button
              color="primary"
              variant="contained"
              size="large"
              fullWidth
              onClick={handleSearchClick}
            >
              {isLoading ? (
                <CircularProgress size={26} color="secondary" />
              ) : (
                'Найти лофты'
              )}
            </Button>
          </Box>
        </Filter>
      </Box>
    </Box>
  )
}
