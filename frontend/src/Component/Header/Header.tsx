import {GitHub, Linkedin} from "react-feather";
import logo from "../../assets/logo.png";

import "./Header.scss";
import {Link} from "react-router";

export default function Header() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar__menu">
                    <a href="/">
                        <img src={logo} alt="logo"/>
                    </a>

                    <Link to={"/skills"} className="navbar__menu__links"> Compétences</Link>
                    <Link to={"/project"} className="navbar__menu__links">Projet</Link>
                    <Link to={"/contact"} className="navbar__menu__links">Contact</Link>
                </div>
                <div className="navbar__link">
                    <a href="https://github.com/AurelieMous/" target="_blank">
                        <GitHub />
                    </a>
                    <a href="https://www.linkedin.com/in/aur%C3%A9lie-moustardier-7393672b2/" target="_blank">
                        <Linkedin />
                    </a>
                </div>
            </nav>
        </div>
    )
}
