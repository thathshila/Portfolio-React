import NavBar from '../components/NavBar.tsx'
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.tsx"
const LayoutPage = () => {
    return(
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default LayoutPage