import React, { useState } from 'react';

function RangeReports() {
const \[search, setSearch] = useState('');
const \[filterFirearm, setFilterFirearm] = useState('All');

const reports = \[
{
id: 1,
date: '2025-02-11',
location: 'Best of the West',
firearms: 'MPA 6.5 Creedmoor',
ammo: 'Hornady ELD Match',
notes: '300-yard grouping practice. Very tight groups.'
},
{
id: 2,
date: '2025-03-03',
location: 'Marksman Indoor Range',
firearms: 'FN509 Tactical',
ammo: 'Federal 9mm FMJ',
notes: 'Indoor drills. Practiced reloads and transitions.'
},
{
id: 3,
date: '2025-03-22',
location: 'Independence Firearms',
firearms: 'Aero DMR',
ammo: 'AAC SMK 140gr',
notes: 'Zeroed at 100 yards. Minor wind holds.'
},
];

const filtered = reports
.filter(item =>
item.location.toLowerCase().includes(search.toLowerCase())
)
.filter(item => filterFirearm === 'All' ? true : item.firearms === filterFirearm);

const firearmOptions = \[...new Set(reports.map(r => r.firearms))];

return ( <div>
\<h2 style={{ marginBottom: '1rem' }}>Range Reports</h2>

```
  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
    <input
      type="text"
      placeholder="Search by location..."
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
      value={filterFirearm}
      onChange={e => setFilterFirearm(e.target.value)}
      style={{
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc'
      }}
    >
      <option value="All">All Firearms</option>
      {firearmOptions.map((firearm, index) => (
        <option key={index} value={firearm}>{firearm}</option>
      ))}
    </select>
  </div>

  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr style={{ backgroundColor: '#f3f4f6' }}>
        <th style={th}>Date</th>
        <th style={th}>Location</th>
        <th style={th}>Firearms Used</th>
        <th style={th}>Ammo Used</th>
        <th style={th}>Notes</th>
        <th style={th}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {filtered.map(item => (
        <tr key={item.id}>
          <td style={td}>{item.date}</td>
          <td style={td}>{item.location}</td>
          <td style={td}>{item.firearms}</td>
          <td style={td}>{item.ammo}</td>
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

export default RangeReports;
