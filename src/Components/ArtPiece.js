import { Link } from "react-router-dom";

export default function ArtPiece({ ArtPiece }) {
  
  return (
    <tr className="art-piece">
      <td>
        {ArtPiece.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={`/art-pieces/${ArtPiece.id}`}>{ArtPiece.title}</a>
      </td>
      <td>
        <p>{ArtPiece.artist}</p>
      </td>
      <td>
        <p>{ArtPiece.medium}</p>
      </td>
      <td>
        <p>{ArtPiece.year_created}</p>
      </td>
    </tr>
  );
}


