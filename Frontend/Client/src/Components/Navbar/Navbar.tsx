import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

// interface NavbarProps {
//   // You can define any props here if needed
// }

const Navbar: React.FC = () => {
  const handleRegisterClick = () => {
    // Handle register button click
    console.log('Register button clicked');
  };

  const handleLoginClick = () => {
    // Handle login button click
    console.log('Login button clicked');
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="logo">213-BOOKING</Link>
        <div className="navItems">
          <button className="navButton" onClick={handleRegisterClick}>
            Register
          </button>
          <button className="navButton" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
