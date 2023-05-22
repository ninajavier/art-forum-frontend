import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function ArtPieceNewForm() {
  let navigate = useNavigate();

  const addArtPiece = (newArtPiece) => {
    axios
      .post(`${API}/art-pieces`, newArtPiece)
      .then(
        () => {
          navigate(`/art-pieces`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [artPiece, setArtPiece] = useState({
    title: "",
    artist: "",
    medium: "",
    year_created: 0,
    image_url: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setArtPiece({ ...artPiece, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setArtPiece({ ...artPiece, is_favorite: !artPiece.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addArtPiece(artPiece);
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
    </div>
  );
}

