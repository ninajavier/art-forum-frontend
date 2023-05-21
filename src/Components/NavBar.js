import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/art-pieces">Art Pieces</Link>
      </h1>
      <button>
        <Link to="/art-pieces/new">New Art Piece</Link>
      </button>
    </nav>
  );
}
