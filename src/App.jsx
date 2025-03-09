
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import PlayerListPage from "./Pages/PlayerListPage/PlayerListPage.jsx";
import ViewPlayerDetailPage from "./Pages/ViewPlayerDetailPage/ViewPlayerDetailPage.jsx";
import './App.css'
import AddPlayerPage from "./Pages/AddPlayerPage/AddPlayerPage.jsx";
import UpdatePage from "./Pages/UpdatePage/UpdatePage.jsx";

function App() {
  return (

    <Router>
      <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path="/playerList" element={<PlayerListPage/>} />
         <Route path="/view-player/:id" element={<ViewPlayerDetailPage />} />
         <Route path="/addplayer" element={<AddPlayerPage/>} />
         <Route path="/update" element={<UpdatePage/>} />

      </Routes>
    </Router>
  );   
}

export default App;
