import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './layouts/Layout';
import Index from './pages/home.jsx'; 
import Detalles from './pages/Detalles/Detalles'; 
import ErrorPage from './pages/ErrorPage'; 
import Mantenimiento from './pages/Mantenimiento.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/detalles/:pagina" element={<Detalles />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
