import React, { useState } from 'react';

function Firearms() {
const \[search, setSearch] = useState('');
const \[filterType, setFilterType] = useState('All');

const firearms = \[
{ id: 1, name: 'Glock 19', caliber: '9mm', type: 'Handgun', rounds: 800, status: 'Clean' },
{ id: 2, name: 'MPA 6.5 Creedmoor', caliber: '6.5 CM', type: 'Precision Rifle', rounds: 215, status: 'Due for Cleaning' },
{ id: 3, name: 'Aero DMR', caliber: '6.5 CM', type: 'Semi-Auto DMR', rounds: 420, status: 'Clean' },
{ id: 4, name: 'FN509 Tactical', caliber: '9mm', type: 'Handgun', rounds: 1200, status: 'Due for Cleaning' },
];

const filtered = firearms
.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
.filter(item => filterType === 'All' ? true : item.type === filterType);

const statusColor = (status) => {
return status === 'Clean' ? '#10b981' : '#f97316';
};

return ( <div>
\<h2 style={{ marginBottom: '1rem' }}>Firearms Overview</h2>

```
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
      <option value="Handgun">Handgun</option>
      <option value="Precision Rifle">Precision Rifle</option>
      <option value="Semi-Auto DMR">Semi-Auto DMR</option>
    </select>
  </div>

  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr style={{ backgroundColor: '#f3f4f6' }}>
        <th style={th}>Name</th>
        <th style={th}>Type</th>
        <th style={th}>Caliber</th>
        <th style={th}>Rounds Fired</th>
        <th style={th}>Status</th>
        <th style={th}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {filtered.map(item => (
        <tr key={item.id}>
          <td style={td}>{item.name}</td>
          <td style={td}>{item.type}</td>
          <td style={td}>{item.caliber}</td>
          <td style={td}>{item.rounds.toLocaleString()}</td>
          <td style={{ ...td }}>
            <span style={{
              backgroundColor: statusColor(item.status),
              color: 'white',
              padding: '4px 8px',
              borderRadius: '6px',
              fontSize: '0.9rem'
            }}>
              {item.status}
            </span>
          </td>
          <td style={td}>
            <button style={{
              padding: '6px 10px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Edit
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

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
