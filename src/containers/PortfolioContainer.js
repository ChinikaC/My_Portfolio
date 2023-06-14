import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MyProjects from "../components/MyProjects";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";
import TechnologyStack from "../components/TechnologyStack";



const PortfolioContainer = () => {
    

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/AboutMe",
                element: <AboutMe />,
            },
            {
                path: "/TechnologyStack",
                element: <TechnologyStack />,
            },
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
