import React from 'react'
import router from './router';
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from 'react-query';
import BasketContextProvider from './context/BasketContextProvider';
import theme from './theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <BasketContextProvider>
          <RouterProvider router={router} />
        </BasketContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
