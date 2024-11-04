// Profile.js
import React from 'react';
import './profile.css'; // Importing the Profile CSS

const Profile = ({ name, email }) => {
  return (
    <div className="profile">
      <div className="profile-circle" /> {/* Circular placeholder */}
      <h3 className="profile-name">{name}</h3>
      <p className="profile-email">{email}</p>
    </div>
  );
};

export default Profile;
