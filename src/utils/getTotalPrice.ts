import { differenceInHours } from 'date-fns'
import { IDate } from '../types'

export function getTotalPrice(price: number, date: IDate): number {
  const hours = Math.abs(differenceInHours(date.to, date.from)) || 1
  const minutes = Math.abs(date.to.getMinutes() - date.from.getMinutes())
  const additionalHour = minutes ? 1 : 0

  return (hours + additionalHour) * price
}
