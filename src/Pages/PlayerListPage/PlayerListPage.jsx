import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import './PlayerListPage.css';
import SideNav from "../../Components/SideNav/SideNav";

function PlayerListPage() {
  const navigate = useNavigate(); // Use useNavigate hook
  const [cricketers, setCricketers] = useState([
    { id: 1, name: "Virat Kohli", category: "Batsman", university: "Peradeniya" },
    { id: 2, name: "Jasprit Bumrah", category: "Bowler", university: "Vavuniya" },
    { id: 3, name: "MS Dhoni", category: "Wicketkeeper", university: "Jaffna" },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this player?")) {
      setCricketers(cricketers.filter((player) => player.id !== id));
    }
  };

  const handleUpdate = (updatedPlayer) => {
    setCricketers(
      cricketers.map((player) =>
        player.id === updatedPlayer.id ? updatedPlayer : player
      )
    );
  };

  // View Player Details - Navigate to ViewPlayerDetailPage
  const handleView = (player) => {
    navigate(`/view-player/${player.id}`); // Navigate to the details page with player ID
  };

  return (
    <div className="app-container">
      <SideNav />
      <div className="content">
        <div>
          <h1 className="dashboard-title">Welcome to Admin Panel</h1>
          <p className="dashboard-description">Manage your Players</p>

          <div className="action-table">
            <h3>Latest Registering Cricketers</h3>
            <table>
              <thead>
                <tr>
                  <th>Cricketer Name</th>
                  <th>Category</th>
                  <th>University</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cricketers.map((cricketer) => (
                  <tr key={cricketer.id}>
                    <td>{cricketer.name}</td>
                    <td>{cricketer.category}</td>
                    <td>{cricketer.university}</td>
                    <td>
                      <button className="view-btn" onClick={() => handleView(cricketer)}>
                        View
                      </button>
                      <button className="update-btn" onClick={() => handleUpdate(cricketer.id)}>
                        Update
                      </button>
                      <button className="delete-btn" onClick={() => handleDelete(cricketer.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerListPage;
