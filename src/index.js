import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; 
import awsconfig from './config/aws-exports';
import { Amplify } from 'aws-amplify';
import './index.css';

Amplify.configure(awsconfig);

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
