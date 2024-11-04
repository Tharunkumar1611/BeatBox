import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SongCard from './SongCard';
import SearchBar from './SearchBar';
import Profile from './Profile'; // Import Profile component
import './dashboard.css';

const songs = [
  { title: 'Vaathi Coming', artist: 'Anirudh Ravichander', album: 'Master', link: 'https://www.youtube.com/watch?v=fRD_3vJagxk' },
  { title: 'Maara Theme', artist: 'G.V. Prakash Kumar', album: 'Soorarai Pottru', link: 'https://www.youtube.com/watch?v=tXE1ipZKsGI' },
  // Add more songs here
];

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h1 className="logo">BeatBox 🎵</h1>
        <Profile name="Tharun" email="ab@gmail.com" /> {/* Add Profile component */}
        <ul className="nav-menu">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/library">Library</Link></li>
          <li><Link to="/playlist">Playlist</Link></li>
          <li><Link to="/liked-songs">Liked Songs</Link></li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      <main className="content">
        <h2>Welcome to BeatBox!</h2>
        <p>Your personalized dashboard.</p>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="playlist-preview">
          <h3>Tamil Movie Songs 🎶</h3>
          <div className="song-cards">
            {songs
              .filter(song => song.title.toLowerCase().includes(searchTerm.toLowerCase())) // Filter based on search term
              .map((song, index) => (
                <SongCard
                  key={index}
                  title={song.title}
                  artist={song.artist}
                  album={song.album}
                  link={song.link}
                />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
