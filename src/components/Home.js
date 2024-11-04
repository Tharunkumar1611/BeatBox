// src/components/Home.js
import React, { useState } from 'react';
import './home.css';
import { FaPlay, FaHeart, FaShareAlt } from 'react-icons/fa';

const songs = [
  {
    title: "Naatu Naatu",
    movie: "RRR",
    cover: "https://variety.com/wp-content/uploads/2022/03/RRR1.jpg?w=1000&h=563&crop=1",
    link: "https://www.youtube.com/watch?v=OsU0CGZoV8E"
  },
  {
    title: "Vaathi Coming",
    movie: "Master",
    cover: "https://pbs.twimg.com/media/Esvs0blUUAALk6v.jpg:large",
    link: "https://www.youtube.com/watch?v=fRD_3vJagxk"
  },
  {
    title: "Rowdy Baby",
    movie: "Maari 2",
    cover: "https://i.pinimg.com/originals/ed/da/85/edda85280adb3b8719d3a9f503341436.jpg",
    link: "https://www.youtube.com/watch?v=3nauk_scj9U"
  }
];

const events = [
  {
    name: "AR Rahman Live Concert",
    place: "Chennai",
    date: "Dec 25, 2024",
    price: "₹2000",
    link: "#"
  },
  {
    name: "Lollapalooza India",
    place: "Mumbai",
    date: "Jan 5, 2025",
    price: "₹4000",
    link: "#"
  }
];

const Home = () => {
  const [likedSongs, setLikedSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleLike = (index) => {
    setLikedSongs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleShare = (title) => {
    const message = `Check out this song: ${title}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.movie.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <h2>Trending Tamil Songs 🎶</h2>

      <input
        type="text"
        className="search-bar"
        placeholder="Search songs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="song-list">
        {filteredSongs.map((song, index) => (
          <div className="song-card" key={index}>
            <img src={song.cover} alt={`${song.title} cover`} className="song-cover" />
            <div className="song-details">
              <h3>{song.title}</h3>
              <p>{song.movie}</p>
              <div className="song-actions">
                <a href={song.link} target="_blank" rel="noopener noreferrer">
                  <FaPlay className="icon play-icon" />
                </a>
                <FaHeart
                  className={`icon heart-icon ${
                    likedSongs.includes(index) ? "liked" : ""
                  }`}
                  onClick={() => toggleLike(index)}
                />
                <FaShareAlt
                  className="icon share-icon"
                  onClick={() => handleShare(song.title)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="events-section">
        <h2>Upcoming Concerts & Events 🎤</h2>
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h3>{event.name}</h3>
            <p>{event.place} - {event.date}</p>
            <p>Ticket Price: {event.price}</p>
            <a href={event.link} className="book-button">
              Book Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
