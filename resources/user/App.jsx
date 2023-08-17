import React from 'react'
import router from './router'
import theme from './theme';
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
