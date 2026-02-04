import "../styles/header.css"
import { Link } from "react-router-dom";


function Header({children}) {

    return (
        <header className="header">
            <ul className="  max-w-6xl flex flex-wrap md:flex-col justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-10 py-3 rounded-xl shadow-lg">
               {children}
              <li><Link to="/info">Info</Link></li>
              <li><Link to="/projetos">Projetos</Link></li>
            </ul>
        </header>
    )

}

export default Header;