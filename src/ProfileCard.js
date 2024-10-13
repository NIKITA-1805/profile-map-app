import React from 'react';
import './ProfileCard.css'; // Import the CSS file for styling

function ProfileCard({ person, onSummaryClick }) {
  return (
    <div className="profile-card">
      <button className="summary-button" onClick={() => onSummaryClick(person)}>Summary</button>
      <h3 className="name">{person.name}</h3>
      <img src={person.image} alt={person.name} className="profile-image" />
      <p className="description">{person.title}</p>
      <p className="address">{person.address}</p>
    </div>
  );
}

export default ProfileCard;
