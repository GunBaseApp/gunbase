import React, { useState } from 'react';

function Firearms() {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');

  const firearms = [
    { id: 1, brand: 'Glock', model: 'G19', type: 'Pistol', caliber: '9mm' },
    { id: 2, brand: 'FN', model: '509 Tactical', type: 'Pistol', caliber: '9mm' },
    { id: 3, brand: 'MPA', model: 'MPR Pro II', type: 'Rifle', caliber: '6.5 CM' },
    { id: 4, brand: 'Savage', model: 'Axis II', type: 'Rifle', caliber: '.223' },
    { id: 5, brand: 'Mossberg', model: 'Shockwave', type: 'Shotgun', caliber: '12ga' },
  ];

  const filtered = firearms
    .filter(item =>
      `${item.brand} ${item.model}`.toLowerCase().includes(search.toLowerCase())
    )
    .filter(item => filterType === 'All' ? true : item.type === filterType);

  return (
    <div>
      <h2 style={{ marginBottom: '1rem' }}>Firearms Inventory</h2>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <input
          type="text"
          placeholder="Search firearms..."
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
          value={filterType}
          onChange={e => setFilterType(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        >
          <option value="All">All Types</option>
          <option value="Pistol">Pistol</option>
          <option value="Rifle">Rifle</option>
          <option value="Shotgun">Shotgun</option>
        </select>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f3f4f6' }}>
            <th style={th}>Brand</th>
            <th style={th}>Model</th>
            <th style={th}>Type</th>
            <th style={th}>Caliber</th>
          </tr>
        </thead>
        </tbody>
      </table>
    </div>
  );
}

const th = {
  textAlign: 'left',
  padding: '8px',
  borderBottom: '1px solid #ddd',
};

const td = {
  padding: '8px',
  borderBottom: '1px solid #ddd',
};

export default Firearms;
