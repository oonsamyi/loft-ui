import { differenceInHours } from 'date-fns'
import { IDate } from '../types'

export function getTotalPrice(price: number, date: IDate): number {
  const hours = differenceInHours(date.to, date.from) || 1

  return hours * price
}
