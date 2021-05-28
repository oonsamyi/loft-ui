import { Api } from '../../swagger/Api'
import { HOST } from './config'

export const httpClient = new Api({
  baseUrl: HOST,
})
