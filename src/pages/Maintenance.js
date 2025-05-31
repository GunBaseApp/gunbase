import React, { useState } from 'react';

function Maintenance() {
const \[search, setSearch] = useState('');
const \[filterType, setFilterType] = useState('All');

const logs = \[
{ id: 1, firearm: 'Glock 19', type: 'Cleaning', date: '2024-12-01', notes: 'Basic wipe down and oil' },
{ id: 2, firearm: 'MPA 6.5 Creedmoor', type: 'Bore Cleaning', date: '2025-01-10', notes: 'Used bore guide and copper solvent' },
{ id: 3, firearm: 'Aero DMR', type: 'Scope Adjustment', date: '2025-03-05', notes: 'Zeroed at 100 yards' },
{ id: 4, firearm: 'FN509 Tactical', type: 'Cleaning', date: '2025-04-15', notes: 'Disassembled and cleaned slide + barrel' },
];

const filtered = logs
.filter(item =>
item.firearm.toLowerCase().includes(search.toLowerCase())
)
.filter(item => filterType === 'All' ? true : item.type === filterType);

return ( <div>
\<h2 style={{ marginBottom: '1rem' }}>Maintenance Log</h2>

```
  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
    <input
      type="text"
      placeholder="Search by firearm..."
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
      <option value="Cleaning">Cleaning</option>
      <option value="Bore Cleaning">Bore Cleaning</option>
      <option value="Scope Adjustment">Scope Adjustment</option>
    </select>
  </div>

  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr style={{ backgroundColor: '#f3f4f6' }}>
        <th style={th}>Firearm</th>
        <th style={th}>Type</th>
        <th style={th}>Date</th>
        <th style={th}>Notes</th>
        <th style={th}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {filtered.map(item => (
        <tr key={item.id}>
          <td style={td}>{item.firearm}</td>
          <td style={td}>{item.type}</td>
          <td style={td}>{item.date}</td>
          <td style={td}>{item.notes}</td>
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

export default Maintenance;
