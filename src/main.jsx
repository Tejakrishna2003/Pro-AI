import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ReactGA from 'react-ga4';
import { SpeedInsights } from "@vercel/speed-insights/react"

ReactGA.initialize(`${import.meta.env.VITE_GOOGLE_ANALYTICS_KEY}`);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App />
  < SpeedInsights />
  </React.StrictMode>

);
