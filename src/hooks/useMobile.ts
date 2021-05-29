import { Theme } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export function useMobile() {
  return useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'))
}
