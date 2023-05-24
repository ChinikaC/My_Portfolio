import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/MyProjects",
                element: <MyProjects />,
            },
            {
                path: "/Contact",
                element: <Contact />,
            }
        ]
    }
])
export default PortfolioContainer;
