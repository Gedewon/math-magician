import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import DefaultLayout from './components/Layout/DefaultLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/math-magician">
      <DefaultLayout>
        <App />
      </DefaultLayout>
    </Router>
  </React.StrictMode>,
);
