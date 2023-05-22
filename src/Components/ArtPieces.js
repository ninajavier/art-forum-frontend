import axios from "axios";
import { useState, useEffect } from "react";
import ArtPiece from "./ArtPiece";

const API = process.env.REACT_APP_API_URL;

export default function ArtPieces() {
  const [ArtPieces, setArtPieces] = useState([]);
console.log(API)
  useEffect(() => {
    axios.get(`${API}/art-pieces`)
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
            {ArtPieces.map((artPiece) => {
              return <ArtPiece key={artPiece.id} artPiece={artPiece} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

