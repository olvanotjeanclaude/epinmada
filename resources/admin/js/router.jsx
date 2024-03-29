import { Outlet, createBrowserRouter } from 'react-router-dom';
import {
    CustomerForm,
    CustomerShow,
    Customers,
    Dashboard,
    OrderShow,
    Orders,
    PersonalInfo,
    ProductForm, ProductList, ProductShow,
    ProfileForm,
    UserForm, UserList, UserShow, Sales, SaleForm, SaleShow, Contact, Contacts
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
        path: 'ventes',
        element: <Outlet />,
        children: [
            { index: true, element: <Sales /> },
            { path: 'nouveau', element: <SaleForm /> },
            { path: ':id', element: <SaleShow /> },
            { path: ':id/edit', element: <SaleForm /> },
        ]
    },
    {
        path: 'contacts',
        element: <Outlet />,
        children: [
            { index: true, element: <Contacts /> },
            { path: ':id', element: <Contact /> },
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
    }
]

const router = createBrowserRouter(routes, {
    basename: "/admin",
});

export default router;
