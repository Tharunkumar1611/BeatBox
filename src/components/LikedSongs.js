// src/components/LikedSongs.js
import React from 'react';
import './likedsongs.css';
import { FaPlay, FaMusic } from 'react-icons/fa';

const LikedSongs = () => {
  const songs = [
    {
      title: "Innum Konjam",
      artist: "Maryan",
      link: "https://www.youtube.com/watch?v=I8UrKhurkuk",
    },
    {
      title: "Vaathi Coming",
      artist: "Master",
      link: "https://www.youtube.com/watch?v=fRD_3vJagxk",
    },
    {
      title: "Rowdy Baby",
      artist: "Maari 2",
      link: "https://www.youtube.com/watch?v=x6Q7c9RyMzk",
    },
    {
      title: "Enjoy Enjaami",
      artist: "Dhee, Arivu",
      link: "https://www.youtube.com/watch?v=eYq7WapuDLU",
    },
   
  ];

  return (
    <div className="liked-container">
      <h2>Liked Songs</h2>
      <ul className="liked-list">
        {songs.map((song, index) => (
          <li key={index} className="liked-item">
            <a href={song.link} target="_blank" rel="noopener noreferrer" className="song-link">
              <div className="song-info">
                <FaMusic className="icon" /> <span className="song-title">{song.title}</span>
                <span className="song-artist"> - {song.artist}</span>
              </div>
              <FaPlay className="play-icon" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedSongs;
