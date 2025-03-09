import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdatePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { player } = location.state || {};

  const [updatedPlayer, setUpdatedPlayer] = useState(player);

  const handleChange = (e) => {
    setUpdatedPlayer({ ...updatedPlayer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Player Details:", updatedPlayer);
    navigate(-1);
  };

  if (!player) {
    return <p>No player data available.</p>;
  }

  return (
    <div className="app-container1">
      <div className="content1">
        <div className="card1">
          <h1 className="dashboard-title">Update Player Details</h1>
          <form onSubmit={handleSubmit}>
            <label>Name: <input type="text" name="name" value={updatedPlayer.name} onChange={handleChange} /></label>
            <label>Category: <input type="text" name="category" value={updatedPlayer.category} onChange={handleChange} /></label>
            <label>University: <input type="text" name="university" value={updatedPlayer.university} onChange={handleChange} /></label>
            <label>Total Runs: <input type="number" name="totalRuns" value={updatedPlayer.totalRuns} onChange={handleChange} /></label>
            <label>Balls Faced: <input type="number" name="BallsFaced" value={updatedPlayer.BallsFaced} onChange={handleChange} /></label>
            <label>Innings Played: <input type="number" name="inningsPlayed" value={updatedPlayer.inningsPlayed} onChange={handleChange} /></label>
            <label>Wickets: <input type="number" name="wickets" value={updatedPlayer.wickets} onChange={handleChange} /></label>
            <label>Overs Bowled: <input type="number" name="oversBowled" value={updatedPlayer.oversBowled} onChange={handleChange} /></label>
            <label>Runs Conceded: <input type="number" name="runsConceded" value={updatedPlayer.runsConceded} onChange={handleChange} /></label>
            <button type="submit">Update</button>
          </form>
          <a href="#" className="back-link" onClick={(e) => { e.preventDefault(); navigate(-1); }}>
            &lt; Back
          </a>
        </div>
      </div>
    </div>
  );
}

export default UpdatePage;