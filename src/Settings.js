import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <div className="settings-options">
        <div className="settings-item">
          <label>Change Password:</label>
          <input type="password" placeholder="New Password" />
        </div>
        <div className="settings-item">
          <label>Notification Preferences:</label>
          <select>
            <option>Email</option>
            <option>SMS</option>
            <option>Push Notifications</option>
          </select>
        </div>
        <div className="settings-item">
          <label>Language:</label>
          <select>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
