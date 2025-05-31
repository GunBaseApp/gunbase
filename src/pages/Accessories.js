import React, { useState } from 'react';

function Accessories() {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');

  const accessories = [
    { id: 1, name: 'Holosun 507C', type: 'Optic', linkedTo: 'Glock 19' },
    { id: 2, name: 'Dead Air Nomad', type: 'Suppressor', linkedTo: 'MPA 6.5 Creedmoor' },
    { id: 3, name: 'Streamlight TLR-1', type: 'Light', linkedTo: 'FN509 Tactical' },
    { id: 4, name: 'Surefire SOCOM RC2', type: 'Suppressor', linkedTo: 'Aero DMR' },
  ];

  const filtered = accessories
    .filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(item =>
      filterType === 'All' ? true : item.type === filterType
    );

  return (
    <div>
      <h2 style={{ marginBottom: '1rem' }}>Accessories Overview</h2>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <input
          type="text"
          placeholder="Search accessories..."
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
          <option value="Optic">Optic</option>
          <option value="Suppressor">Suppressor</option>
          <option value="Light">Light</option>
        </select>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f3f4f6' }}>
            <th style={th}>Name</th>
            <th style={th}>Type</th>
            <th style={th}>Linked Firearm</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(item => (
            <tr key={item.id}>
              <td style={td}>{item.name}</td>
              <td style={td}>{item.type}</td>
              <td style={td}>{item.linkedTo}</td>
            </tr>
          ))}
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

export default Accessories;
