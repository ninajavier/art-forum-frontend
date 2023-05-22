export default function ArtPiece({ artPiece }) {
  console.log(ArtPiece)
  return (
    <tr className="art-piece">
      <td>
        {artPiece.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={`/art-pieces/${artPiece.id}`}>{artPiece.title}</a>
      </td>
      <td>
        <p>{artPiece.artist}</p>
      </td>
      <td>
        <p>{artPiece.medium}</p>
      </td>
      <td>
        <p>{artPiece.year_created}</p>
      </td>
    </tr>
  );
}


