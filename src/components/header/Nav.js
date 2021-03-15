import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    let location = useLocation();
    return (
        <ul className="line">
            <Link className={"option " + (location.pathname === "/foods" ? "bold" : "")} to={"/foods"}>FOODS</Link>
            <Link className={"option " + (location.pathname === "/people" ? "bold" : "")} to={"/people"}>PEOPLE</Link>
            <Link className={"option " + (location.pathname === "/places" ? "bold" : "")} to={"/places"}>PLACES</Link>
        </ul>
    );
}

export default Nav;