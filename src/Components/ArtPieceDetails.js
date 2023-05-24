import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../Styles/ArtPieceDetails.css";
import edit from "../Assets/edit.gif";
import deleteIcon from "../Assets/delete.png";
import back from "../Assets/back.png";
const API = process.env.REACT_APP_API_URL;

export default function ArtPieceDetails() {
  const [artPiece, setArtPiece] = useState([]);
  const { id } = useParams();
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

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

  const handleDeleteConfirmation = () => {
    setShowModal(true);
  };

  const deleteArtPiece = () => {
    axios
      .delete(`${API}/art-pieces/${id}`)
      .then(
        (response) => {
          navigate(`/art-pieces`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn(c));
  };

  const handleDelete = () => {
    if (showModal) {
      deleteArtPiece();
    } else {
      handleDeleteConfirmation();
    }
  };

  return (
    <article className="art-piece-details">
      <div className="left-column">
        <img
          src={artPiece.image_url}
          alt="Not Available"
          className="image-url"
        />
      </div>
      <div className="right-column-top">
        <h3>
          {artPiece.is_favorite ? <span>⭐️</span> : null} {artPiece.title}
        </h3>
        <h4>Artist - {artPiece.artist}</h4>
        <h5>Medium - {artPiece.medium}</h5>
        <p>Year Created - {artPiece.year_created}</p>
      </div>
      <div className="ight-column-bottom">
        {" "}
        <Link to={`/art-pieces`}>
          <button>
            <img src={back} alt="Back" />
          </button>
        </Link>
        <Link to={`/art-pieces/${id}/edit`}>
          <button>
            <img src={edit} alt="Edit" />
          </button>
        </Link>
        <button onClick={handleDelete}>
          <img src={deleteIcon} alt="Delete" />
        </button>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <p>Are you sure you want to delete this art piece?</p>
              <div>
                <button onClick={deleteArtPiece}>Yes</button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
