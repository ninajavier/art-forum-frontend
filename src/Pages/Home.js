import React from 'react';
import photo from '../Assets/milad-fakurian-PGdW_bHDbpI-unsplash.jpg';

export default function Home() {
  const fullscreenImageStyle = {
    backgroundImage: `url(${photo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const headingStyle = {
    color: '#272932',
    padding: '10px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '48px',
    fontFamily: "'Rubik', sans-serif",
  };

  return (
    <div style={fullscreenImageStyle}>
      <h2 style={headingStyle}>Welcome to ArtPortal!</h2>
    </div>
  );
}
