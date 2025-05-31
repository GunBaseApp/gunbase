import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Firearms from './Firearms';
import Ammo from './Ammo';
import Maintenance from './Maintenance';
import RangeReports from './RangeReports';
import Accessories from './Accessories';
import Totals from './Totals';
import Reports from './Reports';
import Sidebar from './Sidebar';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '200px', padding: '2rem', width: '100%' }}>
          <Routes>
            <Route path="/" element={<Firearms />} />
            <Route path="/ammo" element={<Ammo />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/range" element={<RangeReports />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/totals" element={<Totals />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


import React from 'react';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>GunBase Dashboard</h1>
      <ul style={{ lineHeight: '2' }}>
        <li>🔫 Firearms Overview</li>
        <li>💥 Ammo Inventory</li>
        <li>🧼 Maintenance Log</li>
        <li>🎯 Range Reports</li>
        <li>🧩 Accessory Management</li>
        <li>📊 Inventory Totals</li>
        <li>📁 Reports</li>
      </ul>
    </div>
  );
}

export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Firearms from './Firearms';
import Ammo from './Ammo';
import Maintenance from './Maintenance';
import RangeReports from './RangeReports';
import Accessories from './Accessories';
import Totals from './Totals';
import Reports from './Reports';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '200px', padding: '2rem', width: '100%' }}>
          <Routes>
            <Route path="/" element={<Firearms />} />
            <Route path="/ammo" element={<Ammo />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/range" element={<RangeReports />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/totals" element={<Totals />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

