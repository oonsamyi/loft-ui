import { Box, Chip } from '@material-ui/core'
import { useCallback, useState } from 'react'
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
      {ALL_DISTRICTS.map((district) => {
        const isSelected = districts.includes(district)

        return (
          <Box key={district} component="span" mr="4px">
            <Chip
              label={district}
              color={isSelected ? 'primary' : 'default'}
              onClick={handleClickDistrict(district)}
            />
          </Box>
        )
      })}
    </Filter>
  )
}
