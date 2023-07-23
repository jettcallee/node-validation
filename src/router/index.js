// ** Router imports
import { lazy } from "react";
import { Route, useRoutes, Navigate } from "react-router-dom";
import AuthenticateLayout from "../layouts/AuthenticateLayout";

const Home = lazy(() => import("../Pages/Home"));
const User = lazy(() => import("../Pages/User"));
const Products = lazy(() => import("../Pages/Products"));
const Login = lazy(() => import("../Pages/Login"));
const Error = lazy(() => import("../error-page"));

function Router() {
  const isLogin = false;
  const routesArray = isLogin
    ? [
        { path: "/product", element: <Products /> },
        { path: "/home", element: <Home /> },
      ]
    : [{ path: "/login", element: <Login /> }];

  const getHomeRoute = () => {
    //const user = getUserData()
    if (isLogin) {
      return `/home`;
    } else {
      return `/login`;
    }
  };

  const routes = useRoutes([
    {
      path: "/",
      index: true,
      element: <Navigate replace to={getHomeRoute()} />,
    },
    ...routesArray,
    // {
    //   path: "/",
    //   element: <AuthenticateLayout />,
    //   children: [
    //     { path: "/home", element: <Home /> },
    //     { path: "/products", element: <Products /> },
    //   ],
    // },
    { path: "/login", element: <Login /> },
    { path: "*", element: <Error /> },
  ]);
  // <Outlet />;
  return routes;
}

export default Router;
