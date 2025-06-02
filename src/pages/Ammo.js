import React, { useState } from 'react';

function Ammo() {
  const [search, setSearch] = useState('');
  const [filterCaliber, setFilterCaliber] = useState('All');

  const ammoInventory = [
    { id: 1, brand: 'Hornady', type: 'ELD Match', caliber: '6.5 CM', quantity: 120 },
    { id: 2, brand: 'Federal', type: 'FMJ', caliber: '9mm', quantity: 600 },
    { id: 3, brand: 'AAC', type: 'SMK', caliber: '6.5 CM', quantity: 80 },
    { id: 4, brand: 'Winchester', type: 'White Box', caliber: '9mm', quantity: 250 },
    { id: 5, brand: 'Hornady', type: 'V-MAX', caliber: '.223', quantity: 300 },
  ];

  const filtered = ammoInventory
    .filter(item =>
      `${item.brand} ${item.type}`.toLowerCase().includes(search.toLowerCase())
    )
    .filter(item => filterCaliber === 'All' ? true : item.caliber === filterCaliber);

  return (
    <div>
      <h2 style={{ marginBottom: '1rem' }}>Ammo Inventory</h2>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <input
          type="text"
          placeholder="Search ammo..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            padding: '8px',
            width: '250px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />

        <select
          value={filterCaliber}
          onChange={e => s
