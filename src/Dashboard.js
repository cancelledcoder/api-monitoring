import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import LockIcon from './lock.svg';
import BellIcon from './bell.png';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);

const lineChartData = {
  labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Last 6 Months',
      data: [25, 45, 35, 25, 55, 20, 15, 25],
      borderColor: 'blue',
      borderWidth: 1,
      fill: false,
    },
    {
      label: 'Previous',
      data: [20, 25, 25, 35, 30, 35, 40, 45],
      borderColor: 'green',
      borderWidth: 1,
      fill: false,
    },
  ],
};

const doughnutChartData = {
  labels: ['Active', 'Completed', 'Ended'],
  datasets: [
    {
      data: [60, 30, 10],
      backgroundColor: ['#03a9f4', '#8bc34a', '#f44336'],
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <nav className="top-nav">
        <img src={LockIcon} alt="Lock" className="nav-icon lock-icon" />
        <div className="nav-right">
          <img src={BellIcon} alt="Bell" className="nav-icon" />
          <span>Femi John</span>
          <div className="nav-icon profile-icon"></div>
          <span className="dropdown-arrow">&#9662;</span>
        </div>
      </nav>
      <aside className="side-bar">
        <div className="side-bar-item selected">
          <div className="side-icon"></div>
          <span><a href="/dashboard">Dashboard</a></span>
          <span className="side-arrow">&#9656;</span>
        </div>
        {['API Calls', 'User in AEM', 'Alert', 'Action Activities', 'Alert configuration', 'Post', 'Tickets', 'Reports', 'Jobs', 'Document', 'Payment', 'Setting'].map(title => (
          <div key={title} className="side-bar-item">
            <div className="side-icon"></div>
            <span><a href={`/${title.toLowerCase().replace(/\s+/g, '-')}`}>{title}</a></span>
          </div>
        ))}
      </aside>
      <main className="main-content">
        <div className="summary-cards">
          <div className="summary-card red-blur">
            <h2>1259</h2>
            <h3>Total API Calls</h3>
          </div>
          <div className="summary-card orange-blur">
            <h2>23</h2>
            <h3>Alerts</h3>            
          </div>
          <div className="summary-card green-blur">
            <h2>123</h2>
            <h3>Action Required</h3>
          </div>
          <div className="upcoming-event">
          <h4>Upcoming Company Event</h4>
          <p>Watch a thriller</p>
          </div>
        </div>
        <div className="chart-container">
          <h3>API calls Statistics</h3>
          <p>Nov - July</p>
          <Line data={lineChartData} />
        </div>
        <div className="tasks-container">
          <h3>Tasks</h3>
          <p>Show: This month</p>
          <Doughnut data={doughnutChartData} />
        </div>
        <div className="users-container">
          <table>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Email Address</th>
                <th>Department</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lindsey Stroud</td>
                <td>lindsey.stroud@gmail.com</td>
                <td>Technology Department</td>
                <td>Head of Technology</td>
              </tr>
              <tr>
                <td>Sarah Brown</td>
                <td>sarah.brown@gmail.com</td>
                <td>Technology Department</td>
                <td>Head of Technology</td>
              </tr>
              <tr>
                <td>Mary Jane</td>
                <td>mary.jane@gmail.com</td>
                <td>Technology Department</td>
                <td>Head of Technology</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
