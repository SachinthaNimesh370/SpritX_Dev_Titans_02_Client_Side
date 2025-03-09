

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayerListPage from "./Pages/PlayerListPage/PlayerListPage.jsx";
import ViewPlayerDetailPage from "./Pages/ViewPlayerDetailPage/ViewPlayerDetailPage.jsx";
import SignUpPage from "./Pages/SignUpPage/SignUpPage.jsx";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";

import './App.css'
import AddPlayerPage from "./Pages/AddPlayerPage/AddPlayerPage.jsx";
import UpdatePage from "./Pages/UpdatePage/UpdatePage.jsx";
import AdminHomePage from "./Pages/AdminHomePage/AdminHomePage.jsx";

function App() {
  return (


    <Router>
      <Routes>
        
         <Route path="/" element={<LoginPage />} />
         <Route path="/SignUpPage" element={<SignUpPage/>} />
         <Route path="/admin-dashboard" element={<AdminHomePage/>} />
         <Route path="/playerList" element={<PlayerListPage/>} />
         <Route path="/view-player/:id" element={<ViewPlayerDetailPage />} />
         <Route path="/addplayer" element={<AddPlayerPage/>} />
         <Route path="/update" element={<UpdatePage/>} />
       

      </Routes>
    </Router>
  );   
}

export default App;
