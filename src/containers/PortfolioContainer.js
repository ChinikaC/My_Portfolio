import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MyProjects from "../components/MyProjects";
import Contact from "../components/Contact";



const PortfolioContainer = () => {
    

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
]);

return (
    <>
    <RouterProvider router={router} />
    </>
);
};

export default PortfolioContainer;
