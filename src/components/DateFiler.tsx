import { Box } from '@material-ui/core'
import { DatePicker, TimePicker } from '@material-ui/pickers'
import { set } from 'date-fns'
import { useCallback } from 'react'
import { useMobile } from '../hooks/useMobile'
import { IDate } from '../types'
import { Filter } from './Filter'

interface IProps {
  date: IDate
  onChange(date: IDate): void
}

export const DateFiler = ({ date, onChange }: IProps) => {
  const isMobile = useMobile()

  const handleDateChange = useCallback(
    (newDate: Date | null) => {
      if (!newDate) {
        return
      }

      const from = set(newDate, {
        hours: date.from.getHours(),
        minutes: date.from.getMinutes(),
      })

      const to = set(newDate, {
        hours: date.to.getHours(),
        minutes: date.to.getMinutes(),
      })

      onChange({ from, to })
    },
    [date, onChange]
  )

  const handleTimeFromChange = useCallback(
    (from: Date | null) => {
      if (!from) {
        return
      }

      onChange({ ...date, from })
    },
    [date, onChange]
  )

  const handleTimeToChange = useCallback(
    (to: Date | null) => {
      if (!to) {
        return
      }

      onChange({ ...date, to })
    },
    [date, onChange]
  )

  return (
    <Filter label="Когда">
      <Box width={isMobile ? '90px' : '120px'}>
        <DatePicker
          label="День"
          inputVariant="filled"
          value={date.from}
          size="small"
          format="dd MMMM"
          invalidDateMessage=""
          onChange={handleDateChange}
        />
      </Box>
      <Box ml="16px" width="80px">
        <TimePicker
          label="C"
          inputVariant="filled"
          value={date.from}
          size="small"
          ampm={false}
          format="HH:mm"
          invalidDateMessage=""
          minutesStep={5}
          onChange={handleTimeFromChange}
        />
      </Box>
      <Box ml="16px" width="80px">
        <TimePicker
          label="По"
          inputVariant="filled"
          value={date.to}
          size="small"
          ampm={false}
          format="HH:mm"
          invalidDateMessage=""
          minutesStep={5}
          onChange={handleTimeToChange}
        />
      </Box>
    </Filter>
  )
}
