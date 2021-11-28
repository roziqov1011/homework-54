import "./Header.scss"
import { Link } from "react-router-dom";

// images
import Logo from "../../Lib/Logo";
import Hamburger from "../../Lib/Hampurger";
import Combined1 from "../../assets/img/Combined1.svg"
import Combined2 from "../../assets/img/Combined2.svg"
import Combined3 from "../../assets/img/Combined3.svg"
import Avatar from "../../assets/img/avatar.png"


function Header() {
return(
<header>
    <div className="logo">
        <button><Hamburger /></button>
            <Link to="/">
            <Logo />
            </Link>
    </div>
    <div>
        <input type="search" placeholder="Search" required />
        <ul>
            <li><img src={Combined1} alt="" /></li>
            <li><img src={Combined2} alt="" /></li>
            <li><img src={Combined3} alt="" /></li>
            <li><img src={Avatar} alt="" /></li>
        </ul>
    </div>
</header>
)
}
export default Header;