import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
            },
            {
                path: '/detail/:id',
                element: <ServiceDetails></ServiceDetails>,
                // loader: () => fetch(`https://my-json-server.typicode.com/mahfuj113/fakedata/products/${id}`)
            }
        ]
    },
]);
export default router;