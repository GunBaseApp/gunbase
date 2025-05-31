import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Firearms from './pages/Firearms';
import Ammo from './pages/Ammo';
import Accessories from './pages/Accessories';
import Maintenance from './pages/Maintenance';
import Reports from './pages/Reports';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/firearms" element={<Firearms />} />
        <Route path="/ammo" element={<Ammo />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;
