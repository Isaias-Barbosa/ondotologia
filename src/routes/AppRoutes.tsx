import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ProcedimentosPage from '@/pages/Procedimentos';
import Login from '@/pages/Login';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/procedimentos" element={<ProcedimentosPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
