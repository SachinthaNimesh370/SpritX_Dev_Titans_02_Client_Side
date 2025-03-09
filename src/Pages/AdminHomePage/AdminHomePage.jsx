import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideNav from '../../Components/SideNav/SideNav.jsx';

import './AdminHomePage.css';

function AdminHomePage() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Get the JWT token from localStorage

    axios
      .get("http://localhost:8080/api/v1/players/get", {
        headers: {
          Authorization: `Bearer ${token}`, // Attach JWT token in Authorization header
        },
      })
      .then((response) => {
        setPlayers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching players:", error);
        setError("Failed to load players");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="app-container">
        <SideNav />
        <div className="content">
          <h1 className="dashboard-title">Welcome to Admin Panel</h1>
          <p className="dashboard-description">Manage your Players</p>

          <div className="action-table">
            <h3>Latest Registering Players</h3>
            {loading ? (
              <p>Loading players...</p>
            ) : error ? (
              <p className="error">{error}</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Player Name</th>
                    <th>University</th>
                    <th>Category</th>
                    <th>Total Runs</th>
                    <th>Balls Faced</th>
                    <th>Innings Played</th>
                    <th>Wickets</th>
                    <th>Overs Bowled</th>
                    <th>Runs Conceded</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player, index) => (
                    <tr key={index}>
                      <td>{player.name}</td>
                      <td>{player.university}</td>
                      <td>{player.category}</td>
                      <td>{player.totalRuns}</td>
                      <td>{player.ballsFaced}</td>
                      <td>{player.inningsPlayed}</td>
                      <td>{player.wickets}</td>
                      <td>{player.oversBowled}</td>
                      <td>{player.runsConceded}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHomePage;
