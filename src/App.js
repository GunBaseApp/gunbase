import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Ammo from './pages/Ammo';
import Firearms from './pages/Firearms';
import Accessories from './pages/Accessories';
import Maintenance from './pages/Maintenance';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ammo" element={<Ammo />} />
            <Route path="/firearms" element={<Firearms />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
