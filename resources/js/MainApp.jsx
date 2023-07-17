import React from 'react';
import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom';
import Admin from './Admin';
import UserList from '../component/user/UserList';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import UserForm from '../component/user/UserForm';
import FormContextProvider from '../Context/FormContext';
import UserShow from '../component/user/UserShow';

function MainApp() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2
      }
    }
  })

  return (
    <BrowserRouter basename='/admin'>
      <QueryClientProvider client={queryClient}>
        <FormContextProvider>
          <Routes >
            <Route element={<Admin />} >
              <Route path='dashboard' element={<h1>Dashboard</h1>} />
              <Route path='utilisateurs' element={<Outlet />} >
                <Route index element={<UserList />} />
                <Route path='nouveau' element={<UserForm />} />
                <Route path=':id' element={<UserShow />} />
                <Route path=':id/edit' element={<UserForm />} />
              </Route>
              <Route path='ventes' element={<h1>Ventes</h1>} />
              <Route path='*' element={<h1>Not Found</h1>} />
            </Route>
          </Routes>
        </FormContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default MainApp;
