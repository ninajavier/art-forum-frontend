import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../Styles/Forms.css"

const API = process.env.REACT_APP_API_URL;

export default function ArtPieceEditForm() {
    let { id } = useParams();
  let navigate = useNavigate();

  const [artPiece, setArtPiece] = useState({
    title: "",
    artist: "",
    medium: "",
    year_created: 0,
    image_url: "",
    is_favorite: false,
  });

  const updateArtPiece = (updatedArtPiece) => {
    axios
      .put(`${API}/art-pieces/${id}`, updatedArtPiece)
      .then(
        () => {
          navigate(`/art-pieces/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setArtPiece({ ...artPiece, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setArtPiece({ ...artPiece, is_favorite: !artPiece.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/art-pieces/${id}`).then(
      (response) => setArtPiece(response.data),
      (error) => navigate(`/not-found`, error)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateArtPiece(artPiece, id);
  };
    

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={artPiece.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Title of Art Piece"
          required
        />
        <label htmlFor="artist">Artist</label>
        <input
          id="artist"
          value={artPiece.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Artist"
          required
        />
        <label htmlFor="medium">Medium</label>
        <input
          id="medium"
          value={artPiece.medium}
          type="text"
          onChange={handleTextChange}
          placeholder="Art Piece Medium"
          required
        />
        <label htmlFor="year_created">Year Created</label>
        <input
          id="year_created"
          type="number"
          value={artPiece.year_created}
          placeholder="Year of Creation"
          onChange={handleTextChange}
        />
        <label htmlFor="image_url">Link to Art</label>
        <input
          id="image_url"
          value={artPiece.image_url}
          type="text"
          onChange={handleTextChange}
          placeholder="Image URL"
          required
        />
        <label htmlFor="is_favorite">Favorite</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={artPiece.is_favorite}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/art-pieces/${id}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}
