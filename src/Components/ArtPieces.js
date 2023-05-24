import axios from "axios";
import { useState, useEffect } from "react";
import ArtPiece from "./ArtPiece";
import "../Styles/ArtPiece.css";

const API = process.env.REACT_APP_API_URL;

export default function ArtPieces() {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/art-pieces`)
      .then((response) => setArtPieces(response.data))
      .catch((e) => console.warn("catch", e));
  }, []);

  return (
    <div className="art-pieces">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Artist</th>
              <th>Medium</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {artPieces.map((artPiece) => (
              <ArtPiece key={artPiece.id} artPiece={artPiece} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
