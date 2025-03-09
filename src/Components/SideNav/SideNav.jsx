import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt,faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import "./SideNav.css";

function SideNav() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  function handleClick() {
    window.scrollTo({ top: 0 });
    setOpenDropdown(null);
  }

  function handleDropdown(toggleKey) {
    setOpenDropdown((prev) => (prev === toggleKey ? null : toggleKey));
  }

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img alt="logo" className="logo" />
      </div>

      <ul className="sidebar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")} onClick={handleClick}>
            <FontAwesomeIcon icon={faTachometerAlt} className="sidebar-icon" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        {/* Admin Dropdown */}
        <li>
          <Dropdown show={openDropdown === "Admin"} onToggle={() => handleDropdown("admin")}>
          <Dropdown.Toggle variant="light"className={`sidebar-link dropdown-toggle ${location.pathname.startsWith("/admins") || location.pathname.startsWith("/addadmin") ? "active" : "" }`}>
              <div className="dropdown-content">
                <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
                <span className="dropdown-text">Admin</span>
              </div>
            </Dropdown.Toggle>
            
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/admins" onClick={handleClick}>Admin List</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/addadmin" onClick={handleClick}>Add Admin</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>

        {/* Players Dropdown */}
        <li>
          <Dropdown show={openDropdown === "Players"} onToggle={() => handleDropdown("Players")}>
          <Dropdown.Toggle variant="light"className={`sidebar-link dropdown-toggle ${location.pathname.startsWith("/playerList") || location.pathname.startsWith("/addPlayer") ? "active" : "" }`}>
              <div className="dropdown-content">
                <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
                <span className="dropdown-text">Players</span>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/playerList" onClick={handleClick}>Players List</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/addPlayer" onClick={handleClick}>Add Player</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
