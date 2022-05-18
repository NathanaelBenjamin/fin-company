import React from 'react';
import TeamMembers
  from '../../components/Dashboard/Team/Team'
import Product from '../../components/Dashboard/Product/Product';
function Dashboard() {
  let userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
  return (
    <div>
      <h1>Welcome, {userDetails.displayName}</h1>
      <TeamMembers />
      <Product />
    </div>

  );
}

export default Dashboard;