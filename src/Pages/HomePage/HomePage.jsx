import React from 'react'
import SideNav from '../../Components/SideNav/SideNav.jsx'

import './HomePage.css'
function HomePage() {

    const cricketers = [
      { id: 1, name: "Virat Kohli", category: "Batsman", status: "Pending" },
      { id: 2, name: "Jasprit Bumrah", category: "Bowler", status: "Pending" },
      { id: 3, name: "MS Dhoni", category: "Wicketkeeper", status: "Pending" },
      ];
    
      const handleAccept = (id) => {
        confirm(`cricketer for ${id} accepted.`);
        // Add functionality to update status in your database
      };
    
      const handleCancel = (id) => {
        confirm(`cricketer for ${id} canceled.`);
        // Add functionality to update status in your database
      };

  return (
    <>
        <div className="app-container">
        <SideNav />
        <div className="content">
         <div>
          <h1 className="dashboard-title">Welcome to  Admin Panel </h1>
          <p className="dashboard-description">Manage your Players </p>

          <div className="action-table">
            <h3>Latest Registering cricketers</h3>
            <table>
              <thead>
                <tr>
                  <th>Crickater Name</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cricketers.map((cricketer) => (
                  <tr key={cricketer.id}>
                    <td>{cricketer.name}</td>
                    <td>{cricketer.category}</td>
                    <td>{cricketer.status}</td>
                    <td>
                      <button className="accept-btn" onClick={() => handleAccept(cricketer.id)}>Accept</button>
                      <button className="cancel-btn" onClick={() => handleCancel(cricketer.id)}>Cancel</button>
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default HomePage