import React from 'react';
import './songCard.css'; // Add a CSS file for styling

const SongCard = ({ title, artist, album, link }) => {
  return (
    <div className="song-card">
      <h4>{title}</h4>
      <p>{artist}</p>
      <p>{album}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="play-button">Play</a>
    </div>
  );
};

export default SongCard;
