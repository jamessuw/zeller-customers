import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Your main application component
import awsconfig from './config/aws-exports';
import { Amplify } from 'aws-amplify'
import './index.css'

Amplify.configure(awsconfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
