import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>GunBase</h2>
      <nav>
        <ul>
          <li><Link to="/">Firearms</Link></li>
          <li><Link to="/ammo">Ammo Inventory</Link></li>
          <li><Link to="/maintenance">Maintenance</Link></li>
          <li><Link to="/range">Range Reports</Link></li>
          <li><Link to="/accessories">Accessories</Link></li>
          <li><Link to="/totals">Inventory Totals</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
