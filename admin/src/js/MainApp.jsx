import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import FormContextProvider from '../Context/FormContext';

import router from './router';


function MainApp() {  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <FormContextProvider>
        <RouterProvider router={router} />
      </FormContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MainApp;
