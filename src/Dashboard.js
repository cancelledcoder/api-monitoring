import React from "react";
import "./Dashboard.css";
import lock from "./lock.svg";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <img src={lock} alt="lock" className="logo" />
        <div className="sidebar-item active">
          <div className="sidebar-icon"></div>
          Dashboard
        </div>
        <div className="sidebar-item">
          <div className="sidebar-icon"></div>
          API Calls
        </div>
        <div className="sidebar-item">
          <div className="sidebar-icon"></div>
          User in AEM
        </div>
        <div className="sidebar-item">
          <div className="sidebar-icon"></div>
          Alert
        </div>
        <div className="sidebar-item">
          <div className="sidebar-icon"></div>
          Action Activities
        </div>
        <div className="sidebar-item">
          <div className="sidebar-icon"></div>
          Alert configuration
        </div>
        <div className="sidebar-item">
          <div className="sidebar-icon"></div>
          Post
        </div>
        <div className="sidebar-item">
          <div className="sidebar-icon"></div>
          Post
        </div>
        <div className="sidebar-item">
          <div className="sidebar-icon"></div>
          Tickets
        </div>
        <div className="sidebar-item">
          <div className="sidebar-icon"></div>
          Reports
        </div>
        <div className="sidebar-item">
          <div className="sidebar-icon"></div>
          Jobs
        </div>
        <div className="sidebar-item">
          <div className="sidebar-icon"></div>
          Document
        </div>
        <div className="sidebar-item">
          <div className="sidebar-icon"></div>
          Payment
        </div>
      </div>
      <div className="dashboard-content">
        <div className="header">
          <div className="notification">
            <div className="notification-icon"></div>
          </div>
          <div className="user-info">
            <span>Femi John</span>
            <div className="user-icon"></div>
          </div>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <div className="dashboard-card-icon"></div>
              <span>1259</span>
            </div>
            <div className="dashboard-card-footer">Total API Calls</div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <div className="dashboard-card-icon"></div>
              <span>23</span>
            </div>
            <div className="dashboard-card-footer">Alerts</div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <div className="dashboard-card-icon"></div>
              <span>123</span>
            </div>
            <div className="dashboard-card-footer">Action Required</div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <div className="dashboard-card-icon"></div>
              <span>Upcoming Company Event</span>
            </div>
            <div className="dashboard-card-footer">Watch a thriller</div>
          </div>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-graph-container">
            <div className="dashboard-graph-header">
              <span>API calls Startastics</span>
              <span>Nov - July</span>
            </div>
            <div className="dashboard-graph">
              <canvas
                id="myChart"
                height="300"
                width="700"
                style={{ width: "100%" }}
              ></canvas>
              <div className="dashboard-graph-legend">
                <div className="dashboard-graph-legend-item">
                  <div
                    style={{
                      backgroundColor: "blue",
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></div>
                  <span>Last 6 Months</span>
                  <span>475 273</span>
                </div>
                <div className="dashboard-graph-legend-item">
                  <div
                    style={{
                      backgroundColor: "green",
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></div>
                  <span>Previous</span>
                  <span>782 396</span>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-card-header">
              <span>Tasks</span>
              <span>Show: This month</span>
            </div>
            <div className="dashboard-card-content">
              <div className="dashboard-card-circle">
                <span>60%</span>
              </div>
              <div className="dashboard-card-legend">
                <div className="dashboard-card-legend-item">
                  <div
                    style={{
                      backgroundColor: "orange",
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></div>
                  <span>Active</span>
                </div>
                <div className="dashboard-card-legend-item">
                  <div
                    style={{
                      backgroundColor: "green",
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></div>
                  <span>Completed</span>
                </div>
                <div className="dashboard-card-legend-item">
                  <div
                    style={{
                      backgroundColor: "red",
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></div>
                  <span>Ended</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-table-container">
            <table className="dashboard-table">
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
                  <td>
                    <div className="dashboard-table-user-icon"></div>
                    Lindsey Stroud
                  </td>
                  <td>lindsey.stroud@gmail.com</td>
                  <td>Technology Department</td>
                  <td>Head of Technology</td>
                </tr>
                <tr>
                  <td>
                    <div className="dashboard-table-user-icon"></div>
                    Sarah brown
                  </td>
                  <td>sarah.brown@gmail.com</td>
                  <td>Technology Department</td>
                  <td>Head of Technology</td>
                </tr>
                <tr>
                  <td>
                    <div className="dashboard-table-user-icon"></div>
                    Mary Jane
                  </td>
                  <td>mary.jane@gmail.com</td>
                  <td>Technology Department</td>
                  <td>Head of Technology</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
