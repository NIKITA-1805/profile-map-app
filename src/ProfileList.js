import React from 'react';
import ProfileCard from './ProfileCard';
import './ProfileList.css'; // Ensure you have the relevant styles

const ProfileList = ({ people, onSummaryClick }) => {
  return (
    <div className="profile-list">
      {people.map((person, index) => (
        <ProfileCard key={index} person={person} onSummaryClick={onSummaryClick} />
      ))}
    </div>
  );
};

export default ProfileList;
