// src/components/DashboardNavbar.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardNavbar: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  // Simulação do nome do usuário (você pode substituir por um contexto ou chamada à API futuramente)
  const userName = 'Admin';

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="w-full bg-white border-b shadow-sm flex justify-end items-center px-6 py-3">
      <span className="text-sm text-gray-700 mr-4">Olá, <strong>{userName}</strong></span>
      <button
        onClick={handleLogout}
        className="text-sm bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
      >
        Sair
      </button>
    </div>
  );
};

export default DashboardNavbar;
