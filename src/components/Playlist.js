import React, { useState } from 'react';
import './playlist.css';

const Playlist = () => {
  const [playlists, setPlaylists] = useState([
    {
      id: 1,
      name: ' Motivation Mix',
      songs: [
        { title: 'Unstoppable - Tamil Version', youtubeUrl: 'https://www.youtube.com/watch?v=YaEG2aWJnZ8' },
        { title: 'Verithanam', youtubeUrl: 'https://youtube.com/watch?v=rtd_VveAEaI' },
        { title: 'Aalaporan Thamizhan', youtubeUrl: 'https://www.youtube.com/watch?v=xsbLtHql4g8' }
      ],
    },
    {
      id: 2,
      name: ' Heartbreak Hits',
      songs: [
        { title: 'Ennodu Nee Irundhal', youtubeUrl: 'https://www.youtube.com/watch?v=EhhiY11Z9-U' },
        { title: 'Nenjukkul Peidhidum', youtubeUrl: 'https://www.youtube.com/watch?v=FzLpP8VBC6E' },
        { title: 'Kadhal Cricket', youtubeUrl: 'https://www.youtube.com/watch?v=xzxr6fxdI_E' }
      ],
    },
  ]);

  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [newSong, setNewSong] = useState('');

  const selectPlaylist = (playlist) => {
    setSelectedPlaylist(playlist);
  };

  const addPlaylist = () => {
    if (newPlaylistName) {
      setPlaylists([
        ...playlists,
        { id: playlists.length + 1, name: newPlaylistName, songs: [] },
      ]);
      setNewPlaylistName('');
    }
  };

  const deletePlaylist = (playlistId) => {
    setPlaylists(playlists.filter((playlist) => playlist.id !== playlistId));
    if (selectedPlaylist && selectedPlaylist.id === playlistId) {
      setSelectedPlaylist(null);
    }
  };

  const addSongToPlaylist = () => {
    if (newSong && selectedPlaylist) {
      const updatedPlaylists = playlists.map((playlist) =>
        playlist.id === selectedPlaylist.id
          ? { ...playlist, songs: [...playlist.songs, { title: newSong, youtubeUrl: 'https://youtube.com' }] }
          : playlist
      );
      setPlaylists(updatedPlaylists);
      setSelectedPlaylist({ ...selectedPlaylist, songs: [...selectedPlaylist.songs, { title: newSong, youtubeUrl: 'https://youtube.com' }] });
      setNewSong('');
    }
  };

  const handleLike = (songTitle) => {
    setPlaylists(playlists.map((playlist) => {
      if (playlist.id === selectedPlaylist.id) {
        return {
          ...playlist,
          songs: playlist.songs.map(song => 
            song.title === songTitle ? { ...song, liked: !song.liked } : song)
        };
      }
      return playlist;
    }));
  };

  const handleShare = (songTitle, youtubeUrl) => {
    const whatsappUrl = `https://wa.me/?text=Check out this song: ${songTitle} - ${youtubeUrl}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="playlist-container">
      <h2>Your Playlists</h2>

      <div className="playlist-section">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="playlist-card">
            <span onClick={() => selectPlaylist(playlist)}>{playlist.name}</span>
            <button className="delete-button" onClick={() => deletePlaylist(playlist.id)}>
              Del
            </button>
          </div>
        ))}
      </div>

      <div className="add-playlist-section">
        <input
          type="text"
          placeholder="New Playlist Name"
          value={newPlaylistName}
          onChange={(e) => setNewPlaylistName(e.target.value)}
        />
        <button onClick={addPlaylist} className="add-button">Add Playlist</button>
      </div>

      {selectedPlaylist && (
        <div className="playlist-detail">
          <h3>{selectedPlaylist.name}</h3>
          <ul>
            {selectedPlaylist.songs.map((song, index) => (
              <li key={index} className="song-item">
                <span>{song.title}</span>
                <div className="song-controls">
                  <button className="play-button" onClick={() => window.open(song.youtubeUrl, '_blank')}>▶️</button>
                  <button className={`like-button ${song.liked ? 'liked' : ''}`} onClick={() => handleLike(song.title)}>❤️</button>
                  <button className="share-button" onClick={() => handleShare(song.title, song.youtubeUrl)}>🔗</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="add-song-section">
            <input
              type="text"
              placeholder="Song Title"
              value={newSong}
              onChange={(e) => setNewSong(e.target.value)}
            />
            <button onClick={addSongToPlaylist} className="add-button">Add Song</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Playlist;
