import React from 'react';
import DashboardContent from '../dashboardcontent/DashboardContent';
function Dashboard() {
  let userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
  return (
    <div>
      <h1>Welcome, {userDetails.displayName}</h1>
      <DashboardContent />
    </div>

  );
}

export default Dashboard;