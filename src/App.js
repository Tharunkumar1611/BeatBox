// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Library from './components/Library';
import Playlist from './components/Playlist';
import LikedSongs from './components/LikedSongs';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/library" element={<Library />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/liked-songs" element={<LikedSongs />} />
    </Routes>
  </Router>
);

export default App;
