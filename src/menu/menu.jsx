import { Link } from "react-router-dom";
import "./menu.css";
function Menu() {
  return (
    <div>
      <nav className="menu">
        <Link className="link" to="/">
          HOME
        </Link>
        <Link className="link" to="/Barre">
          Barre wiki
        </Link>
      </nav>
    </div>
  );
}

export default Menu;
