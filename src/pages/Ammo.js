import React, { useState } from 'react';

function Ammo() {
const \[search, setSearch] = useState('');
const \[filterCaliber, setFilterCaliber] = useState('All');

const ammoInventory = \[
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

return ( <div>
\<h2 style={{ marginBottom: '1rem' }}>Ammo Inventory</h2>

```
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
      onChange={e => setFilterCaliber(e.target.value)}
      style={{
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc'
      }}
    >
      <option value="All">All Calibers</option>
      <option value="9mm">9mm</option>
      <option value="6.5 CM">6.5 CM</option>
      <option value=".223">.223</option>
    </select>
  </div>

  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr style={{ backgroundColor: '#f3f4f6' }}>
        <th style={th}>Brand</th>
        <th style={th}>Type</th>
        <th style={th}>Caliber</th>
        <th style={th}>Quantity</th>
        <th style={th}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {filtered.map(item => (
        <tr key={item.id}>
          <td style={td}>{item.brand}</td>
          <td style={td}>{item.type}</td>
          <td style={td}>{item.caliber}</td>
          <td style={td}>{item.quantity}</td>
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

export default Ammo;
