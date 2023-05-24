import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import art from "../Assets/art.png";

export default function NavBar() {
  return (
    <nav>
      <button>
        <Link to="/">
          <img src={art} alt="art" className="logo" />
        </Link>
      </button>
      <div className="art-portal">
        <a href="/art-pieces">ArtPortal</a>
      </div>
      <button className="nav-button">
        <Link to="/art-pieces">Art Pieces</Link>
      </button>
      <button className="nav-button">
        <Link to="/art-pieces/new">New Art Piece</Link>
      </button>
    </nav>
  );
}
