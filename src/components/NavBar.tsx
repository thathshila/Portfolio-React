import {Link} from "react-router-dom";
import '../styles/NavBar.css'
const NavBar = () => {
    const links: string[] = ["Home","About"]

    return(
        <div className="nav">
            {links.map((link,index) =>
               <Link key={index} to={link}>{link}</Link>
            )}
        </div>
    )
}

export default NavBar