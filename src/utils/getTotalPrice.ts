import { differenceInHours } from 'date-fns'
import { IRealtyObjectViewModel } from '../../swagger/Api'
import { IDate } from '../types'

interface IParams {
  offer: IRealtyObjectViewModel
  date: IDate
  services: number[]
}

export function getTotalPrice(params: IParams): number {
  const { offer, date, services } = params

  const hours = Math.abs(differenceInHours(date.to, date.from)) || 1
  const minutes = Math.abs(date.to.getMinutes() - date.from.getMinutes())
  const additionalHour = minutes ? 1 : 0
  const price = offer.price || 0
  const paidServices = offer.paidServices || []

  const servicesCost = paidServices
    .filter((paidService) => services.includes(paidService.id as number))
    .reduce((acc, paidService) => acc + (paidService.price || 0), 0)

  return (hours + additionalHour) * price + servicesCost
}
