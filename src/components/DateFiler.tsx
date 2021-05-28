import { Box } from '@material-ui/core'
import { KeyboardDateTimePicker } from '@material-ui/pickers'
import { useCallback } from 'react'
import { IDate } from '../types'
import { Filter } from './Filter'

interface IProps {
  date: IDate
  onChange(date: IDate): void
}

export const DateFiler = ({ date, onChange }: IProps) => {
  const handleDateFromChange = useCallback(
    (from: Date | null) => {
      onChange({ ...date, from })
    },
    [date, onChange]
  )

  const handleDateToChange = useCallback(
    (to: Date | null) => {
      onChange({ ...date, to })
    },
    [date, onChange]
  )

  return (
    <Filter label="Когда">
      <Box>
        <KeyboardDateTimePicker
          label="С"
          inputVariant="filled"
          value={date.from}
          size="small"
          ampm={false}
          format="dd/MM/yyyy HH:mm"
          invalidDateMessage=""
          onChange={handleDateFromChange}
        />
      </Box>
      <Box ml="16px">
        <KeyboardDateTimePicker
          label="По"
          inputVariant="filled"
          value={date.to}
          size="small"
          ampm={false}
          format="dd/MM/yyyy HH:mm"
          invalidDateMessage=""
          onChange={handleDateToChange}
        />
      </Box>
    </Filter>
  )
}
