import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function RangeReportDetails() {
  const { id } = useParams();

  // Placeholder: replace with real data fetch later
  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <Link to="/range" style={{ color: '#3b82f6', marginBottom: '1rem', display: 'inline-block' }}>
        ← Back to Reports
      </Link>
      <h2>Report #{id}</h2>
      <p><strong>Details and editing form coming soon...</strong></p>
    </div>
  );
}
