import { Outlet, createBrowserRouter } from 'react-router-dom';
import {
    Dashboard,
    ProductForm, ProductList, ProductShow,
    UserForm, UserList, UserShow
} from '../pages';

import Admin from './Admin';

const routeList = [
    { path: 'dashboard', element: <Dashboard /> },
    {
        path: 'utilisateurs',
        element: <Outlet />,
        children: [
            { index: true, element: <UserList /> },
            { path: 'nouveau', element: <UserForm /> },
            { path: ':id', element: <UserShow /> },
            { path: ':id/edit', element: <UserForm /> },
        ],
    },
    {
        path: 'produits',
        element: <Outlet />,
        children: [
            { index: true, element: <ProductList /> },
            { path: 'nouveau', element: <ProductForm /> },
            { path: ':id', element: <ProductShow /> },
            { path: ':id/edit', element: <ProductForm /> },
        ]
    },
    {
        path: 'commandes',
        element: <h1>Commandes</h1>
    },
];

const routes = [
    {
        path: '/',
        element: <Admin />,
        children: [
            ...routeList,
            { path: '*', element: <h1>DATA NOT FOUND</h1> }
        ],
    },
]

const router = createBrowserRouter(routes);

export default router;