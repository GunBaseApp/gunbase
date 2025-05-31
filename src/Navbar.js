import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/firearms">Firearms</Link></li>
        <li><Link to="/ammo">Ammo</Link></li>
        <li><Link to="/accessories">Accessories</Link></li>
        <li><Link to="/maintenance">Maintenance</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
