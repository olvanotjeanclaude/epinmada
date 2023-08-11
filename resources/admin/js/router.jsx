import { Outlet, createBrowserRouter } from 'react-router-dom';
import {
    CustomerForm,
    CustomerShow,
    Customers,
    Dashboard,
    InvoiceList,
    InvoiceShow,
    InvoiceForm,
    OrderShow,
    Orders,
    PersonalInfo,
    ProductForm, ProductList, ProductShow,
    ProfileForm,
    UserForm, UserList, UserShow
} from '../pages';

import Admin from './Admin';
import Login from '../component/Auth/Login';

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
        path: 'factures',
        element: <Outlet />,
        children: [
            { index: true, element: <InvoiceList /> },
            { path: 'nouveau', element: <InvoiceForm /> },
            { path: ':id', element: <InvoiceShow /> },
            { path: ':id/edit', element: <InvoiceForm /> },
        ]
    },
    {
        path: 'commandes',
        element: <Outlet />,
        children: [
            { index: true, element: <Orders /> },
            { path: ':id/edit', element: <OrderShow /> },
        ]
    },
    {
        path: 'clients',
        element: <Outlet />,
        children: [
            { index: true, element: <Customers /> },
            { path: 'nouveau', element: <CustomerForm /> },
            { path: ':id', element: <CustomerShow /> },
            { path: ':id/edit', element: <CustomerForm /> },
        ]
    },
    {
        path: 'profile',
        element: <Outlet />,
        children: [
            { index: true, element: <PersonalInfo /> },
            { path: 'edit', element: <ProfileForm /> },
        ]
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
    { path: 'login', element: <Login /> },
]

const router = createBrowserRouter(routes, {
    basename: "/admin",
});

export default router;
