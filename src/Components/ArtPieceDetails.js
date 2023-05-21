import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function ArtPieceDetails() {
  const [artPiece, setArtPiece] = useState([]);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/art-pieces/${id}`)
      .then((response) => {
        console.log(response.data);
        setArtPiece(response.data);
      })
      .catch((e) => {
        console.warn("catch", e);
      });
  }, [id]);

  const deleteArtPiece = () => {
    axios
      .delete(`${API}/art-pieces/${id}`)
      .then((response) => {
        navigate(`/art-pieces`);
      },
      (error) => console.error(error))
      .catch((c) => console.warn(c))
  }

const handleDelete = () => {
  deleteArtPiece();
}

  return (
    <article className="art-piece-details">
      <h3>
        {artPiece.is_favorite ? <span>⭐️</span> : null} {artPiece.title}
      </h3>
      <h4>{artPiece.artist}</h4>
      <h5>{artPiece.medium}</h5>
      <p>{artPiece.year_created}</p>

      <div>
        <div>
          {" "}
          <Link to={`/art-pieces`}>
            <button>Back</button>
          </Link>
        </div>

        <div>
          <Link to={`/art-pieces/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>

        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
<div>

</div>

    </article>
  );
}


