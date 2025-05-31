import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <h2>GunBase</h2>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link to="/" style={{ color: '#fff' }}>Dashboard</Link></li>
        <li><Link to="/firearms" style={{ color: '#fff' }}>Firearms</Link></li>
        <li><Link to="/ammo" style={{ color: '#fff' }}>Ammo</Link></li>
        <li><Link to="/accessories" style={{ color: '#fff' }}>Accessories</Link></li>
        <li><Link to="/maintenance" style={{ color: '#fff' }}>Maintenance</Link></li>
        <li><Link to="/totals" style={{ color: '#fff' }}>Inventory Totals</Link></li>
        <li><Link to="/reports" style={{ color: '#fff' }}>Reports</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
