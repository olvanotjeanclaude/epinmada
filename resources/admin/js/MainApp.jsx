import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

import router from './router';
import AuthProvider from '../Context/AuthProvider';
import LayoutProvider from '../Context/LayoutProvider';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function MainApp() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <LayoutProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </LayoutProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MainApp;
