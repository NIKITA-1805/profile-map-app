import React, { useState } from 'react';
import './App.css';
import ProfileList from './ProfileList'; // Import ProfileList component

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const people = [
    {
      name: 'John Doe',
      title: 'Software Engineer',
      address: '1600 Amphitheatre Parkway, Mountain View, CA',
      image: '/images/profile1.png', // Ensure correct path
    },
    {
      name: 'Jane Smith',
      title: 'Data Scientist',
      address: '1 Hacker Way, Menlo Park, CA',
      image: '/images/profile2.jpg', // Ensure correct path
    },
    {
      name: 'Alice Johnson',
      title: 'Product Manager',
      address: '500 Terry Francois Street, San Francisco, CA',
      image: '/images/profile3.png', // Ensure correct path
    },
  ];

  const handleSummaryClick = (person) => {
    setSelectedPerson(person);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedPerson(null);
  };

  return (
    <div className="App">
      <ProfileList people={people} onSummaryClick={handleSummaryClick} />
      
      {showPopup && (
        <div className="popup">
          <div className="popup-card">
            <img src={selectedPerson.image} alt={selectedPerson.name} />
            <h3>{selectedPerson.name}</h3>
            <p>{selectedPerson.title}</p>
            <p>{selectedPerson.address}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
