import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <img
  src="/logo.png"
  alt="GunBase Logo"
  style={{
    maxWidth: '160px',
    height: 'auto',
    objectFit: 'contain'
  }}
/>

      </div>
      <div style={styles.right}>
        <Link to="/" style={styles.link}>Dashboard</Link>
        <Link to="/firearms" style={styles.link}>Firearms</Link>
        <Link to="/ammo" style={styles.link}>Ammo</Link>
        <Link to="/maintenance" style={styles.link}>Maintenance</Link>
        <Link to="/range" style={styles.link}>Range Reports</Link>
        <Link to="/accessories" style={styles.link}>Accessories</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1f2937',
    color: 'white',
    borderBottom: '1px solid #374151',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '40px',
    objectFit: 'contain',
  },
  right: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.95rem',
  }
};

export default Navbar;
