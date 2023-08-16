import { createBrowserRouter } from "react-router-dom";
import path from "./menus/path";
import MainLayout from "./Layout/MainLayout";
import LazyComponent from "./component/loader/LazyComponent";
import { lazy } from "react";

const Dashboard = LazyComponent(lazy(() => import("./pages/dashboard/Dashboard")));
const Orders = LazyComponent(lazy(() => import("./pages/Orders/Orders")));
const Baskets = LazyComponent(lazy(() => import("./pages/basket/Baskets")));
const Profile = LazyComponent(lazy(() => import("./pages/profile/Profile")));
const Password = LazyComponent(lazy(() => import("./pages/password/Password")));
const Populaires = LazyComponent(lazy(() => import("./pages/Product/Populars")));
const Payment = LazyComponent(lazy(() => import("./pages/payment/DoPayment")));
const NotFound = LazyComponent(lazy(() => import("./pages/error/NotFound")));

const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: path.dashboard,
            element: <Dashboard />,
        },
        {
            path: path.orders,
            element: <Orders />
        },
        {
            path: path.basket,
            element: <Baskets />
        },
        {
            path: path.popular,
            element: <Populaires />
        },
        {
            path: path.profile,
            element: <Profile />
        },
        {
            path: path.password,
            element: <Password />
        },
        {
            path: path.payment,
            element: <Payment />
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]
}],{
    basename:"/u"
})

export default router;