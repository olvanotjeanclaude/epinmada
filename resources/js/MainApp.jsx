import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Admin from './Admin';
import UserList from '../component/user/UserList';
import { QueryClient, QueryClientProvider } from 'react-query';

function MainApp() {
  const queryClient = new QueryClient()

  return (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
      <Routes>
          <Route path='/admin' element={<Admin />} >
            <Route path='dashboard' element={<h1>Dashboard</h1>} />
            <Route path='utilisateurs' element={<UserList />}>

            </Route>
            <Route path='ventes' element={<h1>Ventes</h1>} />
            <Route path='*' element={<h1>Not Found</h1>} />
          </Route>
      </Routes>
        </QueryClientProvider>
    </BrowserRouter>
  );
}

export default MainApp;
