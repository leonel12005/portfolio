import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav>

      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/equipe">Équipe</Link></li>
        <li><Link to="/projets">Projets</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        <li>
          <button onClick={toggleTheme}>
            Mode sombre
          </button>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;