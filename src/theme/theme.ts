import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1e30e6',
    },
    secondary: {
      main: '#f50057',
    },
  },
})
