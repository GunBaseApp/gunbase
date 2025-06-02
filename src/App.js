import React, { useState } from 'react';

function Ammo() {
  const [search, setSearch] = useState('');
  const [filterCaliber, setFilterCaliber] = useState('All');

  const ammoInventory = [
    { caliber: '9mm', brand: 'Federal', quantity: 500 },
    { caliber: '.223', brand: 'Hornady', quantity: 300 },
    { caliber: '6.5 Creedmoor', brand: 'AAC', quantity: 120 },
  ];

  const filteredAmmo = ammoInventory.filter(
    (ammo) =>
      (filterCaliber === 'All' || ammo.caliber === filterCaliber) &&
      (search === '' || ammo.brand.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <h2>Ammo Inventory</h2>
      <input
        type="text"
        placeholder="Search by brand"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={filterCaliber} onChange={(e) => setFilterCaliber(e.target.value)}>
        <option value="All">All Calibers</option>
        <option value="9mm">9mm</option>
        <option value=".223">.223</option>
        <option value="6.5 Creedmoor">6.5 Creedmoor</option>
      </select>
      <ul>
        {filteredAmmo.map((ammo, index) => (
          <li key={index}>
            {ammo.quantity} rounds of {ammo.brand} {ammo.caliber}
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ammo;
