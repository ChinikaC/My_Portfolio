import { Outlet } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";

const Home = () => {

    return (
        <>
        <header>
            <Header/>
        </header>
        <AboutMe>
            <AboutMe/>
        </AboutMe>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
        </>
    )

}

export default Home;