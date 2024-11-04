// src/components/Library.js
import React, { useState } from 'react';
import './library.css';
import { FaHeart, FaShareAlt, FaPlay } from 'react-icons/fa'; // Importing icons for play, heart, and share

// Sample Data for Albums, Artists, and Songs
const albumsData = [
  {
    name: 'Master',
    cover: 'https://pbs.twimg.com/media/Esvs0blUUAALk6v.jpg:large',
    artist: 'Anirudh Ravichander',
    songs: [
      { title: 'Vaathi Coming', youtube: 'https://www.youtube.com/watch?v=fRD_3vJagxk' },
      { title: 'Kutty Story', youtube: 'https://www.youtube.com/watch?v=nCNqPgXDYhY' },
    ],
  },
  {
    name: 'Mersal',
    cover: 'https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1045/1371045-i-4b0c53d5d6cb',
    artist: 'A.R. Rahman',
    songs: [
      { title: 'Aalaporan Thamizhan', youtube: 'https://www.youtube.com/watch?v=xsbLtHql4g8' },
      { title: 'Neethane', youtube: 'https://www.youtube.com/watch?v=fWajtP80g54' },
    ],
  },
];

const artistsData = [
  {
    name: 'Anirudh Ravichander',
    cover: 'https://etvbharatimages.akamaized.net/etvbharat/prod-images/10-04-2024/1200-675-21191844-1099-21191844-1712748468822.jpg',
    songs: [
      { title: 'Vaathi Coming', youtube: 'https://www.youtube.com/watch?v=fRD_3vJagxk' },
      { title: 'Kutty Story', youtube: 'https://www.youtube.com/watch?v=nCNqPgXDYhY' },
    ],
  },
  {
    name: 'A.R. Rahman',
    cover: 'https://variety.com/wp-content/uploads/2024/03/AR-Rahman-Firdaus.jpg?w=1000&h=563&crop=1',
    songs: [
      { title: 'Aalaporan Thamizhan', youtube: 'https://www.youtube.com/watch?v=xsbLtHql4g8' },
      { title: 'Neethane', youtube: 'https://www.youtube.com/watch?v=fWajtP80g54' },
    ],
  },
];

const songsData = [
  { title: 'Vaathi Coming', youtube: 'https://www.youtube.com/watch?v=fRD_3vJagxk' },
  { title: 'Kutty Story', youtube: 'https://www.youtube.com/watch?v=nCNqPgXDYhY' },
  { title: 'Aalaporan Thamizhan', youtube: 'https://www.youtube.com/watch?v=xsbLtHql4g8' },
];

const Library = () => {
  const [view, setView] = useState('library');
  const [selectedItem, setSelectedItem] = useState(null);
  const [likedSongs, setLikedSongs] = useState(new Set());

  // Function to toggle the liked state of a song
  const toggleLike = (title) => {
    setLikedSongs((prev) => {
      const updatedLikes = new Set(prev);
      if (updatedLikes.has(title)) {
        updatedLikes.delete(title);
      } else {
        updatedLikes.add(title);
      }
      return updatedLikes;
    });
  };

  const renderLibrary = () => (
    <div className="library-sections">
      <div className="library-item" onClick={() => setView('albums')}>Albums</div>
      <div className="library-item" onClick={() => setView('artists')}>Artists</div>
      <div className="library-item" onClick={() => setView('songs')}>Songs</div>
    </div>
  );

  const renderAlbums = () => (
    <div className="albums-grid">
      {albumsData.map((album, index) => (
        <div
          className="album-card"
          key={index}
          onClick={() => setSelectedItem(album)}
        >
          <img src={album.cover} alt={album.name} className="album-cover" />
          <h3>{album.name}</h3>
          <p>{album.artist}</p>
        </div>
      ))}
    </div>
  );

  const renderArtists = () => (
    <div className="artists-grid">
      {artistsData.map((artist, index) => (
        <div
          className="artist-card"
          key={index}
          onClick={() => setSelectedItem(artist)}
        >
          <img src={artist.cover} alt={artist.name} className="artist-cover" />
          <h3>{artist.name}</h3>
        </div>
      ))}
    </div>
  );

  const renderSongs = (songs) => (
    <div className="songs-list">
      <button className="back-button" onClick={() => {
        setView(selectedItem ? (selectedItem.songs ? 'albums' : 'artists') : 'library');
        setSelectedItem(null);
      }}>
        &larr; Back
      </button>
      {songs.map((song, index) => (
        <div key={index} className="song-item">
          <div className="song-title">{song.title}</div>
          <div className="song-icons">
            <FaPlay
              className="play-icon"
              onClick={() => window.open(song.youtube, '_blank')}
            />
            <FaHeart
              className={`heart-icon ${likedSongs.has(song.title) ? 'liked' : ''}`}
              onClick={() => toggleLike(song.title)}
            />
            <FaShareAlt
              className="share-icon"
              onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(song.youtube)}`, '_blank')}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="library-container">
      <h2>Your Music Library</h2>
      {view === 'library' && renderLibrary()}
      {view === 'albums' && (selectedItem ? renderSongs(selectedItem.songs) : renderAlbums())}
      {view === 'artists' && (selectedItem ? renderSongs(selectedItem.songs) : renderArtists())}
      {view === 'songs' && renderSongs(songsData)}
    </div>
  );
};

export default Library;
