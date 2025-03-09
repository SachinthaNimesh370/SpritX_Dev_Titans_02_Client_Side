import React, { useState } from 'react';
import './AddPlayerPage.css'; // Import the CSS file
import SideNav from '../../Components/SideNav/SideNav';

const AddPlayerPage = () => {
  const [player, setPlayer] = useState({
    name: '',
    category: '',
    university: '',
    totalRuns: '',
    ballsFaced: '',
    inningsPlayed: '',
    wickets: '',
    oversBowled: '',
    runsConceded: ''
  });

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Player Data Submitted:", player);
    alert("Player added successfully!");
    setPlayer({
      name: '',
      category: '',
      university: '',
      totalRuns: '',
      ballsFaced: '',
      inningsPlayed: '',
      wickets: '',
      oversBowled: '',
      runsConceded: ''
    });
  };

  return (
    <div className="appcontainer">
        <SideNav/>
      <div className="form-container">
        <h2 className="form-title">Add New Player</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Player Name:</label>
            <input type="text" name="name" value={player.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Category:</label>
            <select name="category" value={player.category} onChange={handleChange} required>
              <option value="">Select Category</option>
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
              <option value="Wicketkeeper">Wicketkeeper</option>
              <option value="All-rounder">All-rounder</option>
            </select>
          </div>

          <div className="form-group">
            <label>University:</label>
            <input type="text" name="university" value={player.university} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Total Runs:</label>
            <input type="number" name="totalRuns" value={player.totalRuns} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Balls Faced:</label>
            <input type="number" name="ballsFaced" value={player.ballsFaced} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Innings Played:</label>
            <input type="number" name="inningsPlayed" value={player.inningsPlayed} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Wickets:</label>
            <input type="number" name="wickets" value={player.wickets} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Overs Bowled:</label>
            <input type="number" name="oversBowled" value={player.oversBowled} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Runs Conceded:</label>
            <input type="number" name="runsConceded" value={player.runsConceded} onChange={handleChange} required />
          </div>

          <button type="submit" className="submit-btn">Add Player</button>
        </form>
      </div>
    </div>
  );
};

export default AddPlayerPage;
