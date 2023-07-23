import { lazy } from "react";
const Products = lazy(() => import("../Pages/Products"));

export default ProductRoutes = [{ path: "/products", element: <Products /> }];
