import React from 'react'
import { render } from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './sass/Index.scss'
import { createTheme, ThemeProvider } from '@mui/material'

/* MUI Theme */
const theme = createTheme({
    palette: {
        primary: {
            main: '#536dfe',
        },
        secondary: {
            main: '#ff5252',
        },
    },
})

render(
    <React.StrictMode>
        <ThemeProvider theme={ theme }>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
// reportWebVitals(console.log)
