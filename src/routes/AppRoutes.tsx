import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ProcedimentosPage from '@/pages/Procedimentos';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/procedimentos" element={<ProcedimentosPage />} />
      </Routes>
    </BrowserRouter>
  );
}
