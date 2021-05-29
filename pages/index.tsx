import { Box, Button, CircularProgress, Link, Theme } from '@material-ui/core'
import { add, set } from 'date-fns'
import React, { useCallback, useState } from 'react'
import NextLink from 'next/link'
import { httpClient } from '../src/api'
import { DateFiler } from '../src/components/DateFiler'
import { DistrictFilter } from '../src/components/DistrictFilter'
import { Filter } from '../src/components/Filter'
import { Logo } from '../src/components/Logo'
import { Offer } from '../src/components/Offer'
import { PriceFilter } from '../src/components/PriceFilter'
import { SquareFilter } from '../src/components/SquareFilter'
import { useMobile } from '../src/hooks/useMobile'
import { IDate, IPrice, ISquare } from '../src/types'
import { IRealtyObjectViewModel } from '../swagger/Api'

export default function MainPage() {
  const from = set(new Date(), { minutes: 0 })
  const to = add(from, { hours: 2 })

  const [districts, setDistricts] = useState<string[]>([])
  const [date, setDate] = useState<IDate>({ from, to })
  const [squares, setSquares] = useState<ISquare[]>([])
  const [price, setPrice] = useState<IPrice>({ from: 500, to: 10000 })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [offers, setOffers] = useState<IRealtyObjectViewModel[]>([])
  const [services, setServices] = useState<number[]>([])

  const isMobile = useMobile()

  const handleSearchClick = useCallback(async () => {
    setIsLoading(true)

    const parsedDate = {
      from: date.from?.toISOString(),
      to: date.to?.toISOString(),
    }

    const response = await httpClient.api.objectFindCreate({
      square: squares.length ? squares : null,
      price,
      date: parsedDate,
      regions: districts.length ? districts : null,
    })

    setIsLoading(false)
    setOffers(response.data)
  }, [squares, price, date, districts, services, setIsLoading, setOffers])

  return (
    <>
      <Box
        mt={isMobile ? '10px' : '28px'}
        display="flex"
        justifyContent="center"
      >
        <NextLink href="/" passHref>
          <Link color="secondary">
            <Logo />
          </Link>
        </NextLink>
      </Box>
      <Box
        mt={isMobile ? '50px' : '100px'}
        display="flex"
        flexDirection="column"
        alignItems="center"
        px="20px"
      >
        <Box>
          <DistrictFilter districts={districts} onChange={setDistricts} />
          <DateFiler date={date} onChange={setDate} />
          <SquareFilter squares={squares} onChange={setSquares} />
          <PriceFilter price={price} onChange={setPrice} />

          <Filter label="">
            <Box width={isMobile ? '100%' : '440px'}>
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

      {!!offers.length && (
        <Box
          display="grid"
          gridTemplateColumns={
            isMobile ? '1fr' : 'minmax(auto, 690px) minmax(auto, 690px)'
          }
          gridTemplateRows="auto"
          gridGap="18px 12px"
          justifyContent="center"
          mx="20px"
          mb="20px"
        >
          {offers.map((offer) => (
            <Box key={offer.id} position="relative">
              {isLoading && (
                <Box
                  position="absolute"
                  width="100%"
                  height="100%"
                  bgcolor="rgba(242, 242, 242, 0.4)"
                  zIndex={1}
                />
              )}

              <Offer
                offer={offer}
                date={date}
                services={services}
                onChangeServices={setServices}
              />
            </Box>
          ))}
        </Box>
      )}
    </>
  )
}
