import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import FormContextProvider from '../Context/FormContext';

import router from './router';
import AuthProvider from '../Context/AuthProvider';


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
      <AuthProvider>
        <FormContextProvider>
          <RouterProvider router={router} />
        </FormContextProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MainApp;
