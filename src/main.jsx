import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from './router/routes.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Main from './layouts/Layout.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter router={routes}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

