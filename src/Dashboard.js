import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const data = {
    labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Last 6 months',
        data: [20, 30, 50, 40, 70, 60, 90, 100],
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Previous',
        data: [40, 50, 70, 60, 80, 90, 110, 120],
        borderColor: 'green',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'API Calls Statistics',
      },
    },
  };

  return (
    <div className="dashboard-container">
      <div className="stats-cards">
        <div className="card">Total API Calls: 1259</div>
        <div className="card">Alerts: 23</div>
        <div className="card">Action Required: 123</div>
      </div>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
      <div className="tasks">
        <h3>Tasks</h3>
        <div className="progress-circle">
          <div className="circle">
            <span>60%</span>
          </div>
        </div>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
