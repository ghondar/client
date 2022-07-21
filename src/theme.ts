import { createTheme } from '@mui/material'
// import { referwellBlue, referwellGreen, referwellHunterGreen, info } from './colors'

// const { spacing } = createTheme()

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    }
  },
  palette: { background: { 'default': '#fff' } }
})

export default theme
