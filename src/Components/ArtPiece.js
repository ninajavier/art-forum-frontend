import React from "react";

export default function ArtPiece({ artPiece }) {
  return (
    <tr className="art-piece">
      <td>
        {artPiece.is_favorite ? <span>⭐️</span> : <span>&nbsp; &nbsp; &nbsp;</span>}
      </td>
      <td data-label="Title">
        <a href={`/art-pieces/${artPiece.id}`}>{artPiece.title}</a>
      </td>
      <td data-label="Artist">
        <p>{artPiece.artist}</p>
      </td>
      <td data-label="Medium">
        <p>{artPiece.medium}</p>
      </td>
      <td data-label="Year">
        <p>{artPiece.year_created}</p>
      </td>
    </tr>
  );
}
