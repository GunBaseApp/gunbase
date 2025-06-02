import React from 'react';

function Totals() {
const data = {
totalFirearms: 12,
totalAmmo: 3250,
totalAccessoriesValue: 4200,
totalInvestment: 15800,
};

const cardStyle = {
background: '#f9fafb',
padding: '1.5rem',
borderRadius: '10px',
boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
minWidth: '200px',
textAlign: 'center'
};

return ( <div>
\<h2 style={{ marginBottom: '1.5rem' }}>Inventory Totals</h2>

```
  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
    <div style={cardStyle}>
      <h3>Total Firearms</h3>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{data.totalFirearms}</p>
    </div>
    <div style={cardStyle}>
      <h3>Total Ammo</h3>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{data.totalAmmo.toLocaleString()} rounds</p>
    </div>
    <div style={cardStyle}>
      <h3>Total Accessories Value</h3>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${data.totalAccessoriesValue.toLocaleString()}</p>
    </div>
    <div style={cardStyle}>
      <h3>Total Investment</h3>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${data.totalInvestment.toLocaleString()}</p>
    </div>
  </div>
</div>


);
}

export default Totals;
