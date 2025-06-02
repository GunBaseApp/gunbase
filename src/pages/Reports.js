import React, { useState } from 'react';

function Reports() {
const [selectedReport, setSelectedReport] = useState('');

const renderReport = () => {
switch (selectedReport) {
case 'ammo':
return <p>Showing ammo usage report... (placeholder)</p>;
case 'maintenance':
return <p>Showing maintenance history report... (placeholder)</p>;
case 'firearm':
return <p>Showing firearm usage trends... (placeholder)</p>;
default:
return <p>Select a report type above to view data.</p>;
}
};

return ( <div>
\<h2 style={{ marginBottom: '1rem' }}>Reports</h2>

```
  <select
    value={selectedReport}
    onChange={(e) => setSelectedReport(e.target.value)}
    style={{
      padding: '8px',
      marginBottom: '1.5rem',
      borderRadius: '4px',
      border: '1px solid #ccc'
    }}
  >
    <option value="">Select Report Type</option>
    <option value="ammo">Ammo Usage Report</option>
    <option value="maintenance">Maintenance History</option>
    <option value="firearm">Firearm Usage Trends</option>
  </select>

  <div style={{ background: '#f9fafb', padding: '1.5rem', borderRadius: '10px', minHeight: '150px' }}>
    {renderReport()}
  </div>
</div>


);
}

export default Reports;
