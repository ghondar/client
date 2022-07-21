import ThemeProvider from '@mui/material/styles/ThemeProvider'
import ButtonMaterial from '@mui/material/Button'
import theme from './theme'

function Button() {
  return (
    <ThemeProvider theme={theme}>
        <ButtonMaterial>
          Hola mundo prueba
        </ButtonMaterial>
    </ThemeProvider>
  )
}

export default Button