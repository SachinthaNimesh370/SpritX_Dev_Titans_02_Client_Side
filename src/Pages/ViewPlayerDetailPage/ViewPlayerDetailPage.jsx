import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate for back navigation
import './ViewPlayerDetailPage.css'; // Import the CSS file for styling

const ViewPlayerDetailPage = () => {
  const { id } = useParams(); // Get the player ID from the URL parameter
  const navigate = useNavigate(); // Hook to handle navigation

  // Sample cricketers data with additional statistics
  const [cricketers] = React.useState([
    { id: 1, name: "Virat Kohli", category: "Batsman", university: "Peradeniya", totalRuns: 12000, BallsFaced: 13000, inningsPlayed: 250, wickets: 4, oversBowled: 12, runsConceded: 78 },
    { id: 2, name: "Jasprit Bumrah", category: "Bowler", university: "Vavuniya", totalRuns: 500, BallsFaced: 900, inningsPlayed: 50, wickets: 250, oversBowled: 800, runsConceded: 6000 },
    { id: 3, name: "MS Dhoni", category: "Wicketkeeper", university: "Jaffna", totalRuns: 10500, BallsFaced: 11000, inningsPlayed: 300, wickets: 0, oversBowled: 0, runsConceded: 0 },
  ]);

  // Find the player by ID from the cricketers array
  const player = cricketers.find((cricketer) => cricketer.id === parseInt(id));

  // If player is not found, show a message
  if (!player) {
    return <p>Player not found</p>;
  }

  return (
    <div className="app-container1">
      <div className="content1">
        <div className="card1">
          <h1 className="dashboard-title">Player Details</h1>
          <div className="player-details">
            <h3>{player.name}</h3>
            <p><strong>Category:</strong> {player.category}</p>
            <p><strong>University:</strong> {player.university}</p>
            <p><strong>Total Runs:</strong> {player.totalRuns}</p>
            <p><strong>Balls Faced:</strong> {player.BallsFaced}</p>
            <p><strong>Innings Played:</strong> {player.inningsPlayed}</p>
            <p><strong>Wickets:</strong> {player.wickets}</p>
            <p><strong>Overs Bowled:</strong> {player.oversBowled}</p>
            <p><strong>Runs Conceded:</strong> {player.runsConceded}</p>
          </div>

          {/* Back Link Inside the Card */}
          <a href="#" className="back-link" onClick={(e) => { e.preventDefault(); navigate(-1); }}>
            &lt; Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default ViewPlayerDetailPage;
