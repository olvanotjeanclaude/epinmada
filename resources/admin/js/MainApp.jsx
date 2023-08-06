import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

import router from './router';
import AuthProvider from '../Context/AuthProvider';
import LayoutProvider from '../Context/LayoutProvider';


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
