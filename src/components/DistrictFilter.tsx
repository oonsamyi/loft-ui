import { Box, Chip } from '@material-ui/core'
import { useCallback, useState } from 'react'
import { useMobile } from '../hooks/useMobile'
import { Filter } from './Filter'

interface IProps {
  districts: string[]
  onChange(districts: string[]): void
}

const ALL_DISTRICTS = [
  'ЦАО',
  'САО',
  'СВАО',
  'ВАО',
  'ЮВАО',
  'ЮАО',
  'ЮЗАО',
  'ЗАО',
  'СЗАО',
]

export const DistrictFilter = ({ districts, onChange }: IProps) => {
  const isMobile = useMobile()

  const addDistrict = useCallback(
    (district) => {
      const newDistricts = [...districts, district]

      onChange(newDistricts)
    },
    [districts, onChange]
  )

  const removeDistrict = useCallback(
    (district) => {
      const newDistricts = districts.filter(
        (selectedDistrict) => selectedDistrict !== district
      )

      onChange(newDistricts)
    },
    [districts, onChange]
  )

  const handleClickDistrict = (district: string) => () => {
    if (districts.includes(district)) removeDistrict(district)
    else addDistrict(district)
  }

  return (
    <Filter label="Где">
      <Box display="flex" flexWrap={isMobile ? 'wrap' : undefined}>
        {ALL_DISTRICTS.map((district) => {
          const isSelected = districts.includes(district)

          return (
            <Box key={district} mr="4px" mt={isMobile ? '4px' : undefined}>
              <Chip
                label={district}
                color={isSelected ? 'primary' : 'default'}
                onClick={handleClickDistrict(district)}
              />
            </Box>
          )
        })}
      </Box>
    </Filter>
  )
}
