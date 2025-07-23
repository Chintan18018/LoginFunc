import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUsername(user.employee_name); 
    }
  }, []);

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      
    </div>
  );
};

export default Dashboard;
