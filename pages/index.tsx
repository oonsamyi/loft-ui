import { Box, Button, CircularProgress } from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import { DateFiler } from '../src/components/DateFiler'
import { DistrictFilter } from '../src/components/DistrictFilter'
import { Filter } from '../src/components/Filter'
import { PriceFilter } from '../src/components/PriceFilter'
import { SquareFilter } from '../src/components/SquareFilter'
import { IDate, IPrice, ISquare } from '../src/types'

export default function MainPage() {
  const [districts, setDistricts] = useState<string[]>([])
  const [date, setDate] = useState<IDate>({ from: null, to: null })
  const [squares, setSquares] = useState<ISquare[]>([])
  const [price, setPrice] = useState<IPrice>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSearchClick = useCallback(() => {
    setIsLoading(true)
  }, [setIsLoading])

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
